// Class
/* class Courses {
   constructor(name, price){
       this.name = name
       this.price = price
   }
   getName() {
       return this.name
   }
   getPrice() {
       return this.price
   }
}
var PHP = new Courses('php',100000)
console.log(PHP)
console.log(PHP.getName())
console.log(PHP.getPrice()) */

// enchanced object literals
/* var name = 'JavaScript'
var price = 100000
var course = {
    name,
    price,
    getName() {
        return name
    }
}
console.log (course.getName()) */


// Destructuring, Rest
var arr = ['JavaScript', 'Ruby','PHP']
var arr2 = ['ReacJS', 'Dart']
var course = {
    name : 'Javacript',
    price : 10000,
    image : 'image-address',
    children : {
        name : 'ReactJS'
    }
}
//- Destructuring
/* 
var [a,b,c] = arr
console.log(a,b,c)
var [a,,c] = arr
console.log(a,c)
 */
/* var course = course
console.log({course}) */
/* var {name, price, image} = course
console.log(name, price, image) */


//- Rest
/* var [a,...rest] = arr
console.log(a)
console.log(rest) */
/* var {name, ...newObject} = course
console.log(name)
console.log(newObject) */
/* var {name : parentName, children :{name: childrenName}} = course
console.log(parentName)
console.log(childrenName) */
/* function logger(...param) {
    console.log(param)
}
console.log(1,2,3,4,5,6,7,8,9) */


// Spread
/* var arr3 = [...arr,...arr2]
console.log(arr3) */

/* var obj1 = {
    name : 'JavaScript'
}
var obj2 = {
    price : 100000
}
var obj3 = {
    ...obj1,
    ...obj2
}
console.log(obj3) */

/* function logger(...rest) {    //rest is Rest method
    for(var i = 0; i < rest.length; i++) {
        console.log(rest[i])
    }
}
logger(...arr) // arr is Spread method */