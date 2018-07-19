const get = require('lodash.get')

const defaultCompare = (n1, n2) => Math.abs(n1 - n2)

const createComparerForProperty = (property) => (n1Object, n2) =>
  defaultCompare(get(n1Object, property), n2)

const findClosestIndex = (haystack, needle, comparer = defaultCompare) => {
  if (typeof comparer !== 'function') {
    // Comparer is a string or array. Make a compare function that uses this
    // property from the array items.
    comparer = createComparerForProperty(comparer)
  }

  let closest = {
    index: -1,
    distance: Number.POSITIVE_INFINITY
  }

  for (let i = 0; i < haystack.length; i++) {
    const distance = comparer(haystack[i], needle)

    if (distance === 0) {
      return i
    }

    if (distance < closest.distance) {
      closest = { index: i, distance }
    }
  }

  return closest.index
}

const findClosest = (array, needle, comparer) =>
  array[findClosestIndex(array, needle, comparer)]


module.exports = findClosest
module.exports.findClosest = findClosest
module.exports.findClosestIndex = findClosestIndex
module.exports.defaultCompare = defaultCompare
