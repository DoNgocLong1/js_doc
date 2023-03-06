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
        name: 'ReactJS',
        coin: 500
    },
    {
        id: 6,
        name: 'Ruby',
        coin: 40
    },

]

// EXTENTION on document bellow has a 'KEY WORD' 'course', it's different with 'courses' it has 's' in the end

//forEach():  iterate over each element of array
/* courses.forEach(function(course, index) {
    console.log(index,course)
}) */


//every(): this method iterate over each element end stop when meet the false condition, that mean this method only return true when all value of each element is true 
/* var isFree = courses.every(function(course, index) {
    console.log(index)
    return course.coin === 0
})
console.log(isFree) */


//some(): this method is opposite with method every, this method iterate over each element end stop when meet the true condition, that mean this method return true when the fist value of element is true 
/* var isFree = courses.some(function(course, index) {
    console.log(index)
    return course.coin === 0
})
console.log(isFree)
 */


//find(): search and return only one element satisfy the condition
/* var search = courses.find(function(course, index) {
    console.log(index)
    return course.name === 'Ruby'
})
console.log(search)
 */


//filter(): search and return all element satisfy the condition
/* var search = courses.filter(function(course, index) {
    console.log(index)
    return course.name === 'Ruby'
})
console.log(search)

 */


//map(): edit array, get value

/* var newCourses = courses.map(function(course,index){
    return {
        id: course.id,
        name: `khóa học ${course.name}`,
        coin: course.coin,
        coinText: `Giá : ${course.coin}`
    }
})
console.log(newCourses) */


//reduce(): to active value of element
/* var totalCoin = courses.reduce(function(total,couse) {
    return total+couse.coin
},0)
console.log(totalCoin) */
//làm phẳng mảng từ depth array
/* var depthArray = [1,2,[3,4],5,6,[7,8,9]]
var flatArray = depthArray.reduce(function(flatOutput,depthItem) {
    return flatOutput.concat(depthItem)
},[])
console.log(flatArray) */


//tự code ra hàm reduce
/* Array.prototype.reduce2 = function(callback, result) {
    let i = 0
    if(arguments.length<2){      //argumnet is number of variable on function this situation is reduce2 doesn't have initValue
        i = 1
        return this[0]
    }
    for(;i<this.length;i++){        //this situation is reduce2 has initValue
        result = callback(result,this[i],i,this)
    }
    return result
}
var totalCoin = courses.reduce2(function(total,couse) {
    return total+couse.coin
},0)
console.log(totalCoin) */


//includes(): find string on string or find element on array and return boolean this method has the second argument is a position fo find
/* var testString = 'learning Javascript and reactJS'
var testArray = ['Javascript','PHP','Python']
console.log(testString.includes('Javascript'))
console.log(testArray.includes('Javascript')) */


//assign() : copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
/* var arr = [['name', 'Sơn Đặng'], ['age', 18]]
// Expected results:
console.log(arrToObj(arr)) // Output: { name: 'Sơn Đặng', age: 18 }
function arrToObj(array) {
    var newObject = array.reduce(function(start, current) {
        return start = Object.assign(start, {[current[0]]: current[1]});
    }, {})
    return newObject
} */

//-----------------------------------------------------------------------------------------------------
//example 1:
/* function arrToObj(arr) {
    const result = arr.reduce((obj,[key,value]) => {
       obj[key] = value
       return obj
    },{})
    return result
 } */
 
 // Expected results:
 /**
 const obj1 = arrToObj([
    ['name', 'Son Dang'], 
    ['age', 21], 
    ['address', 'Ha Noi']
 ])
 console.log(obj1)
 Output: { name: 'Son Dang', age: 21, address: 'Ha Noi' }
 
 const obj2 = arrToObj([
    ['name', 'Duc Long'], 
    ['age', 18], 
    ['address', 'Ha Noi']
 ])
 console.log(obj2)
 Output: { name: 'Duc Long', age: 18, address: 'Ha Noi' }
 */