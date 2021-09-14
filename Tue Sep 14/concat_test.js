let count = 100000
let  source = 'abcdefghijklmnopqrstuvwxyz'

function concatAsString(){ // O(n^2) Time and O(n) Space
    var str = ''
    for (var c = 0; c < count; c++) {
        for (var i = 0; i < source.length; i++) {
            str+= source[i]
        }
    }

    return str
}

function concatAsArray(){ // O(n) Time and O(n) Space
    var array = []
    for (var c= 0; c < source.length; c++) {  // O(1)
        for (var i = 0; i < source.length; i++) { // O(1)
            array.push(source[i]) // O(n) // String.prototype.concat()
        }
    }

    return array.join("")
}

function concatAsTrueString(){ // O(n^2) Time and O(n) Space
    var str = new String()
    for (var c = 0; c < count; c++) {
        for (var i = 0; i < source.length; i++) {
            str += source[i]
        }
    }
    return str
}