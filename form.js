let persons = [{
    name: "muhammad",
    lastname: "qasim",
    age: "28",
    email: "qasim@gmail.com",
    password: "123456",
    confirmpassword: "123456",
    imgUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300",
},
{
    name: "muhammad",
    lastname: "asif",
    age: "28",
    email: "asif@gmail.com",
    password: "123456",
    confirmpassword: "123456",
    imgUrl: "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=300",
},
{
    name: "muhammad",
    lastname: "rashid",
    age: "28",
    email: "rashid@gmail.com",
    password: "123456",
    confirmpassword: "123456",
    imgUrl: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300",
},
{
    name: "muhammad",
    lastname: "ali",
    age: "28",
    email: "ali@gmail.com",
    password: "123456",
    confirmpassword: "123456",
    imgUrl: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300",
},
];

function clr() {
    let inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
}

function createAccount() {
    let name = document.getElementById("firstName").value;
    let lastname = document.getElementById("lastName").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    let Name = name + " " + lastname;

    if (name !== "" && lastname !== "" && age !== "" && email !== "" && password !== "" && confirmPassword !== "") {
        document.getElementById("err").innerText = "";
    
            
        confirm("submitted.");

        if (password !== confirmPassword) {
            alert("Password and Confirm Password do not match.");
        }
        
        else {
            let user = persons.find(function (person) {
                return person.email === email;
            });

            if (user) {
                alert("User with the same email already exists.");
            } else {
                persons.push({
                    name: name,
                    lastname: lastname,
                    age: age,
                    email: email,
                    password: password,
                    confirmpassword: confirmPassword,
                });

                console.log(persons);

                clr();
                document.getElementById("sign_hd").innerText = "Log In";
                document.getElementById("btn1").style.display = "none";
                document.getElementById("btn2").style.display = "none";
                document.getElementById("firstName").style.display = "none";
                document.getElementById("lastName").style.display = "none";
                document.getElementById("age").style.display = "none";
                document.getElementById("confirmPassword").style.display = "none";
                document.querySelectorAll('label').forEach(function (label) {
                    label.style.display = "none";
                });
            }
        }
    } else {
        document.getElementById("err").innerText = "Please fill in all the fields.";
    }
}

function userLogin() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let user = persons.find(function (person) {
        return person.email === email && person.password === password;
    });

    if (user) {
        document.getElementById("boxcont").style.display = "none";
        document.getElementsByClassName("box")[0].style.display = "block";
        document.getElementById("img1").src = user.imgUrl;
        document.getElementById("box1").innerHTML = user.name + " " + user.lastname;

    } else {
        alert("Invalid email or password.");
    }
    document.getElementById("sign_hd").innerText = "Log In";
    document.getElementById("firstName").style.display = "none";
    document.getElementById("lastName").style.display = "none";
    document.getElementById("age").style.display = "none";
    document.getElementById("confirmPassword").style.display = "none";
    document.getElementById("btn1").style.display = "none";
    document.getElementById("btn2").style.display = "none";


    document.querySelectorAll('label').forEach(function (label) {
        label.style.display = "none";
    });
}