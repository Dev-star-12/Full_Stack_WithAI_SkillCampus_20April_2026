// setTimeout(()=>{
//     console.log("Hello students..🥺")
// },3000)

// // 1000 milisec = 1sec


// console.log("Website Loading.....")

// setTimeout(()=>{
//     console.log("Website loaded 👍")
// },5000)



// const timer = setTimeout(()=>{
//     alert("Welcome to skillcampus..")
// },3000)

// clearTimeout(timer)



// setInterval(()=>{
//     console.log("Hello...")
// },1000)

// let count = 10
// setInterval(()=>{
//     if(count>0){
//          console.log(count)
//     count--
//     }
   
// },1000)


// setInterval(()=>{
//     console.log(Math.floor(Math.random()*100))
// },1000)


const timerForRandom = setInterval(()=>{
   console.log(Math.floor(Math.random()*100))
},1000)

setTimeout(()=>{
    clearInterval(timerForRandom)
},5000)