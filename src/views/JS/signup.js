// function backTologin() {
//     location.href = "http://localhost:5000/login";
// }
// const pass = document.getElementById("password");
// const checkbox = document.getElementById("checkbox");
// checkbox.addEventListener("click", function() {
//     if (checkbox.checked == true) {
//         pass.type = "text";
//     } else {
//         pass.type = "password";
//     }
// });

const mongooes = require("mongoose");

const connect = mongooes.connect("mongodb://localhost:27017/UserData");
connect.then(() => {
    console.log("Database is connected");
}).catch(() => {
    console.log("Database is not Conected");
});
const signupSchema = new mongooes.Schema({
    username: {
        type: String,
    },
    password: {
        type: Number,
        required: true
    }
});
const signupCollection = mongooes.model("signup", signupSchema);
module.exports = signupCollection;