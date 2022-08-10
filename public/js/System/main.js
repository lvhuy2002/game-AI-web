import { Game } from '../Game/Game.js';
import { Time } from './Time.js';
import { InputHandler } from './InputHandler.js';
import { Renderer } from './Renderer.js';
import { Draw } from './Draw.js'
import { EntityManager } from './EntityManager.js';
import { Score } from '../Game/Score.js';
import { Losing } from '../Game/Losing.js'

window.addEventListener("load", function() {
    //Loading game
    const gameHtml = document.getElementsByClassName('game')[0];

    //Loading game canvas
    const canvas = document.getElementById("canvas1");
    canvas.width = 1600;
    canvas.height = 1000;
    
    
    //Loading draw canvas
    const canvasDraw = document.getElementById("canvas2");
    const canvasDrawResize = document.getElementById("canvas2-resize")
    canvasDraw.width = 250;
    canvasDraw.height = 250;

    //Loading score
    const scoreGame = document.querySelector('#score')

    //Loading pauseButton
    const pause = document.querySelector('.pause-button');
    const unpause = document.querySelector('.unpause-button');
    let isPause = false;
    pause.style.display = "none";
    pause.onclick = function() {
        unpause.style.display = 'block';
        pause.style.display = 'none'
        isPause = false;
    }

    unpause.onclick = function() {
        unpause.style.display = 'none';
        pause.style.display = 'block';
        isPause = true;
    }

    //Loading lose board
    const loseBoard = document.querySelector('.lose-board');
    const result = document.querySelector('#result')
    let isReplay = false;
    const replay = document.querySelector('#replay-button');

    replay.onclick = function() {
        isReplay = true;
    }

    let isFetch = false;
    
    async function init() {
        let model;
        let scoreString;
        let scoreInt;
        model = await tf.loadLayersModel('model/model.json');
        //model.summary();
        
        //Phải theo thứ tự như dưới
        //////////1//////////
        gameHtml.style.display = 'none';
        const renderer = new Renderer(canvas);
        Renderer.setInstance(renderer);
        
        //////////2//////////
        let game = new Game(canvas);
        const PostScore = (data) => {
            fetch('https://highscore-api.herokuapp.com/api/scores', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin':'*'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .catch(err => alert(err))
            
        }
        function animate() {

            if (gameHtml.style.display === 'none' || isReplay === true) {
                loseBoard.style.display = "none";
                unpause.style.display = 'block';
                pause.style.display = 'none'
                EntityManager.getInstance().removeAllEntities();
                game.changeIsGameStateChange();
                Score.getInstance().resetScore();
                Losing.getInstance().resetLose();
                Time.getInstance().reset();
                Draw.getInstance(canvasDraw, canvasDrawResize, model, tf);
                isReplay = false;
                isPause = false;
                isFetch = false;
            }

            if (gameHtml.style.display === 'block') {
                if (!Losing.getInstance().isLose()) {
                    if (!isPause) {
                        loseBoard.style.display = "none";
                        //Phải theo thứ tự như dưới
                        //////////1//////////
                        Time.getInstance().update();
    
                        //////////2//////////
                        EntityManager.getInstance().update();
                        game.changeState();
                        game.update();
                        scoreInt = Score.getInstance().getScore()
                        scoreString = scoreInt.toString()
                        scoreGame.innerText = scoreString;
                        Renderer.getInstance().render();
    
                        //////////3//////////
                        Draw.getInstance(canvasDraw, canvasDrawResize, model, tf).update();
                    } else {
                        Time.getInstance().update();
                    }
                } else {
                    result.innerText = scoreString;
                    if (!isFetch) {
                        PostScore({"name": "h", "score": scoreInt})
                        isFetch = true;
                    } 
                    loseBoard.style.display = "block";
                }
                
            } 
            requestAnimationFrame(animate);
        }
        animate();
    }
    init();
});
    