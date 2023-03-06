var users = [
    {
        id : 1,
        name : 'Son Dang'
    },
    {
        id : 2,
        name : 'Kien Dam'
    },
    {
        id : 3,
        name : 'Long Do'
    },
]

var comments = [
    {
        id : 1,
        user_id : 1,
        content : 'find string on string or find element on array and return'
    },
    {
        id : 2,
        user_id : 2,
        content : 'boolean this method has the second argument is a position'
    },
    {
        id : 3,
        user_id : 2,
        content : 'làm phẳng mảng từ depth array'
    },
    {
        id : 4,
        user_id : 3,
        content : 'search and return all element satisfy the condition'
    },
   
]

function getComments() {
    return new Promise (function(resolve) {
        setTimeout(function() {
            resolve(comments)
        },1000)
    })
}
function getUsersByIds(userIds) {
    return new Promise (function(resolve) {
        var result = users.filter(function(user) {
            return userIds.includes(user.id)
        })
        setTimeout(() => {
            return resolve(result)
        }, 1000);        
    })
}
getComments()
    .then(function(comments) {
        var userIds = comments.map(function(comment) {
            return comment.user_id
        })
        console.log(userIds)
        return getUsersByIds(userIds)
        .then(function(users) {
            return {
                users: users,
                comments : comments
            }
        })
    })
    .then(function(data) {
        console.log(data)
        var html =''
        var commnetBLock = document.getElementById('comment-block')
        data.comments.forEach(comment => {
            var user = data.users.find(function(user) {
                return user.id === comment.user_id
            })
            html += `<li>${user.name} : ${comment.content}`
        })
        commnetBLock.innerHTML = html
    }) 
   
//cách 2
/* const users = [
    { 
        id: 1, 
        name: "SoSo"
    },
    {
        id: 2, 
        name: "Anna"
    },
    {
        id: 3, 
        name: "Doremon"
    }
]

const comments = [
    {
        id: 1, 
        content: "Hello",
        user_id: 1
    },
    {
        id: 2, 
        content: "How are you?",
        user_id: 2
    },
    {
        id: 3, 
        content: "Very good",
        user_id: 1
    },
]

const getComments = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(comments), 1000)
    })
}

const getUserIds = () => {
    return new Promise((resolve) => {
        resolve(users) 
    })
}

getComments()
    .then(comments => {
        return getUserIds()
                .then(users => {
                    return {
                        users: users,
                        comments: comments
                    }
                })
    })
    .then(data => {
        const commentBlock = document.getElementById('comment-block')
        let htmls = ''
        data.comments.forEach(comment => {
            const user = data.users.find(user => user.id === comment.user_id)
            return htmls += `<li>${user.name}: ${comment.content}</li>`
        })
        commentBlock.innerHTML = htmls
    }) */


// test function getUsersByIds
/* getUsersByIds([1,2,3])
    .then(function(users) {
        console.log(users)
    }) */