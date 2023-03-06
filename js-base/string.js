var fistName = 'Long'
var lastName = 'Do'
var fullString = ' Một số case sử dụng backslash'
+' Một số case sử dụng backslash'
var myString = 'learning JS with JS me JS '
//because of string is to long that we need to break line for easy to see(recommend 80 character in one line)

/* console.log(fistName) // print string fistName */

/* console.log(fistName + ' ' + lastName) //print two string fistName and lastName */

/* console.log(fistName.length) //print length of string fistName */

/* console.log(fistName[2]) // print character has index = 2 */

/* console.log(`I am ${fistName} ${lastName}`) //print string with '${}' and the space is addition automatic */

/* console.log(fullString)//print string fullString */

//indexOf(): find index number of string avaliable

/* console.log(myString.indexOf('JS'))//find index number of the fist string 'JS' */
/*  console.log(myString.indexOf('JS',10))//find index number of  string 'JS' from 10th index number */


/* //lastIndexOf() : find the last index number of string avaliable
console.log(myString.lastIndexOf('JS')) */


/* search() :find index number of string avaliable but don,t support the second method to set index numbet to find
for example : only use myString.search('JS'), can't use myString.search('JS',10) */
//console.log(myString.search('JS'))


//slice():cut string.EXTENTION: it's a same method of slice() on array
/* console.log(myString.slice(8)) //cut string from chatactor has index number == 8
console.log(myString.slice(8,14)) //cut string from chatactor has index number == 8 to character has index number == 14
console.log(myString.slice(-3,-1)) //cut string the bottom of string */


//Replace() : replace string
/* console.log(myString.replace('JS','javascript')) //replace the fist string 'JS' to 'javascript'
console.log(myString.replace(/JS/g,'javascript')) //replace all string 'JS' to 'javascript' */


//toUpperCase() : convert to upper case character
//console.log(myString.toUpperCase())


//toLowerCase() : convert to lower case character
//console.log(myString.toLowerCase())

//trim() : delete all sapce useless from string
/* var uselessSpace = '          i am Long and i am learning javascript             '
console.log(uselessSpace.trim()) */

//split() : convert string to array
/* var languages = 'java , python, PHP'
console.log(languages.split(' ,')) // convert from string to array with ' ,' between two element
console.log(languages.split('')) //convert from string to array by single character
 */


/* //tring[] : find character by index number
console.log(fistName[2])  */
