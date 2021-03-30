const assert = require('assert');
const Paint = require('../models/paint.js');


describe('Paint Tests',function(){
    let paint;

    beforeEach(function(){
        paint = new Paint(5,"Full");
    });
    it('should have litres',function(){
        const result = paint.litres;
        assert.strictEqual(result, 5);
    });
    it('should have a paint status',function(){
        const result = paint.paintStatus;
        assert.strictEqual(result, "Full");
    });
    it('should change paint status',function(){
        paint.emptyCan(paint);
        const result = paint.paintStatus;
        assert.strictEqual(result, "Empty");
    });
});