const maxHeight = 700;
const maxWidth = 700;
const maxfieldLength = 650;
const padding = 25;
function omok_field(canvas, lineCount){
    this.canvas = canvas;
    this.lineCount = lineCount;
    setCanvas(this.canvas, lineCount);
}

function setCanvas(canvas, lineCount) {
    let ctx = canvas.getContext("2d");
    if(lineCount==0){
        canvas.width = maxWidth;
        canvas.height = maxHeight;
        ctx.strokeRect(0,0,700,700);
    }
    else{
        setCanvasBackground(canvas, ctx);
        drawLine(ctx, lineCount);
        drawDot(ctx, lineCount);
    }
}
function setCanvasBackground(canvas, ctx) {
    canvas.width = maxWidth;
    canvas.height = maxHeight;
    ctx.fillStyle = "#853906";
    ctx.fillRect(0,0,700,700);
}
function drawLine(ctx, lineCount) {
    const length = maxfieldLength+padding;
    const gridlength = maxfieldLength/(lineCount-1);
    ctx.beginPath();
    for(let n=0;n<lineCount;n++){
        let pos = padding+(n*gridlength);
        console.log("Draw [n:"+n+", pos:"+pos+"]");
        ctx.moveTo(padding, pos);
        ctx.lineTo(length, pos);
        ctx.moveTo(pos, padding);
        ctx.lineTo(pos, length);
    }
    ctx.stroke()
}
function drawDot(ctx, lineCount){
    let sizeList = {
        19:[
            [3,3],[3,9],[3,15],
            [9,3],[9,9],[9,15],
            [15,3],[15,9],[15,15]
        ],
        13:[
            [3,3],[3,6],[3,9],
            [6,3],[6,6],[6,9],
            [9,3],[9,6],[9,9]
        ],
        11:[[5,5]],
        9:[[4,4]]
    }
    ctx.fillStyle = "black";
    for(let idxSize = 0;idxSize<sizeList[lineCount].length;idxSize++){
        ctx.beginPath();
        let pointX = padding+maxfieldLength/(lineCount-1)*sizeList[lineCount][idxSize][0];
        let pointY = padding+maxfieldLength/(lineCount-1)*sizeList[lineCount][idxSize][1];
        ctx.arc(pointX,pointY,3,0,2*Math.PI,true);
        ctx.fill();
    }
}

function omok_mouse(canvas, lineCount){
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.lineCount = lineCount;
    this.player = true;
}
// function onMouseMova(event,obj){
//     console.log("mouse event\n"+obj) ;
//     drawCursor(event, obj);
// }
//테스트중
omok_mouse.prototype.onMouseMova=function(event,obj){
    console.log("mouse event\n"+obj.lineCount);
    drawCursor(event, obj, this.canvas);
    console.log(event+"mouse event end");
}
function drawCursor(event, obj, canvas){
    let lineCount = obj.lineCount;
    if(lineCount!=0){
        setCanvas(canvas,lineCount);
        let pointX = event.offsetX;
        let pointY = event.offsetY;
        const stoneSize = maxfieldLength/lineCount;
        console.log("("+pointX+","+pointY+") 돌 크기:"+stoneSize);
        // console.log(canvas);
        obj.ctx.fillStyle = obj.player?"#000000":"#ffffff";
        obj.ctx.beginPath();
        obj.ctx.arc(pointX,pointY,stoneSize/2,0,2*Math.PI,true);
        obj.ctx.fill();
    }
}