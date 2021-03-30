const Decorator = function(paintStock = 0){
    this.paintStock = paintStock;
}

Decorator.prototype.addPaint = function(decorator){
    decorator.paintStock += 1;
}

Decorator.prototype.totalLitres = function(decorator, paint) {
    let total = decorator.paintStock * paint.litres;
    return total;
}

Decorator.prototype.canPaintRoom = function(decorator, paint, room) {
    let canPaint = decorator.totalLitres(decorator, paint);
    if (canPaint > room.area) {
    return true;
    } else {
        return false;
    }
};

Decorator.prototype.roomPainted = function(decorator, paint, room) {
    let canPaint = decorator.canPaintRoom(decorator, paint, room);
    if (canPaint = true) {
        room.paintedStatus = "Painted";
    } else {
        return
    }

}

module.exports = Decorator;