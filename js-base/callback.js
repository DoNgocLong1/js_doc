/* function myFunction(param) {             //  function myFunction(myCallback(value)) {  (param === myCallback(value))
    if(typeof param === 'function'){        //     if(typeof myCallback(value) === 'function'){ 
        param('learing Javascript')         //          myCallback('learing Javascript')
    }                                       //      }
}
function myCallback(value){
    console.log('value :', value)
}
myFunction(myCallback)                   
 */


//tự code lại hàm map()
/*var courses = [
    'Javascript',
    'PHP',
    'Python'
]
Array.prototype.map2 = function(callback) {
    for (var i=0;i<this.length;i++){
        callback(this[i],i)
    }
}
var result = courses.map2( function(course, index) {
    console.log(index,course)
})
 */


//Tự code lại hàm filter()
var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250
    },
    {
        id: 2,
        name: 'HTML,CSS',
        coin: 0
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 400
    },
    {
        id: 4,
        name: 'PHP',
        coin: 400
    },
    {
        id: 5,
        name: 'ReacJS',
        coin: 500
    },
    {
        id: 6,
        name: 'Ruby',
        coin: 40
    },

]
/* Array.prototype.filter2 = function(callBack) {
    arr = []
    for(var i in this){
        if(this.hasOwnProperty(i)){
            if(callBack(this[i],i)){
                arr.push(this[i])
            }
        }   
    }
    return arr
}
var search = courses.filter2(function(course, index) {
    return course.name =='Ruby' 
})
console.log(search) */

//tự code lại hàm some()
/* Array.prototype.some2 = function(callBack) {
    result = false
    for(var i in this){
        if(this.hasOwnProperty(i)){
            if(callBack(this[i],i)){
               result = true
               break;
            }
        }   
    }
    return result
}
var result = courses.some2(function(course, index) {
    console.log(index)
    return course.name === 'Ruby'
})
console.log(result) */



//tự code lại hàm every()
/* Array.prototype.every2 = function(callBack) {
    result = true
    for(var i in this){
        if(this.hasOwnProperty(i)){
            if(!callBack(this[i],i)){
               result = false
            }
        }   
    }
    return result
}
var result = courses.every2(function(course, index) {
    console.log(index)
    return course.name === 'Py'
})
console.log(result)
 */



// tự code lại hàm find
/* Array.prototype.find2 = function(callBack) {
    for(var i in this){
        arr = []
        if(this.hasOwnProperty(i)){
            if(callBack(this[i],i)){
                arr.push(this[i])
                break
            }
        }   
    }
    return arr
}
var search = courses.find2(function(course, index) {
    return course.name === 'Ruby'
})
console.log(search) */

// tự code lại hàm forEach 

/* Array.prototype.forEach2 = function(callBack) {
    for(var i in this){
        if(this.hasOwnProperty(i)){
          callBack(this[i],i)
        }   
    }
}
var search = courses.forEach2(function(course, index) {
    console.log(index,course)
}) */
