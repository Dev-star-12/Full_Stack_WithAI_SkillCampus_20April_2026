// Spread - Unpack
// Rest - Pack


// Spread

// copy/clone

// const arr = [8,9,7,6,8]
// const newArr = [...arr]

// arr[0] = "manny"

// console.log(arr)
// console.log(newArr)

// merge 

// const one = [42,323,23]
// const two = [89,97,90]
// const another = [12,23,2,32,3]

// const three = [...one,...two,...another]

// console.log(one)
// console.log(two)
// console.log(three)


// const obj_one = {
//     name:"Dev",
//     age:78
// }

// const obj_two = {
//     city:"Jaipur"
// }

// const obj_three = {
//     ...obj_one,
//     ...obj_two
// }

// console.log(obj_one)
// console.log(obj_two)
// console.log(obj_three)


// const student = {
//     name:"Dev",
//     age:56
// }

// const copyOfStudent = {...student}

// student.name = "Manny"

// console.log(student)
// console.log(copyOfStudent)  // shallow copy 



// Rest - Pack

// function demo(...data){
//     console.log(data)
// }


// demo(78,90,89,78)



// function sum(...num){
//     let total =0
//     for(let i of num){
//         total+=i
//     }

//     console.log(`Total:- ${total}`)
// }

// let price = [10,20,30]

// sum(...price)


// function student(name,...marks){
//     console.log(`Student Name :- ${name} `)
//    let total =0
//     for(let i of marks){
//         total+=i
//     }

//     console.log(`Total Marks:- ${total}`)
// }

// student("Rahul",67,98,78,89)


// function student(...marks,name){}


let color = ["Red","Yellow","Green"]

let i =0

setInterval(()=>{
    console.log(color[i])
    i++;
    if(i== color.length){
        i=0
    }
},3000)