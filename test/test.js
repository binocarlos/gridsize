var gridsize = require('../src');

describe('gridsize', function(){

	it('should give a sensible default', function() {
		var grid = gridsize(4);

		grid.width.should.equal(2);
		grid.height.should.equal(2);
	})

	it('should cope with an odd number and favour portrait', function() {
		// should be 4x5
		var grid = gridsize(19);

		grid.width.should.equal(4);
		grid.height.should.equal(5);
	})

	it('should allow a landscape option', function() {
		// should be 5x4
		var grid = gridsize(19, true);

		grid.width.should.equal(5);
		grid.height.should.equal(4);
	})

	it('should cope with no params', function() {
		// should be 5x4
		var grid = gridsize();

		grid.width.should.equal(0);
		grid.height.should.equal(0);
	})

	
})
