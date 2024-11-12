function backTologin() {
    location.href = "http://localhost:5000/login";
}
const pass = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("click", function() {
    if (checkbox.checked == true) {
        pass.type = "text";
    } else {
        pass.type = "password";
    }
});