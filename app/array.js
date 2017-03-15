Array.prototype.toTwenty = function () {
  var arr = []
  for (var i = 1; i <= 20; i++) {
    arr.push(i)
  }
  return arr
}
Array.prototype.toForty = function () {
  var arr = []
  for (var i = 2; i <= 40; i += 2) {
    arr.push(i)
  }
  return arr
}
Array.prototype.toOneThousand = function () {
  var arr = []
  for (var i = 10; i <= 1000; i += 10) {
    arr.push(i)
  }
  return arr
}
Array.prototype.search = function (d) {
  var startIndex = 0
  var len = this.length,
    stopIndex = this.length - 1,
    mid = Math.floor((stopIndex + startIndex) / 2),
    count = 0

  while (this[mid] != d && startIndex < stopIndex) {
    if (d == this[startIndex]) {
      mid = startIndex
      break
    }
    if (d == this[stopIndex]) {
      mid = stopIndex
      break
    }
    if (d < this[mid]) {
      stopIndex = mid - 1
    } else if (d > this[mid]) {
      startIndex = mid + 1
    }
    mid = Math.floor((stopIndex + startIndex) / 2)
    count++
  }

      // make sure it's the right value
  if (this[mid] !== d) {
    return {'count': count, 'index': -1, 'length': len}
  } else {
    return {'count': count, 'index': mid, 'length': len}
  }
}
