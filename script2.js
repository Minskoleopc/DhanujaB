
// truthy 
// falsy 

// truthy --- 'A' , 1 , {} , [] , " ", "A124", true , 90 > 6
// falsy --- null , NaN , undefined , "" , 0 , 45 == 46 , false


// if(''){
//     console.log("hello")
// }
// else {
//     console.log("bye")
// }

// let a 
// console.log(a)
// console.log(8 + undefined)

// Switch 

let city = "indore"
// switch(city){
//     case 'pune':
//         console.log("MH")
//     case 'indore':
//         console.log("MP")
//     case 'jaipur':
//         console.log('RJ')
//     default:
//         console.log('Incorrect city name')
// }

// switch(city){
//     case 'pune':
//         console.log("MH")
//         break
//     case 'indore':
//         console.log("MP")
//         break
//     case 'jaipur':
//         console.log('RJ')
//         break
//     default:
//         console.log('Incorrect city name')
// }

// switch(city){
//     case 'pune':
//     case 'nagpur':
//         console.log("MH")
//         break
//     case 'indore':
//     case 'bhopal':
//         console.log("MP")
//         break
//     case 'jaipur':
//     case 'udaipur':
//         console.log('RJ')
//         break
//     default:
//         console.log('Incorrect city name')
// }


// Tenary 

let x = 10
let y = 5

if(x>y){
    console.log("x is greater")
}
else {
    console.log('y is greater')
}

// example 2

x > y ? console.log('x is greater'):console.log('y is greater')
let age = 17
let r1 = age >= 18 ? "can drive":"cannot driver"
console.log(r1)

// for loop 

// for(let i = 0 ; i <= 5 ; i++){
//     console.log(i)
// }

// let t1 = 0
// while(t1 <=5){
//     console.log(t1)
// }


for(let i = 1 ; i <= 5 ; i++){
    if(i == 3){
        break
    }
    console.log(i)
}

for(let i = 1 ; i <= 5 ; i++){
    console.log(i)
    if(i == 3){
        break
    }

}

for(let i = 1 ; i <= 5 ; i++){ //2 // 3 // 4 // 5 // 6
    if(i == 3){
        continue
    }
    console.log(i) // 1 // 2 // 4 // 5

}


let h = 1
while(h <= 5){
    if(h == 3){
        break
    }
    console.log(h)
    h ++
}


let h1 = 1
while(h1 <= 5){
    if(h1 == 3){
        h1 ++ // 4
        continue
    }
    console.log(h1) // 1 // 2 // 4 // 6
    h1 ++ // 2 // 3 // 5 // 6
}








