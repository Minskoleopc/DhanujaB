//let and const

let x = 10
console.log(x)
x = 100
console.log(x)

const j = 100
console.log(j)
//j = 899

// Arithmetic opertion 
// + - * / %

let s = 10
let t = 5
console.log(s+t)
console.log(s-t)
console.log(s*t)
console.log(s/t)
console.log(s%t)

let q = 9
let r  = 3
console.log(q+r)
console.log(q-r)
console.log(q*r)
console.log(q/r)
console.log(q%r)

// functions 

// function declaration 

function Calculator(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
    console.log(x%y)
}
Calculator(12,4)
Calculator(10,5)

// functions

// function without parameter and without return type 

function addA(){
    console.log(9+9)
}
addA()
addA()
addA()
addA()

// function with parameter and without return 

function addB(x,y){
    console.log(x+y)
}
let r1= addB(13,5)
console.log(r1)
addB(1,5)
addB(1,56)

// function with parameter and with return type 
function addC(x,y){
    return x + y
}

let q1 = addC(34,5)
console.log(q1)

// function declaration 

function subA(x,y){
    return x - y
}
let q2  = subA(12,4)
console.log(q2)

// function expression

let subB = function(x,y){
    return x - y
}
let q3 = subB(20,5)
console.log(q3)


// arrow function

// let subC = (x,y)=>{
//     return x - y
// }
// let q4 = subC(20,5)
// console.log(q4)


let subC = (x,y)=> x - y
let q4 = subC(20,5)
console.log(q4)

// function ---- function declaration , function expression , arrow function

// comparision 

//Extrovert | Introvert
// loud     | calm

// Human ------> amol
// Property --age , name , color ,height 
// Method   - talk() , walk()

// Vehicle 
// Property -- color , type , model 
// Method - start() , stop()

// Bank 
// Property - accNo , accName , type ,IFSC , branchName 
// Method - deposit(), withdrawl()


let x1 = 100
console.log(typeof x1) // number
// 7,0,-7,90.0.-90.8


let x2 = true
console.log(typeof x2)
//true or boolean


let x3 = "chinmay"
console.log(x3)
console.log(typeof x3)
// "A" , "!" , " ", "12321 !@$#"


// comparison 

console.log(typeof 10) // number
console.log(typeof '10') // string 
// <,> , <= , >= ,!= , == ,!== ,===
// == , !=   -----> value 
// === , !== -----> value and type
console.log(8 == '8')
console.log(8 === '8')
console.log(8 !== '8')
console.log(8 === 8)
console.log(8 !== 8)
console.log(8 != '8')
console.log(4 > 8)
console.log(4 < 8)
console.log(4 >= 8)
console.log(4 <= 8)

// logical operator


// AND && 

// true &&  true  ===> true
// false && true ====> false
// true && false ====> false
// false && false ====> false


// true || true  ===> true
// false || true ====> true
// true ||false ====> true
// false || false ====> false

// NOT 

// true ---> false 
// false ---> true

// conditional operators 

let numT = 5
if(numT > 0 && numT <= 5){
    console.log("10 % discout")
}
if(numT > 5 && numT <= 10){
    console.log("20 % discout")
}
if(numT > 10){
    console.log("30 % discout")
}


if(numT > 0 && numT <= 5){
    console.log("10 % discout")
}
else if(numT > 5 && numT <= 10){
    console.log("20 % discout")
}
else if(numT > 10){
    console.log("30 % discout")
}
else {
    console.log('Incorrect input')
}

let mark = 92

// if(mark > 90){
//     console.log("Grade A")
// }
// if(mark > 75){
//     console.log("Grade B")
// }
// if(mark > 65){
//     console.log("Grade C")
// }

if(mark > 90){
    console.log("Grade A")
}
else if(mark > 75){
    console.log("Grade B")
}
else if(mark > 65){
    console.log("Grade C")
}
else {
    console.log('try  again Fail!')
}










































