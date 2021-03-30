const assert = require('assert');
const Paint = require('../models/paint.js');
const Room = require('../models/room.js');

describe('Room Tests',function(){
    let room;

    beforeEach(function(){
        room = new Room(100,"Not Painted");
    });
    it('should have an area',function(){
        const result = room.area;
        assert.strictEqual(result, 100);
    });
    it('should have an painted status',function(){
        const result = room.paintedStatus;
        assert.strictEqual(result, "Not Painted");
    });
    it('should change painted status',function(){
        room.painted(room);
        const result = room.paintedStatus;
        assert.strictEqual(result, "Painted");
    });
});
