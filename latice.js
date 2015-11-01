module.exports = {
	flatten: function (atom){
		var atoms = [];
		
		if (atom.coordinates){
			atoms.push(atom);		
		}
		
		if (atom.children){
			for(var i = 0; i < atom.children.length; i++){
				var atomsToAdd = this.flatten(atom.children[i]);
				for(var n = 0; n < atomsToAdd.length; n++){
					atoms.push(atomsToAdd[n]);
				}			
			}
		}
		return atoms;
	}
} 