// appointment send through email
var sen = document.getElementById("btn");
var popup = document.getElementById("display-popup");
sen.addEventListener("click", function() {

    var firstname = document.getElementById("firstname");
    var lastname = document.getElementById("lastname");
    var age = document.getElementById("age");
    var address = document.getElementById("address");


    var Data = {
        firstname: `${firstname.value}`,
        lastname: `${lastname.value}`,
        age: `${age.value}`,
        address: `${address.value}`,
    };

    emailjs.send("service_w8pyol6", "template_rekwpym", Data).then(() => {
        // alert("Email was sent sucessfully.");
    }).catch(() => {
        alert("Check Internet Connection Cannot Send Email ?");
    });

    // popup 
    setTimeout(() => {
        popup.classList.add("open-popup");
    }, 1000);
    setTimeout(() => {
        popup.classList.remove("open-popup");
    }, 3000);


});