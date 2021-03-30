const assert = require('assert');
const Paint = require('../models/paint.js');
const Room = require('../models/room.js');
const Decorator = require('../models/decorator.js');

describe('Decorator Tests', function(){

    let decorator;

    beforeEach(function(){
        decorator = new Decorator(0);
    });

    it('should have Paint Stock', function(){
        const result = decorator.paintStock;
        assert.strictEqual(result, 0);
    });

    it('should be able to add paint', function(){
        decorator.addPaint(decorator);
        const result = decorator.paintStock;
        assert.strictEqual(result, 1);
    });

    it('should be able to calculate total litres', function(){
        decorator = new Decorator(2);
        paint = new Paint(4, "Full");
        let result = decorator.totalLitres(decorator, paint);
        assert.strictEqual(result, 8);
    });

    it('should be able to paint room or not', function(){
        decorator = new Decorator(2);
        paint = new Paint(4, "Full");
        room = new Room(100, "Not Painted");
        let result = decorator.canPaintRoom(decorator, paint, room);
        assert.strictEqual(result, false)
    });

    it('should be able to paint room if enough paint', function(){
        decorator = new Decorator(11);
        paint = new Paint(10, "Full");
        room = new Room(100, "Not Painted");
        decorator.roomPainted(decorator, paint, room);
        let result = room.paintedStatus;
        assert.strictEqual(result, "Painted");
    });
});