var exports = module.exports = {}
exports.findMissing = function (array1, array2) {
  var array3 = array1.concat(array2) // adds the two array into a single array
  var missing = array3.filter(function (num) { return array3.indexOf(num) === array3.lastIndexOf(num) })// filters out numbers that occurs twice
  if (missing[0] == null) { // if number is undefined returns 0
    return 0
  } else { return missing[0] }// returs the missing number 
}
