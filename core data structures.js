// 1. Array
// let arr1 = [1,2,5,true,56,'4',2]
// let arr2 = [arr1,['a','b','c']]

// const arr3 = [1,2,3]
// // Array indexing starts from 0
// let removedValue = arr3.pop()

// console.log(arr3)
// console.log('removedValue:',removedValue)
// let shifted = arr3.shift()
// console.log(arr3, shifted)

// // 2. Object: Key-value pairs 
// const person = {}
// person.houseno = '135'
// person.name = 'john'
// person.age = 20
// console.log(person)

// let stringArr = ['a','b','c']

// Concatenation
// console.log(stringArr.concat(['e','f','g']))

// join and split
// console.log(stringArr.join(''))

// let newString = 'I am a boy'
// console.log(newString.split(''))


// push, pop, unshift, shift

// JSON = JavaScript Object Notation

let products = [
    {
        id:1,
        name:'Laptop',
        price:1000,
        description:'a description',
        image:''
    },
    {
        id:2,
        name:'Printer',
        price:1200,
        description:'a description',
        image:''
    }
]

let productsFromServer = JSON.stringify(products)
let convertedProducts = JSON.parse(productsFromServer)
console.log(convertedProducts[0].name)

