// Function definition
function sayHello(){
    console.log("Hello")
}

// sayHello()

// Functions with arguments


function multiplier(num1,num2){
    console.log(num1*num2)
}

let number1 = 10
let number2 = 24

// let result = multiplier(number1,number2)

// console.log(result)

// Functions that return values

function multiplier2(num1,num2){
    return num1*num2
}
// let result = multiplier2(number1,number2)
// console.log(result)
let arr3 = [3,1,2]
let p = arr3.sort()


// Defining functions with the arrow function method

// console.log(divider2(5,3))
let divider = (num1,num2)=>{
    return num1/num2
}

let divider2 = function(num1, num2=1){
    return num1/num2
}

// console.log(divider2(4,8))


// Callbacks - Functions as arguments of other functions
// Callbacks are always anonymous
let successMsg = (msg)=>{
    console.log(msg)
}

let dividerWithCallback = (a, b, sm)=>{
    let res = a/b
    if(res){
        sm()
    }
}

// dividerWithCallback(2,3,function(){successMsg('new msg!')})
// successMsg("completed!")

// function prompter(cb){
//     let name = prompt("Enter your name")
//     if(!name){
//         cb()
//     }else{
//         console.log(name)
//     }
// }


// prompter(()=>{
//     console.log("Name not entered!")
// })


// Recursion
// for(let i=0; i<10; i++){
//     console.log(i)
// }

// Recursion
// function counter(start,end){
//     console.log(start)
//     if(start < end){
//         counter(start+1,end)
//     }
// }
// counter(5,10)

// Equation solver
// function eqnSolver(num1,operator,num2){
//     if(operator === '+'){
//         return num1 + num2
//     }else if(operator === '-'){
//         return num1- num2
//     }else if(operator === '*'){
//         return num1 * num2
//     }else if(operator === '/'){
//         return num1 / num2
//     }
// }

// console.log(eqnSolver(5,'*',10))

// Write a function that finds the roots of a quadratic equation of the form
// ax^2 + bx + c = 0

// console.log(4**0.5)
