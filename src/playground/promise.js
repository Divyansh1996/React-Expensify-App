const promise = new Promise((resolve, reject) => {
    setTimeout(()=> {
        reject("This is my resolved data")
    },3000)
})

console.log("before")

promise.then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})

console.log("after")