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
		var grid = gridsize();

		grid.width.should.equal(0);
		grid.height.should.equal(0);
	})

	
	it('should alternate adding sizes', function() {
		// should be 4x5
		var grid1 = gridsize(19);

		grid1.width.should.equal(4);
		grid1.height.should.equal(5);

		// should be 5x5
		var grid2 = gridsize(21);

		grid2.width.should.equal(5);
		grid2.height.should.equal(5);

		// should be 5x6
		var grid3 = gridsize(26);

		grid3.width.should.equal(5);
		grid3.height.should.equal(6);

		
	})
})
