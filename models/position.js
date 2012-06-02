Class('models.Position', function(x, y){
	this.privateProperty('number', 'x', x);
	this.privateProperty('number', 'y', y);
	
	this.privateProperty(Array, 'bonus', []);
	
	this.publicMethod(Array, 'getBonusses', function(){
		return this.bonus;
	});
	
	this.publicMethod('void', 'addBonus', function(bonus){
		this.bonus.push(bonus);
	});
}, function(){
	this.constants('number', 'MOVE_RANGE', 0);
});
