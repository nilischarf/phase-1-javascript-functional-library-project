function myEach(collection, callback) {
    const values = Array.isArray(collection) ? collection : Object.values(collection)
    for (let value of values) {
        callback(value)
    }
    return collection
}

function myMap(collection, callback) {
    const values = Array.isArray(collection) ? collection : Object.values(collection)
    const result = []
    for (let value of values) {
        result.push(callback(value))
    }
    return result
}

function myReduce(collection, callback, acc) {
    const values = Array.isArray(collection) ? collection : Object.values(collection)
    let startIndex = 0
    if (acc === undefined) {
        acc = values[0]
        startIndex = 1
    } 
    for (let i = startIndex; i < values.length; i++) {
        acc = callback(acc, values[i], collection)
    }
    return acc
}

function myFind(collection, predicate) {
    const values = Array.isArray(collection) ? collection : Object.values(collection)
    for (let value of values) {
        if (predicate(value)) 
            return value
    }
    return undefined
}

function myFilter(collection, predicate) {
    const values = Array.isArray(collection) ? collection : Object.values(collection)
    const result = []
    for (let value of values) {
        if (predicate(value))
            result.push(value)
    }
    return result 
}

function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length
}

function myFirst(array, n) {
    if (n === undefined) 
        return array[0]
    return array.slice(0, n)
}

function myLast(array, n) {
    if (n === undefined)
        return array[array.length - 1]
    return array.slice(-n)
}

function mySortBy(array, callback) {
    return [...array].sort((a, b) => {
        const aValue = callback(a)
        const bValue = callback(b)
        if (aValue < bValue)
            return -1
        if (aValue > bValue)
            return 1
        return 0
    })
}

function myFlatten(array, shallow, newArr=[]) {
    for (let item of array) {
        if (Array.isArray(item)) {
            if (shallow) {
                newArr.push(...item)
            } else {
                myFlatten(item, shallow, newArr)
            }
        } else {
            newArr.push(item)
        }
    }
    return newArr
}

function myKeys(object) {
    return Object.keys(object)
}

function myValues(object) {
    return Object.values(object)
}