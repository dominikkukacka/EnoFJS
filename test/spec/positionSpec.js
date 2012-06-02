describe('Position class', function(){
	
	var _position;
	
	beforeEach(function(){
		_position = new Position(10, 20);
	});
	
	it('should have different bonus attributes', function(){
		_position.addBonus(Position.MOVE_RANGE);
		
		expect(_position.getBonusses()[0]).toEqual(Position.MOVE_RANGE);
	});
	
});
