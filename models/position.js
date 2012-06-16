Class('models.Position', function(x, y){
	
	this.import('models.Character');
	
	this.privateProperty('number', 'x', x);
	this.privateProperty('number', 'y', y);
	this.privateProperty(this.Character, 'character', null);
	this.privateProperty(Array, 'bonus', []);
	
	this.publicMethod(Array, 'getBonusses', function(){
		return this.bonus;
	});
	
	this.publicMethod('void', 'addBonus', function(bonus){
		this.bonus.push(bonus);
	});
	
	this.publicMethod('boolean', 'isOccupied', function(){
		return this.character !== null;
	})
	
	this.publicMethod(this.Character, 'getCharacter', function(){
		return this.character;
	});
	
	this.publicMethod('void', 'occupyCharacter', function(character){
		this.character = character;
	});
	
	this.publicMethod('void', 'emptyCharacter', function(){
		this.character = null;
	});
	
}, function(){
	this.constants('number', 'MOVE_RANGE', 0);
});
