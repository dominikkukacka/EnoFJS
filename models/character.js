Class('models.Character', function(pos){
	this.import('models.Position');
	
	this.privateProperty(this.Position, 'position', pos);
	
	this.publicMethod(this.Position, 'getPosition', function(){
		return this.position;
	});
});
