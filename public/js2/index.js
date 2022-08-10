const webcamElement = document.getElementById('webcam');
const canvasElement = document.getElementById('canvas');
const canvas2 = document.querySelector('#canvas2')
const chup = document.querySelector('#snap')
const pred = document.querySelector('#predictExpressions')
const prob = document.querySelector('#probabilityExpressions')
const ctx = canvasElement.getContext('2d');
const ctx2 = canvas2.getContext('2d');
const webcam = new Webcam(webcamElement, 'user', canvasElement);



async function init() {
    model = await tf.loadLayersModel('model/model.json');
    model.summary();
}

webcam.start()
   .then(result =>{
      console.log("webcam started");
   })
   .catch(err => {
       console.log(err);
   });

function predict(data) {
    let value = getPixel(data);
    let scores = model.predict(value).dataSync();
	let id = scores.indexOf(Math.max(...scores));	
	return {id: id, score: scores[id]}
}
function getPixel(ImgData) {
    let values = [];
    for (let i = 0 ; i < ImgData.data.length; i += 4 ) {
        values.push(ImgData.data[i]     / 255.0);
        values.push(ImgData.data[i + 1] / 255.0); 
        values.push(ImgData.data[i + 2] / 255.0);
    }
    values = tf.reshape(values, [1, 80, 80, 3]);
    return values;
}

chup.onclick=function(){
    webcam.snap();
    ctx2.drawImage(ctx.canvas, 100, 20, canvasElement.width - 250, canvasElement.height-130, 0, 0, canvas2.width, canvas2.height);
    let pre = predict(ctx2.getImageData(0, 0, canvas2.width, canvas2.height));
    let expression = ["angry", "disgust", "fear", "happy", "neutral", "sad", "surprise"]
    pred.innerText = expression[pre.id];
    prob.innerText = pre.score.toFixed(10);
}

init();
