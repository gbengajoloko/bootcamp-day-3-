//creates an array of 1 to 20
Array.prototype.toTwenty = function () {
  var arr = []
  for (var i = 1; i <= 20; i++) {
    arr.push(i)
  }
  return arr

}
//creates an array of 2 to 40 at intervals of 2
Array.prototype.toForty = function () {
  var arr = []
  for (var i = 2; i <= 40; i += 2) {
    arr.push(i)
  }
  return arr
}// create an array of 10 to 10000 at intervals of 10
Array.prototype.toOneThousand = function () {
  var arr = []
  for (var i = 10; i <= 1000; i += 10) {
    arr.push(i)
  }
  return arr
}
Array.prototype.search = function (d) {
//search the array for the missing number
  var startIndex = 0
  var len = this.length,
    stopIndex = this.length - 1,
    mid = Math.floor((stopIndex + startIndex) / 2),
     //search starts at the mid point
    count = 0

  while (this[mid] != d && startIndex < stopIndex) {
    //checks if value is at the first index
    if (d === this[startIndex]) {
      mid = startIndex
      break
    }
    //checks if value is at last index
    if (d ===this[stopIndex]) {
      mid = stopIndex
      break
    }
    //checks if value is less the value at the mid index
    if (d < this[mid]) { 
      stopIndex = mid - 1
    } else if (d > this[mid]) {
      startIndex = mid + 1
    }
    mid = Math.floor((stopIndex + startIndex) / 2)
    // recalculates the mid index
    //increases the value of count
    count++  
  }

  // make sure it's the right value
  //checks if value is found returns -1 if not found
  if (this[mid] !== d) {   
    return {'count': count, 'index': -1, 'length': len}
    //returns the right index if found
  } else { 
    return {'count': count, 'index': mid, 'length': len}
  }
}
