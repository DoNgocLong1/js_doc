var languages = [
    'javascript',
    'ruby',
    'php'
]
//toString(): convert array to string
//console.log(languages.toString())


//join(): convert array to tring with character in ''
//console.log(languages.join(' - '))


//pop(): delete last elelment and return that element
/* console.log(languages.pop())
console.log(languages) */


//push(): add elements at the last of array and return length of that array
/* console.log(languages.push('java','python'))
console.log(languages) */

//shift(): delete fist element of array if array length ==1 then return undefined
/* console.log(languages.shift())
console.log(languages.shift())
console.log(languages.shift())
console.log(languages.shift())
console.log(languages.shift())
console.log(languages)  */

//unshift(): add elements at the fist of array and return length of that array
/* console.log(languages.unshift('java','python'))
console.log(languages) */

//splice() : edit array
/*languages.splice(1,1) //delete one element from index = 1 */
/* languages.splice(1,2) //delete two element from index = 1  */
/* languages.splice(1,0) //do nothing */
/* languages.splice(1,1,'Dart')// replace element with index = 1 by 'Dart' */
/* languages.splice(1,2,'Dart')// replace element with index = 1 to index = 2 by 'Dart' */
/* languages.splice(1,1,'Dart','java')// replace element with index = 1 by 'Dart' and 'java' */
/* languages.splice(1,2,'Dart','java')// replace element with index = 1 to index = 2 by 'Dart' and 'java' */
//console.log(languages)

/* //concat() : merge two array 
var languages2 = [
    'dart',
    'java'
] */
/* console.log(languages.concat(languages2))//merge array languages2 with array languages, array languages is on top */
/* console.log(languages2.concat(languages))//merge array languages2 with array languages, array languages2 is on top */

//slice() : copy array.EXTENTION: it's a same method of slice() on string
/* console.log(languages.slice(1))//copy element has index = 1 to last element from array languages */
/* console.log(languages.slice(0))//copy all element from array languages */
/* console.log(languages.slice(1,2))//copy one element has index = 1 form array languages  */
/* console.log(languages.slice(-2,-1))//copy one element has index = -2 form array languages with index run at the bottom to the top(index from 0 at the bottom to negative number ) 
ATTENSION!! languages.slice(1,2) == languages.slice(-2,-1)
*/