var exports = module.exports = {}
exports.findMissing = function (array1, array2) {
  // adds the two array into a single array
  var array3 = array1.concat(array2) 
  // filters out numbers that occurs twice
  var missing = array3.filter(function (num) { return array3.indexOf(num) === array3.lastIndexOf(num) })
 // if number is undefined returns 0
  if (missing[0] == null) { 
    return 0
    // returs the missing number
  } else { return missing[0] }
}
