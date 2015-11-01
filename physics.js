var physics = {
	Atom: function(atomType, parent, degree, vectorLength, level){		
		if (level === 0){
			return;
		}
		
		if (!parent){
			this.coordinates = new physics.LateralCoordinates(0, 0, 0);		
		} else {
			this.coordinates = physics.getCoordinates(parent.coordinates, vectorLength, degree);
		}
	
		this.atomType = atomType;
		
		this.children = [
			new physics.Atom('B', this, physics.degToRad(0), 2.5, level - 1),
			new physics.Atom('B', this, physics.degToRad(120), 2.5, level - 1),
			new physics.Atom('N', this, physics.degToRad(30), 1.45, level - 1)
		];
		
		
		
	},
	
	LateralCoordinates: function(x, y, z){
		this.x = x;
		this.y = y;
		this.z = z;
	},
	
	degToRad: function(degrees){
		return degrees * Math.PI / 180;
	},
	
	getCoordinates: function(parentCoordinates, degree, vectorLength){
		var x = parentCoordinates.x + Math.sin(degree)*vectorLength;
		var y = parentCoordinates.y + Math.cos(degree)*vectorLength;
		return new physics.LateralCoordinates(x, y, parentCoordinates.z);
        
	}
};
module.exports = physics;