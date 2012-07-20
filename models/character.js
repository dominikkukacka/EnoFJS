Class('models.Character', function(pos, range){
	this.import('models.Position');
	
	this.privateProperty(this.Position, 'position', pos);
	
	this.privateProperty(Number, 'moveRange', range);
	
	this.publicMethod(this.Position, 'getPosition', function(){
		return this.position;
	});
	
	this.publicMethod(Array, 'getAvailablePosition', function(){
		
		
		
		return [];
	});
	
	this.publicMethod(this.Position, 'moveTo', function(pos){
		
		if(pos.isOccupied()){
			throw new Error("Position Occupied");
		}
		
		this.position.emptyCharacter();
		this.position = pos;
		pos.occupyCharacter(this);
	});
	
	//constructor logic
	pos.occupyCharacter(this);
});
