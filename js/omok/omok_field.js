const maxHeight = 700;
const maxWidth = 700;
// const maxfieldHeight = 650;
// const maxfieldWidth = 650;
const maxfieldLength = 650;
const padding = 25;
function omok_field(canvars, lineCount){
    this.canvars = canvars;
    this.lineCount = lineCount;
    setCanvas(this.canvars, lineCount);
}

function setCanvas(canvars, lineCount) {
    let ctx = canvars.getContext("2d");
    if(lineCount==0){
        canvars.width = maxWidth;
        canvars.height = maxHeight;
        ctx.strokeRect(0,0,700,700);
    }
    else{
        setCanvarsBackground(canvars, ctx);
        drawLine(ctx, lineCount);
        drawDot(ctx, lineCount);
    }
}
function setCanvarsBackground(canvars, ctx) {
    canvars.width = maxWidth;
    canvars.height = maxHeight;
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
    ctx.stroke();
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
    // console.log("dict and list length"+sizeList[lineCount].length);
    for(let idxSize = 0;idxSize<sizeList[lineCount].length;idxSize++){
        ctx.beginPath();
        let pointX = padding+maxfieldLength/(lineCount-1)*sizeList[lineCount][idxSize][0];
        let pointY = padding+maxfieldLength/(lineCount-1)*sizeList[lineCount][idxSize][1];
        ctx.arc(pointX,pointY,3,0,2*Math.PI,true);
        ctx.fill();
    }
    // let point = padding+maxfieldLength/(lineCount-1)*3;
}