// Array , String , Object ,DOM , Userdefined , Set Map

let names = ["chinmay","sarika","shirish","ram"]

// length 

// let q1 = names.length
// console.log(q1)

// // looping 
// for(let i = 0 ; i < names.length ; i++){
//     console.log(names[i])
// }

//map() , filter() ,reduce(), forEach(), some(),every(),find(), findIndex()


let birthYears = [1989,1990,1991,1992]
let ages = []
// [34,33,32,31]
for(let i = 0 ; i < birthYears.length ; i++){
    //console.log(2023 - birthYears[i])
    ages.push(2023 - birthYears[i])
}
console.log(ages)

let q2 = birthYears.map(function(el,index,arr){
    //console.log(el,index,arr)
    return 2023 - el
})
console.log(q2)

let numbers = [1,2,3,4,5,6,7,8,9,10]

// table 
let q3 = numbers.map(function(el,index,arr){
    return el * 2
})
console.log(q3)


// program 2
// filter()

let marks = [33,44,56,77,88,99,22]
// [77,88,99]
let above50 = []

for(let i = 0 ; i < marks.length ;i++){
    //console.log(marks[i])
    if(marks[i] > 50){
        above50.push(marks[i])
    }
}
console.log(above50)


let q4 =  marks.filter(function(el,index,arr){
    return el > 50
})
console.log(q4)


let transactions = [44,55,66,33,-45,600,700,776,-89]
let q5 = transactions.filter(function(el,index,arr){
    return el < 0
})
console.log(q5)


// program 3  (reduce)

let mrks = [11,22,33]
let sum = 0

for(let i = 0 ; i < mrks.length ; i++){
    sum = sum + mrks[i]

    //    0   +    11   =====> 11
    //    11  +    22  =====> 33
    //    33  +    33  =====> 66
}
console.log(sum)
let q6 = mrks.reduce(function(acc,el,index,arr){
    return acc + el
},5)

console.log(q6)














