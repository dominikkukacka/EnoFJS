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
		
		it('should show a user what positions the character can move to regardless of occupation', function(){
			//given that there are 2 characters on different positions
			var _availablePositions,
				_range = 3;
			_character = new models.Character(_startPos, _range);
			_otherCharacter = new models.Character(_endPos, _range);
			
			//when requesting the possible position
			_availablePositions = _character.getAvailablePosition();
			
			//then regardless if the position of the other character is occupied it should return a set of positions
			
			/**
			 *
			 * It should return me a set of positions with coördinates like the # from left to right, from top  to bottom
			 * per collumn, each available position  
			 * 
			 *    A B C D E
			 *  2 o o # o o
			 *  1 o # # # o
			 *  0 # # # # #
			 * -1 o # # # o
			 * -2 o o # o o
			 */
			
			//A
			expect(_availablePositions[0].getX()).toEqual(_startPos.getX - 2);
			expect(_availablePositions[0].getY()).toEqual(_startPos.getY);
			
			//B
			expect(_availablePositions[1].getX()).toEqual(_startPos.getX - 1);
			expect(_availablePositions[1].getY()).toEqual(_startPos.getY + 1);
			
			expect(_availablePositions[2].getX()).toEqual(_startPos.getX - 1);
			expect(_availablePositions[2].getY()).toEqual(_startPos.getY);
			
			expect(_availablePositions[3].getX()).toEqual(_startPos.getX - 1);
			expect(_availablePositions[3].getY()).toEqual(_startPos.getY - 1);
			
			//C
			expect(_availablePositions[4].getX()).toEqual(_startPos.getX - 0);
			expect(_availablePositions[4].getY()).toEqual(_startPos.getY + 2);
			
			expect(_availablePositions[5].getX()).toEqual(_startPos.getX - 0);
			expect(_availablePositions[5].getY()).toEqual(_startPos.getY + 1);
			
			expect(_availablePositions[6].getX()).toEqual(_startPos.getX - 0);
			expect(_availablePositions[6].getY()).toEqual(_startPos.getY);
			
			expect(_availablePositions[7].getX()).toEqual(_startPos.getX - 0);
			expect(_availablePositions[7].getY()).toEqual(_startPos.getY - 1);
			
			expect(_availablePositions[8].getX()).toEqual(_startPos.getX - 0);
			expect(_availablePositions[8].getY()).toEqual(_startPos.getY - 2);
			
			//D
			expect(_availablePositions[9].getX()).toEqual(_startPos.getX + 1);
			expect(_availablePositions[9].getY()).toEqual(_startPos.getY + 1);
			
			expect(_availablePositions[10].getX()).toEqual(_startPos.getX + 1);
			expect(_availablePositions[10].getY()).toEqual(_startPos.getY);
			
			expect(_availablePositions[11].getX()).toEqual(_startPos.getX + 1);
			expect(_availablePositions[11].getY()).toEqual(_startPos.getY - 1);
			
			//E
			expect(_availablePositions[12].getX()).toEqual(_startPos.getX + 2);
			expect(_availablePositions[12].getY()).toEqual(_startPos.getY);
		});
	});
});
