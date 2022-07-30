const canvas = document.querySelector('#game-canvas')
const c = canvas.getContext("2d")
canvas.width = innerWidth * 0.75 * 0.9;
canvas.height = innerHeight * 0.9;
class Enemy {
    constructor(positionX, value) {
        this.position = {
            x: positionX,
            y: -100
        }
        this.velocity = 2
        this.width = 50
        this.height = 70
        this.value = value
        this.isDead = false;
    }
    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    delete() {
        c.clearRect(this.position.x, this.position.y, this.width, this.height)
    }
    update() {
        if (this.isDead) {
            this.delete()
            return;
        } 
        this.draw()
        this.position.y += this.velocity
        if (this.position.y + this.height + this.velocity > canvas.height) {
            this.velocity = 0;
        }
    
    }
}
var Enemies = [];
var time = 0;
var isGameOver = false;
var isLose = false;
Enemies.push(new Enemy(Math.floor(Math.random() * (canvas.width - 80)) + 20, Math.floor(Math.random() * 10)))


function animate() {
    requestAnimationFrame(animate)
    Enemies.forEach(enemy => {
        if (enemy.velocity === 0) {
            isLose = true
        }
    })
    if (!isLose) {
        c.clearRect(0, 0, canvas.width, canvas.height)
    }   
    time++;
    if (time === 200 && !isLose) {
        Enemies.push(new Enemy(Math.floor(Math.random() * (canvas.width - 80)) + 20, Math.floor(Math.random() * 10)))
        time = 0;
    }
    
    Enemies.forEach(enemy => {
        if (!isLose){
            enemy.update()
        }
        
    });
    
}

animate()

addEventListener("keydown", (e) => {
    var pos = [];
    for (var i = 0; i < Enemies.length; i++) {
        if (Enemies[i].value === parseInt(e.key) && Enemies[i].position.y > 0 && Enemies[i].position.y < canvas.height) {
            Enemies[i].isDead = true;
        }
    }
    Enemies = Enemies.filter(enemy => enemy.value !== parseInt(e.key))
    console.log(Enemies)
})