// promise

// let promise_task = new Promise((resolve,reject)=>{}) // syntax

// console.log(promise_task)

// setTimeout(()=>{
//     console.log("Step-1")
//     setTimeout(()=>{
//         console.log("Step-2")
//         setTimeout(()=>{
//             console.log("Step-3")
//         },1000)
//     },1000)
// },1000)

// fetch("http//ajshjash").then(data).catch(error)

// let promise_task = new Promise((resolve,reject)=>{
//     // Async Task
//     setTimeout(()=>{
//         console.log("Async Task Complete..")
//         // resolve("Data Mil gya")
//         reject("Server Error")
//     },2000)
// }) // syntax

// promise_task.then((data)=>{
//     console.log("Then block")
//     console.log(data)
// })  // fullfil - then block - data
// promise_task.catch((err)=>{
//     console.log("Catch block")
//     console.log(err)
// }) // reject - catch block - error

// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Async Task Complete..")

//         let task = false
//         if(task){
//             resolve({userName:"Dev"})
//         }else{
//             reject("Error: Sorry No Data..Server Error")
//         }

//     },3000)
// }).then((data)=>{
//     console.log(data)
// }).catch((error)=>{
//     console.log(error)
// })

// console.log("start")
// console.log("middle")
// console.log("end")

// console.log("Start")

// setTimeout(()=>{
//     console.log("Loading....")
// },2000)

// console.log("End")

// setTimeout(()=>{
//     console.log("Step-1")
//     setTimeout(()=>{
//         console.log("Step-2")
//         setTimeout(()=>{
//             console.log("Step-3")
//         },1000)
//     },1000)
// },1000)

// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Async Task...Complete🪠")
//         let task = true

//         if(task){
//             resolve(10)
//         }else{
//             reject("Server Error...🤐")
//         }

//     },2000)
// }).then((res)=>{
//     console.log("Step-1 ="+res)
//     return res*2
// }).then((value)=>{
//     console.log("Step-2 ="+value)
//     return value*2
// }).then((res)=>{
//     console.log("Step-3 ="+res)
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("Always Execute")
// })

// let value = fetch("https://dummyjson.com/products").then((res)=>{
//    return res.json()

// }).then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })

// // console.log(value)

// fetch("https://dummyjson.com/products/345").then((res)=>{
//     return res.json()
// }).then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })

//method -1 .then.catch
//method -2 async/await - try&catch

async function getProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products/764");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error:- " +error);
  }
}

getProducts();
