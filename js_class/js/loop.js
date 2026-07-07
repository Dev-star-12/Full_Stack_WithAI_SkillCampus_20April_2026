// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)


// console.log(100)


// for(let i =1; i<=1000; i++){
//     console.log(i)
// }



// for(let i = 1; i<=2; i++ ){
//     console.log(i + " -Chocklate")
// }

// for(let i = 1; i<=100; i++){
//     console.log(i)
// }

// for (let i =3; i>=1; i--){
//     console.log(i)
// }


// for(let i =2; i<=20; i+=2){
//     console.log(i)
// }

// for(let i=1; i<=20; i+=2){
//     console.log(i)
// }

// let n = 35

// for(let i = 1; i<=10; i++){
//     console.log(n*i)
// }


// let str = ''

// for(let i=1; i<=5; i++){
//     str+= "*"
//     console.log(str)
// }


// let i = 1

// while(i<=10){
//     console.log(i)
//     i++
// }


// let i = 1

// do{
//     console.log(i)
//     i++
// }
// while(i<=5)


// break and continue

// for(let i=1; i<=10; i++){
//     if(i==5){
//         break
//     }

//     console.log(i)
// }


// for(let i=1; i<=10; i++){

//     if(i==5){
//         continue
//     }

//     console.log(i)
// }


// let arr = ["aman","ankit","priya","manny","kizie"]

// //           0       1       2        3      4


// for(let i=0; i<arr.length; i++){    //i=0 0<5 -> 0
//     console.log(arr[i])
// }


// let arr = ["aman","ankit","priya","manny","kizie"]

// for(let hello of arr ){
//     console.log(hello)
// }



// let student = {
//     name:"Dev",
//     age:34,
//     city:"jaipur"
// }

// for(let key in student ){
//     // console.log(key)
//     console.log(student[key])
// }



// let marks = [80,75,67,96,60,50,23,41,21]

// for(let i=0; i<marks.length; i++){
//     if(marks[i] >= 33){
//         console.log("pass : "+ marks[i])
//     }else{
//         console.log("fail : "+ marks[i])
//     }
// }


let pattern = "";
for(let i=1; i<=5; i++){
    
    for(let j=1; j<=5; j++){
        pattern+="*"
    }

    pattern+= "\n"
}

console.log(pattern)
