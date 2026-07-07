// primitive data types


// let a = 10
// let b = a
// b = 20

// console.log(a)
// console.log(b)


//Non-Primitive Data type

// let user1 = {
//     name:"Dev"
// }

// let user2 = user1

// user1.name = "Manny"

// console.log(user1)
// console.log(user2)


// method1 - shallow copy 

// const user1 = {
//     name:"Dev",
//     age:45,
//     userID: 345678
// }

// let user2 = {...user1}  // shallow copy 

// user1.name = "Manny"

// console.log(user1)
// console.log(user2)


// method-2

// const user1 = {
//     name:"Dev",
//     age:45,
//     userID: 345678
// }

// let user2 = Object.assign({},user1)  // shallow copy


// user2.userID = 87654

// console.log(user1)
// console.log(user2)


// const user1 = {
//     name:"Dev",
//     age:45,
//     userID: 345678,
//     address:{
//         city:"Jaipur",
//         pinCode:999999
//     }
// }

// let user2 = {...user1}  // shallow copy 

// // user2.name = "Manny"

// user2.address.city = "Kota"

// console.log(user1)
// console.log(user2)


// deep copy

// method-1

const user1 = {
    name:"Dev",
    age:45,
    userID: 345678,
    address:{
        city:"Jaipur",
        pinCode:999999
    }
}

// let user2 = structuredClone(user1)  // deep copy

// user2.address.city = "Ajmer"

// console.log(user1)
// console.log(user2)

// method - 2

// let user2 = JSON.parse(JSON.stringify(user1))  // deep copy


// user1.address.pinCode = 88888888

// console.log(user1)
// console.log(user2)