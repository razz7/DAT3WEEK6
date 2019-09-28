import 'bootstrap/dist/css/bootstrap.css'




document.getElementById("getusers").addEventListener("click", getAllUsers);
document.getElementById("userid").addEventListener("click", getUserWithID);
document.getElementById("createuser").addEventListener("click", createNewUser);
document.getElementById("edituser").addEventListener("click", editUser);
document.getElementById("deleteuser").addEventListener("click", deleteUser);

function getAllUsers() {
    let url = 'http://localhost:3333/api/users';
    fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        var users = data;
        console.log(data);
        var usersMapped = users.map(function(user) { return "<li>" + user.name + " " + user.age + " " + user.email + "</li>"})
        
        document.getElementById("root").innerHTML = '<ul>' + usersMapped.join("") + '</ul>';
    }); 
};


function getUserWithID() {

    var id = document.getElementById("inputid").value;
    let url = 'http://localhost:3333/api/users/' + id;
    console.log(id);
    fetch(url)
    .then(res => fetchWithErrorCheck(res))
    .then(function(response) {
        var users = data;
    console.log(data);
    var user = "<li>" + data.name + " " + data.age + " " + data.email + "</li>";

    document.getElementById("root").innerHTML = '<ul>' + user + '</ul>';

    })
    .then(data => {
        console.log(data);
        var message = '<p>' + data.message + '</p>';
        document.getElementById("root").innerHTML = message;

    })
    .catch(err => {
    console.log(err);
    document.getElementById("root").innerHTML = "error";
    })
            
   


     };



function createNewUser() { 

    var fields = '<container type="container"><input id="age" type="text" placeholder="Age"/>' +
    '<input id="name" type="text" placeholder="Name"/>' +
    '<input id="gender" "type="text" placeholder="Gender"/>' +
    '<input id="email" type="text" placeholder="Email"/><button type="button" id="usercreate"> Create user</button></container>';

    document.getElementById("root").innerHTML = fields;
    document.getElementById("usercreate").addEventListener("click", createuser);

}

function createuser() {
    
    const url = 'http://localhost:3333/api/users';
    const data = { 'age' : document.getElementById("age").value,
    'name' : document.getElementById("name").value,
    'gender' : document.getElementById("gender").value,
    'email' : document.getElementById("email").value };
    
    try {
        const response = fetch(url, { 
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type' : 'application/json'
            }
        });

    } catch(error) {
        console.error('Error:', error);
    }

    document.getElementById("root").innerHTML = '<p> User created </p>'


}

function editUser() { 

    var fields = '<container type="container"><input id="age" type="text" placeholder="new Age"/>' +
    '<input id="name" type="text" placeholder="New name"/>' +
    '<input id="gender" "type="text" placeholder="new gender"/>' +
    '<input id="email" type="text" placeholder="New email"/>' +
    '<input id="id" type="text" placeholder="id of user"/>' +
    '<button type="button" id="editspecific"> edit user</button></container>';

    document.getElementById("root").innerHTML = fields;
    document.getElementById("editspecific").addEventListener("click", userEdit);

};

function userEdit() {
    var id = document.getElementById("id").value
    const url = 'http://localhost:3333/api/users/' + id;
    const data = { 'age' : document.getElementById("age").value,
    'name' : document.getElementById("name").value,
    'gender' : document.getElementById("gender").value,
    'email' : document.getElementById("email").value };
    
    try {
        const response = fetch(url, { 
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-type' : 'application/json'
            }
        });

    } catch(error) {
        console.error('Error:', error);
    }

    document.getElementById("root").innerHTML = '<p> User edited </p>'



}

function deleteUser() { 

    var fields = '<container type="container">' +
     '<input id="id" type="text" placeholder="id of user"/>' +
    '<button type="button" id="deletespecific"> delete user</button></container>';

    document.getElementById("root").innerHTML = fields;
    document.getElementById("deletespecific").addEventListener("click", userToDelete);
};

function userToDelete() { 

    var id = document.getElementById("id").value
    const url = 'http://localhost:3333/api/users/' + id;
    
    
    try {
        const response = fetch(url, { 
            method: 'DELETE',
            
            
            
        });

    } catch(error) {
        console.error('Error:', error);
    }

    document.getElementById("root").innerHTML = '<p> User delete </p>'

};

function fetchWithErrorCheck(res){
    if(!res.ok){
      return Promise.reject({status: res.status, fullError: res.json() })
    }
    return res.json();
   };