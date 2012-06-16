Class('models.Map', function(xWidth, yWidth){
	
	this.import('models.Position');
	
	this.privateProperty(Array, 'map', []);
	
	this.publicMethod(this.Position, 'getPosition', function(x, y){
		return this[x][y];
	});
	
	
	//Constructor logic
	// var x,
		// y;
// 	
	// for(x = 0; x < xWidth; x++){
		// this.map[x] = [];
// 		
		// for(y = 0; y < yWidth; y++){
			// this.map[x][y] = new self.Position(x, y);
		// }
	// }
});
