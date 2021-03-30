const Paint = function(litres,paintStatus = "Full"){
    this.litres = litres;
    this.paintStatus = paintStatus;
}

Paint.prototype.emptyCan = function(paint){
    paint.paintStatus = "Empty";
}
module.exports = Paint;