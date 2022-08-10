export class Draw {
    static #instance
    #isPainting = false;
    #canvas
    #ctx
    #canvasResize
    #ctxResize
    #model
    #tf
    #predictNumber;
    
    constructor(canvas, canvasResize, model, tf) {
        this.#canvas = canvas;
        this.#model = model;
        this.#canvasResize = canvasResize;
        this.#ctx = canvas.getContext('2d');
        this.#ctxResize = canvasResize.getContext('2d');
        this.#tf = tf;
        this.#predictNumber = 10;
        window.addEventListener('mousedown', (e) => this.mouseDownEvent())
        window.addEventListener('mouseup', (e) => this.mouseUpEvent())
        window.addEventListener('mousemove', (e) => {this.mouseMoveEvent(e)})

    }

    mouseDownEvent() {
        this.#isPainting = true;
        this.#ctx.strokeStyle = 'black';
        this.#ctx.lineWidth = `${this.#canvas.width / 14}`;
        this.#ctx.lineJoin = this.#ctx.lineCap = 'round';
        this.#ctx.beginPath();
        
    }
    
    mouseMoveEvent(e) {
        if (!this.#isPainting) return;
        this.#ctx.fillStyle = 'rgb(255, 255, 255)';
        this.#ctx.fillRect(0, 0, this.#canvas.width, this.#canvas.height);
        this.drawStroke(e.clientX, e.clientY);
    }

    drawStroke(clientX, clientY) {
        const rect = this.#canvas.getBoundingClientRect();

        const x = (clientX - rect.left);
        const y = (clientY - rect.top);

	    // draw
	    this.#ctx.lineTo(x, y);
	    this.#ctx.stroke();
	    this.#ctx.moveTo(x, y);
    }

    mouseUpEvent() {
        this.#isPainting = false;
        this.#predictNumber = this.predict();
        console.log(this.#predictNumber);
        this.#ctx.fillStyle = 'rgb(255, 255, 255)';
	    this.#ctx.fillRect(0, 0, this.#canvas.width, this.#canvas.height)
    }

    predict(){
        let values = this.getPixelData();
        if (values === null) {
            return 10;
        }
        this.#ctxResize.clearRect(0, 0, this.#canvasResize.width, this.#canvasResize.height)
        let scores = this.#model.predict(values).dataSync();
        return scores.indexOf(Math.max(...scores));
    }
    getPixelData() {
        let size = this.#canvas.width;
        let cur = this.#ctxResize.fillStyle
        this.#ctxResize.fillStyle = 'rgb(255, 255, 255)';
        this.#ctxResize.fillRect(0, 0, this.#canvasResize.width, this.#canvasResize.height)
        this.#ctxResize.fillStyle = cur;
    
        this.#ctxResize.drawImage(this.#ctx.canvas, 
            0, 0, size, size,
            0, 0, this.#canvasResize.width, this.#canvasResize.height);
    
        const imgData = this.#ctxResize.getImageData(0, 0, this.#canvasResize.width, this.#canvasResize.height);
    
        let values = [];
        let isEmpty = true;
        for (let i = 0; i < imgData.data.length; i += 4)
        {
            values.push(255 - imgData.data[i]);
        }
            
        for(let i = 0; i < values.length; i++) {
            if (values[i] > 0) {
                isEmpty = false;
            }
        }
        if (isEmpty) {return null;}

        values = this.#tf.reshape(values, [1, 28, 28, 1]);
        return  values;
    }
    
    static getInstance(canvas, canvasResize, model, tf) {
        if (this.#instance == null) {
            this.#instance = new Draw(canvas, canvasResize, model, tf);
        }
        return this.#instance;
    }

    static getExistInstance() {
        if (this.#instance == null) {
            return null;
        }
        return this.#instance;
    }

    getPredictNumber() {
        return this.#predictNumber;
    }
    update() {
        this.#predictNumber = 10;
    }

    isPredictRight(x) {
        return (this.#predictNumber === x)
    }
}