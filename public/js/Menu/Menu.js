
const highScoreBtn = document.querySelector('.button-highScore');
const tutorial = document.querySelector('.button-tutorial');
const homeButtonLoseBoard = document.querySelector('#home-button-lose-board');
const start = document.querySelector('.button-start');
const sound = document.querySelector('.sound-button');
const mute = document.querySelector('.mute-button');
const highScore = document.querySelector('.high-score');
const back = document.querySelector('.button-back');
const top1 = document.querySelector('.top1');
const top2 = document.querySelector('.top2');
const top3 = document.querySelector('.top3');
const top4 = document.querySelector('.top4');
const top5 = document.querySelector('.top5');


mute.style.display = "none";
highScore.style.display = "none";

start.onclick = function() {
    document.getElementsByClassName('game')[0].style.display = 'block';
    document.getElementsByClassName('menu')[0].style.display = 'none';
}

    
homeButtonLoseBoard.onclick = function() {
    document.getElementsByClassName('menu')[0].style.display = 'block';
    document.getElementsByClassName('game')[0].style.display = 'none';
}

sound.onclick = function() {
    mute.style.display = 'block';
    sound.style.display = 'none';
}

mute.onclick = function() {
    mute.style.display = 'none';
    sound.style.display = 'block';
}

highScoreBtn.onclick = function() {
    fetch('https://highscore-api.herokuapp.com/api/scores')
      .then(res => res.json())
      .then(post => setHighScore(post))
      .catch(err => alert(err))

}
const setHighScore = (post) => {
    highScore.style.display = "block";
    let sortedPost = post.sort((a,b) => b.score - a.score)
    top1.innerText = sortedPost[0].score;
    top2.innerText = sortedPost[1].score;
    top3.innerText = sortedPost[2].score;
    top4.innerText = sortedPost[3].score;
    top5.innerText = sortedPost[4].score;
    
}

back.onclick = function() {
    highScore.style.display = "none";
}