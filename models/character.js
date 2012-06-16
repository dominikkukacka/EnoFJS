Class('models.Character', function(pos){
	this.import('models.Position');
	
	this.privateProperty(this.Position, 'position', pos);
	
	this.publicMethod(this.Position, 'getPosition', function(){
		return this.position;
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
