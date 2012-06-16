describe('Game functions', function(){
	
	var _position,
		_character,
		_map;
	
	beforeEach(function(){
		
	});
	
	afterEach(function(){
		delete _position;
		delete _character;
		delete _map;
	})
	
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
	
	it('should be able to initialize a map', function(){
		_map = new models.Map(100, 100);
		
		// expect(_map.getPosition(0, 0) instanceof models.Position).toEqual(true);
	});
	
	describe('Character Movement', function(){
		
		var _startPos,
			_endPos,
			_otherCharacter;
			
		beforeEach(function(){
			_startPos = new models.Position(10,20);
			_endPos = new models.Position(10, 21);
		});
		
		afterEach(function(){
			delete _startPos;
			delete _endPos;
			delete _otherCharacter;
		})
		
		it('should be able to move to a position', function(){
			_character = new models.Character(_startPos);
			_character.moveTo(_endPos);
			
			expect(_character.getPosition()).toEqual(_endPos);
			expect(_endPos.getCharacter().getPosition()).toEqual(_endPos);
			expect(_startPos.getCharacter()).toEqual(null);
		});
		
		it('should not allow you to move to a position already occupied', function(){
			_character = new models.Character(_startPos);
			_otherCharacter = new models.Character(_endPos);
			expect(function(){
				_character.moveTo(_endPos);
			}).toThrow("Position Occupied");
		});
	});
});
