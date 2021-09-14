# Primitive Data Types

* Immutable
* most basic built-in data structures

## Types 

### JS Primitives

1. undefined
1. null
1. symbols
1. strings
1. number
1. bigInt
1. Boolean


### JS Non-Primitives


1. objects

### PY

1. integers
1. floats
1. strings
1. booleans

### PY Non-Primitives

1. lists
2. tuples
2. sets
2. dictionaries

</br>
</br>
</br>


## How to get built-in methods on these?

* primitive wrapper objects perform requested operations and then return the new primitive result
* low-level ```number``` and primitive ```Number```

</br>
</br>
</br>

## Variable Declaration and Reassignment

```javascript
let a = 3 // 3
let b = a // 3
console.log(a === b) // true
a = true // true
console.log(a === b) // false
console.log(a) // true
console.log(b) // 3

// This is a consideration most commonly needed while utilizing
//  intermediate variables!
```


## String Concatenation

* strings are imutable in JS
```javascript
let alpha = 'abcdefg'
let finalStr = ''

for (let i = 0; i < 7; i++) {
    finalStr += alpha[i]
}

return finalStr
```

</br>
</br>
</br>

