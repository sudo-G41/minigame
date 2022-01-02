function omok(lineSize){
    let line = {0:0,9:9,11:11,13:13,19:19}
    this.lineCount = line[lineSize];
    // console.log(this.lineCount);
    thisNuminLine(this.lineCount);
    this.canvas = document.getElementById("omok_field");
    this.field = new omok_field(this.canvas,this.lineCount);
    this.mouse = new omok_mouse(this.canvas,this.lineCount);
}
function thisNuminLine(num){
    console.log("line # "+num);
    if(num == undefined){
        alert("!!! 그런 숫자는 없어요!!");
        alert("어떻게 그런 값을 넣은 건진 모르겠지만");
        alert("그러진 말아주세요");
        alert("please don't touch my code... :-(");
        alert("ghdpdpd dis has");
        location.href = "/";
    }
}
omok.prototype.test = function() {
    alert("A~");
    console.log(this.lineCount);
}