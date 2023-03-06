var myInfo = {
    name: 'Ngoc Long',
    age: 18,
    address: 'Bac Ninh, VN',
    array: ['PHP', 'JS']
}

// add value from array to null object
/* var test = {
}
var arr = ['PHP','HTML','CSS']
arr.forEach(function(ar) {
    test[ar] = ar
    console.log(test[ar])
})
console.log(test)
 */

//add key and value into object
/*  myInfo.email = 'dongoclong101001@gmail.com' 
 myInfo['my-email'] = 'dongoclong101001@gmail.com' // add to object when key has special chatacter(-)
console.log(myInfo)  */


//add value into object with key is declared outside object
/* var emailKey = 'email'
var myInfo2 = {
    name: 'Ngoc Long',
    age: 18,
    address: 'Bac Ninh, VN',
    [emailKey]: 'dongoclong101001@gmail.com'//this key is variable it's email what we declare above
}
console.log(myInfo2)   */

///.......................................object contructor.........................
var Users = function(firstName, lastName, avatar) { //can use function Users(firstName, lastName, avatar)
    this.firstName = firstName
    this.lastName = lastName
    this.avatar = avatar

    this.getName = function(){
        return `${firstName} ${lastName}`
    }
}
// add value to object contructor
var author = new Users('Long','Do','avatar') 
var user = new Users('Vu','Nguyen','avatar')
/* console.log(author)
console.log(user) */


// add different value for a single object
/* author.tittle = 'administrator must be protected'
user.comment = 'do you create the asp.net course ?'
console.log(author)
console.log(user) 
 */

//call function from object contructor
/* console.log(author.getName())
console.log(user.getName())   */


//using object propotype( using when we want to add value to father object contructor)
/* Users.prototype.className = 'Social'//add value
Users.prototype.getClassName = function() { //add function
    return this.className
}
console.log(author)
console.log(author.getClassName()) */