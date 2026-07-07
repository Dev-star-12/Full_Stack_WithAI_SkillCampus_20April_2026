let student = {
    studentName : "Dev",
    studentAge : 34,
    course : ["Html","Css","Js"],
    Id:false,
    address : {
        city:"jaipur",
        pinCode:76567
    }
}

// console.log(student.address.pinCode)

// console.log(student["studentAge"])

// student["user"] = "Web"

// console.log(student)

console.log(Object.keys(student))
console.log(Object.values(student))