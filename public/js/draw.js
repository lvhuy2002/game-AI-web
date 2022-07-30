const gameDraw = document.querySelector("#game-draw");
const ctx = gameDraw.getContext("2d");

const canvasOffsetX = gameDraw.offsetLeft;
const canvasOffsetY = gameDraw.offsetTop;

gameDraw.width = innerWidth * 0.25 * 0.9;
gameDraw.height = gameDraw.width;
ctx.fillStyle = "rgb(255, 255, 255)";
ctx.fillRect(0, 0, gameDraw.width, gameDraw.height);
let isPainting = false;
let lineWidth = 5;
let startX;
let startY;

async function init() {
    model = await tf.loadModel('model/model.json')
}
//init();
const draw = (e) => {
    if(!isPainting) {
        return;
    }
    
    ctx.lineWidth = 12;
    ctx.lineCap = 'round';
    ctx.strokeStyle = "rgb(0, 0, 0)";
    ctx.lineTo(e.clientX - canvasOffsetX, e.clientY - canvasOffsetY);
    ctx.stroke();
    
}

gameDraw.addEventListener('mousedown', (e) => {
    isPainting = true;
    startX = e.clientX - canvasOffsetX;
    startY = e.clientY - canvasOffsetY;
});

gameDraw.addEventListener('mouseup', e => {
    isPainting = false;
    ctx.stroke();
    ctx.beginPath();
    //checkImage();
    var imgd = ctx.getImageData(0, 0, gameDraw.width, gameDraw.height);
    console.log(imgd);
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.fillRect(0, 0, gameDraw.width, gameDraw.height);
});

gameDraw.addEventListener('mousemove', draw);

function checkImage() {
    var arr = [];
    
    for (var i = 0; i < imgd.length; i += 4) {
        arr.push(a[i]);
        arr.push(a[i+1]);
        arr.push(a[i+2]);
    }
    console.log(arr);
    return checkModel(arr)
}

function checkModel(arr){
    // TODO: chuyen anh va load model
}