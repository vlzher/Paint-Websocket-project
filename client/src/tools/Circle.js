import Tool from "./Tool";

export default class Circle extends Tool{
    constructor(canvas) {
        super(canvas);
        this.listen();
    }
    listen(){
        this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
        this.canvas.onmousedown = this.mouseDownHandler.bind(this);
        this.canvas.onmouseup = this.mouseUpHandler.bind(this);
    }


    mouseUpHandler(e){
        this.mouseDown = false
    }
    mouseDownHandler(e){
        this.mouseDown = true
        this.ctx.beginPath()
        this.startX = e.pageX-e.target.offsetLeft;
        this.startY = e.pageY-e.target.offsetTop;
        this.saved = this.canvas.toDataURL()
    }
    mouseMoveHandler(e){
        if(this.mouseDown){
            this.currentX = e.pageX-e.target.offsetLeft;
            this.currentY = e.pageY-e.target.offsetTop;
            this.radius = Math.sqrt(Math.pow((this.startX-this.currentX),2)+Math.pow((this.startY-this.currentY),2))
            this.draw(this.startX, this.startY, this.radius)
        }

    }
    draw(x, y, r){
        const img = new Image()
        img.src = this.saved;
        img.onload = () => {
            this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height)
            this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
            this.ctx.beginPath()
            this.ctx.arc(x,y,r,0,Math.PI*2)
            this.ctx.fill()
            this.ctx.stroke()
        }



    }

}