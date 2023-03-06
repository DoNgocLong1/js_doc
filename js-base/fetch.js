/* var postApi = 'http://localhost:3000/courses'
var comment = document.querySelector('#comment-block')
fetch(postApi)
    .then(function(response) {
        return response.json()
    })
    .then(function(posts) {
        var html = posts.map(function(post) {
            return `<li>
                <h2> ${post.name}  </h2>
                <p>  ${post.email}   </p>
             </li>`
        })
        var htmls = html.join('')
        comment.innerHTML = htmls

    })
 */

//working with REST API

var coursesApi = 'http://localhost:3000/courses'
function start() {
    getCourses(renderCourses)
    handleCreateForm()
}
start()
function getCourses(callback) {
    fetch(coursesApi)
        .then(function(response) {
            return response.json()
        })
        .then(callback)
}
function createCourse(data, callback) {
    var options = {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
        'Content-Type': 'application/json'
        }
    }
    fetch(coursesApi, options)
        .then(function(response) {
            response.json()
        })
        .then(callback)
}

//Delete at DOM
function handleDeleteCourse(id) {
    var options = {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json'
        }
    }
    fetch(coursesApi + '/'+ id, options)
        .then(function(response) {
            response.json()
        })
        .then(function() {
           var courseItem = document.querySelector('.course-item' + id)
           if (courseItem) {
                courseItem.remove()
           }
        })
}
// delete at JSONserver
/* function handleDeleteCourse(id) {
    var options = {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json'
        }
    }
    fetch(coursesApi + '/'+ id, options)
        .then(function(response) {
            response.json()
        })
        .then(function() {
            getCourses(renderCourses)
        })
} */
function getCourseToInput(id) {
    var name = document.querySelector(`.course-item-${id} h4`).innerText
    var decr = document.querySelector(`.course-item-${id} p`).innerText
    
    document.querySelector("input[name='name']").value = name
    document.querySelector("input[name='description']").value = decr


    var updateBtn = document.querySelector("#update")

    updateBtn.addEventListener("click", function(){

        var nameEdit = document.querySelector("input[name='name']").value
        var decrEdit = document.querySelector("input[name='description']").value
    
        var formData = {
            name: nameEdit.trim(),
            description: decrEdit.trim()
        }
    
        console.log(formData);
        handleUpdateCourse(id, formData)
    })
}


function handleUpdateCourse(id, formData) {
    fetch(coursesApi + "/" + id, {
        method: "PUT",
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(function(response){
        return response.json()
    })
    .then(function() {
        getCourses(renderCourses)
    })
}

function renderCourses(courses) {
    var listCoursesBlock = document.querySelector('#comment-block')
    var htmls = courses.map(function(course) {
        return `
            <li class=course-item-${course.id}>
                <h4> ${course.name}</h4>
                <p> ${course.description}</p>
                <button onclick="handleDeleteCourse(${course.id})">Xóa</button>
                <button onclick="getCourseToInput(${course.id})">Sửa</button>
            </li>
        `
    })
    listCoursesBlock.innerHTML = htmls.join('')
}
function handleCreateForm(){
    var createBtn = document.querySelector('#create')
    createBtn.onclick = function() {
        var name = document.querySelector('input[name="name"]').value
        var description = document.querySelector('input[name="description"]').value
        var formData = {
            name: name,
            description: description
        }
        createCourse(formData, function() {
            getCourses(renderCourses)
        })
    }
}