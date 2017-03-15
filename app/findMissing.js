var exports = module.exports = {}
exports.findMissing= function(array1,array2){
	array3 = array1.concat(array2)
	var missing = array3.filter(function(num) { return array3.indexOf(num) === array3.lastIndexOf(num)})
   		if (missing[0]==null){
   			return 0

   		}
   		else {return missing[0]}
}