describe('Game functions', function(){
	
	var _position,
		_character;
	
	beforeEach(function(){
		
	});
	
	it('should have different bonus attributes', function(){
		_position = new models.Position(10, 20);
		_position.addBonus(models.Position.MOVE_RANGE);
		
		expect(_position.getBonusses()[0]).toEqual(models.Position.MOVE_RANGE);
	});
	
	it('should be able to create a character at a given position', function(){
		_position = new models.Position(10, 20);
		_character = new models.Character(_position);
		
		expect(_character.getPosition()).toEqual(_position);
	});
	
});
