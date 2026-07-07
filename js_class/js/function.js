// Function - Reusable Block of Code 

// console.log("Hello dev")
// console.log("Welcome")

// console.log("Hello Aman")
// console.log("Welcome")


// function greet(name){
//     console.log(`Hello ${name}`)
//     console.log("Welcome")
// }

// greet("Dev")
// greet("Aman")
// greet("Manny")



// function welcome(){
//     console.log("Welcome to js class..")
// }


// welcome()
// welcome()
// welcome()


// function greet(name="guest",age=18){
//     console.log(`Hello ${name} and age ${age}`)
// }


// greet("aman",67)
// greet("rahul",34)


// function add(a,b){
//     console.log(a+b)
// }

// add(10,20)


// return keyword

// function multi(x,y){
//     console.log(x*y) // 12
// }

// let result = multi(3,4)  // blank -> undefined 

// console.log(result)


// function multi(x,y){
//     return x*y     // 72
// }

// let result = multi(8,9)  // = 72

// console.log(result)


// function demo(){
//     // console.log("one")
//     // return;
//     // console.log("two")
//     return 10
//     return 20
// }

// let result = demo()
// console.log(result)


//Declaration  function

// function greeting(name="guest"){
//     console.log(name)
// }

// greeting("dev")
// greeting()


//  Expression Function

// const greet = function (name="Guest"){
//     console.log("Hello Expression Function..."+name)
// }

// greet()
// greet("MANNY")


// Arrow Function 
// let greet = (name)=>{
//     console.log("Hello Arrow Function.."+name)
// }

// greet("manny")
// greet("daisy")


// const add = (a,b)=>{
//     return a+b
// }


// let result = add(9,8)
// console.log(result)


// const multiply = (a,b)=>a*b

// const result = multiply(7,8)
// console.log(result)


// function calculateDisc(price,discPricePercent){
//     const discount = (price*discPricePercent)/100
//     const finalPrice = price-discount
//     return finalPrice

// }


// console.log(calculateDisc(1000,10))
// console.log(calculateDisc(799,20))


function greetUser(name){
    const hour = new Date().getHours()
    if(hour<12) return `Good Morning ${name}`;
    else if(hour<18) return `Good Afternoon ${name}`
    else return `Good Evening ${name}`
}

let result = greetUser("Manny")
console.log(result)