// forEach

const myArray = ["Bmw","Honda","Car",89,67,false]

// myArray.forEach((value,index)=>{
//     console.log(index,value)
// })

// function arrayData(value,index){
//     console.log(index,value)
// }

// myArray.forEach(arrayData)


// myArray.forEach(function (value,index){
//     console.log(index,value)
// })

// myArray.forEach((value,index)=>{
//     console.log(value,index)
// })


// const products = [
//     "laptop",
//     "mouse",
//     "keyboard"
// ]

// products.forEach((value,index)=>{
//     console.log(value)
// })


// const products = [
//     "laptop",
//     "mouse",
//     "keyboard"
// ]

// products.map((value,index)=>{
//     console.log(index,value)
// })



// const products = [
//     "laptop",
//     "mouse",
//     "keyboard"
// ]


// const result = products.forEach((value,index)=>{  
//     // const result;
//     return value
// })

// console.log(result)

// const result = products.map((value,index)=>{
//     return value
// })

// console.log(result)


// const price = [1000,2000,3000]

// const resultDisc = price.map((value,index)=>{
//     return value-100
// })

// console.log(price)
// console.log(resultDisc)


// const price = [1000,6789,9999,879,567,800,789,2000]


// const filterPrice = price.filter((value,index)=>{
//     return value >= 1000  // [6789,9999,2000]
// })

// console.log(price)
// console.log(filterPrice)



// const users = [
//     {
//         studentName:"Dev",  //0
//         age:15
//     },
//     {
//         studentName:"Manny",  //1
//         age:20
//     },
//     {
//         studentName:"Daisy",  //2
//         age:25
//     },
//     {
//         studentName:"Rahul", //3
//         age:18
//     }
// ]

// // console.log(users[0].age)

// const filterStudent = users.filter((value,index)=>{
//     return value.age >= 18
// })

// console.log(filterStudent)



// const num = [10,20,30]  // 60

// const total = num.reduce((accumulator,current)=>{
//     return accumulator+current
// })

// console.log(total)


// const num = [1,2,3,4]  // 10

// const result = num.reduce((accumulator,current)=>{
//     return accumulator+current
// },5)

// console.log(result)


const cart = [
    {
        product:"laptop",
        price:50000
    },
    {
        product:"mouse",
        price:1000
    },
    {
        product:"keyboard",
        price:2000
    }
]

const total = cart.reduce((accumulator,current)=>{
    // console.log(accumulator)
    // console.log(current.price)
    return accumulator+current.price
},0)

console.log(total)


