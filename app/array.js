Array.prototype.toTwenty = function () {//creates an array of 1 to 20
  var arr = []
  for (var i = 1; i <= 20; i++) {
    arr.push(i)
  }
  return arr

}
Array.prototype.toForty = function () {//creates an array of 2 to 40 at intervals of 2
  var arr = []
  for (var i = 2; i <= 40; i += 2) {
    arr.push(i)
  }
  return arr
}
Array.prototype.toOneThousand = function () {// create an array of 10 to 10000 at intervals of 10
  var arr = []
  for (var i = 10; i <= 1000; i += 10) {
    arr.push(i)
  }
  return arr
}
Array.prototype.search = function (d) {//search the array for the missing number
  var startIndex = 0
  var len = this.length,
    stopIndex = this.length - 1,
    mid = Math.floor((stopIndex + startIndex) / 2), //search starts at the mid point
    count = 0

  while (this[mid] != d && startIndex < stopIndex) {
    if (d === this[startIndex]) {//checks if value is at the first index
      mid = startIndex
      break
    }
    if (d ===this[stopIndex]) {//checks if value is at last index
      mid = stopIndex
      break
    }
    if (d < this[mid]) { //checks if value is less the value at the mid index
      stopIndex = mid - 1
    } else if (d > this[mid]) {//checks if value is greater than the value at the mid index
      startIndex = mid + 1
    }
    mid = Math.floor((stopIndex + startIndex) / 2)// recalculates the mid index
    count++ //increases the value of count 
  }

      // make sure it's the right value
  if (this[mid] !== d) { //checks if value is found returns -1 if not found  
    return {'count': count, 'index': -1, 'length': len}
  } else { //returns the right index if found
    return {'count': count, 'index': mid, 'length': len}
  }
}
