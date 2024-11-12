var submit = document.getElementById("submit");
var inpt = document.getElementById("inp");
var pop = document.getElementById("popup");
var showPopup = document.getElementById("display-popup");



submit.addEventListener("click", function() {

    let input = document.getElementById("inp");
    let heading = document.getElementById("head");
    let Id = document.getElementById("shift");
    let btn = document.getElementById("button");

    //const div = document.createElement("div");

    //Pop-up

    let displayPopup = document.getElementById("display-popup");

    let showImg = document.getElementById("showImg");
    let img = document.createElement("img");
    img.src = "../img/check.png";

    let h6 = document.createElement("h6");

    let popBtn = document.getElementById("popBtn");
    let createBtn = document.createElement("button");

    createBtn.innerText = "Done";


    let div = document.getElementById("showPopup");





    if (input.value == "") {
        alert("fill the input ...");
        newCre.remove();
        label1.remove();
        label2.remove();
        inpt1.remove();
        inpt2.remove();
        butt1.remove();
        butt2.remove();
        label3.remove();
        label4.remove();
        inpt3.remove();
        inpt4.remove();

    }

    let newCre = document.createElement("h1");
    newCre.innerHTML = `${input.value}`;
    heading.appendChild(newCre);
    const hr = document.createElement("hr");


    let label1 = document.createElement("label");
    label1.innerHTML = "a.m.";
    Id.appendChild(label1);
    let inpt1 = document.createElement("input");
    inpt1.type = "radio";
    Id.appendChild(inpt1);

    let label2 = document.createElement("label");
    label2.innerHTML = "p.m.";
    Id.appendChild(label2);

    let inpt2 = document.createElement("input");
    inpt2.type = "radio";
    Id.appendChild(inpt2);

    let butt1 = document.createElement("button");
    butt1.innerHTML = "Edit";
    btn.appendChild(butt1);

    let butt2 = document.createElement("button");
    butt2.innerHTML = "Delete";
    btn.appendChild(butt2);

    let label3 = document.createElement("label");
    label3.innerHTML = "W-1";
    Id.appendChild(label3);

    let inpt3 = document.createElement("input");
    inpt3.type = "radio";
    Id.appendChild(inpt3);

    let label4 = document.createElement("label");
    label4.innerHTML = "W-2";
    Id.appendChild(label4);

    let inpt4 = document.createElement("input");
    inpt4.type = "radio";
    Id.appendChild(inpt4);



    input.value = "";

    inpt1.addEventListener("click", function() {
        if (inpt1.checked && inpt4.checked) {

            showImg.appendChild(img);
            h6.innerText = `Your name is ${newCre.innerText}  On duty  ${label4.innerText}  and at 09:00  ${label1.innerText}  -To 02:00  .Thank You`;
            div.appendChild(h6);
            showPopup.classList.add("open-popup");
            popBtn.appendChild(createBtn);
            displayPopup.classList.add("popup");
            popBtn.addEventListener("click", function() {

                input.value = "";
                // displayPopup.classList.remove("open-popup");
                // displayPopup.remove();
                img.remove();
                h6.remove();
                createBtn.remove();

            });
        }
    });



    inpt2.addEventListener("click", function() {
        if (inpt2.checked && inpt3.checked) {

            showImg.appendChild(img);
            h6.innerText = `Your name is  ${newCre.innerText}   On Duty 
            ${label2.innerText}  and at 03:00 ${label2.innerText} -To 10:00${label2.innerText}.Thank You`;
            div.appendChild(h6);
            showPopup.classList.add("open-popup");
            popBtn.appendChild(createBtn);
            displayPopup.classList.add("popup");
            popBtn.addEventListener("click", function() {
                input.value = "";
                // displayPopup.classList.remove("open-popup");
                img.remove();
                h6.remove();
                createBtn.remove();

            });

        }
    });

    inpt3.addEventListener("click", function() {
        if (inpt1.checked && inpt3.checked) {

            showImg.appendChild(img);
            h6.innerText = `Your name is  ${newCre.innerText}   On Duty 
            ${label3.innerText}   and at 09:00 ${label1.innerText} -To 02:00 ${label2.innerText} .Thank You`;
            div.appendChild(h6);
            showPopup.classList.add("open-popup");
            popBtn.appendChild(createBtn);
            displayPopup.classList.add("popup");
            popBtn.addEventListener("click", function() {

                input.value = "";
                // displayPopup.classList.remove("open-popup");
                img.remove();
                h6.remove();
                createBtn.remove();

            });
        }
    })

    inpt4.addEventListener("click", function() {
        if (inpt2.checked && inpt4.checked) {

            showImg.appendChild(img);
            h6.innerText = `Your name is  ${newCre.innerText}   On Duty 
            ${label4.innerText} and at 03:00  ${label2.innerText} -To 10:00  ${label2.innerText} .Thank You`;
            div.appendChild(h6);
            showPopup.classList.add("open-popup");
            popBtn.appendChild(createBtn);
            displayPopup.classList.add("popup");
            popBtn.addEventListener("click", function() {

                input.value = "";
                // displayPopup.classList.remove("open-popup");
                createBtn.remove();
                img.remove();
                h6.remove();
            });

        }
    });



    inpt1.addEventListener("click", function() {
        if (inpt1.checked == true) {
            inpt2.checked = false;
            inpt3.checked = false;
        }
    });

    inpt2.addEventListener("click", function() {
        if (inpt2.checked == true) {
            inpt1.checked = false;
            inpt4.checked = false;
        }
    });

    inpt3.addEventListener("click", function() {
        if (inpt3.checked == true) {
            inpt4.checked = false;
        }
    });

    inpt4.addEventListener("click", function() {
        if (inpt4.checked == true) {
            inpt3.checked = false;
        }
    });
    // create popup element

    // let staffDuty = document.getElementById("staffDuty");

    butt1.addEventListener("click", () => {

        if (input.value == "") {
            input.value = newCre.innerText;
            newCre.remove();
            label1.remove();
            label2.remove();
            inpt1.remove();
            inpt2.remove();
            butt1.remove();
            butt2.remove();
            label3.remove();
            label4.remove();
            inpt3.remove();
            inpt4.remove();
            // staffDuty.remove();
        }

    });

    butt2.addEventListener("click", () => {
        newCre.remove();
        label1.remove();
        label2.remove();
        inpt1.remove();
        inpt2.remove();
        butt1.remove();
        butt2.remove();
        label3.remove();
        label4.remove();
        inpt3.remove();
        inpt4.remove();
        // staffDuty.remove();

    });



});



// Ward-1

let box221 = document.getElementById("box221");
let box222 = document.getElementById("box222");
let box223 = document.getElementById("box223");
let box224 = document.getElementById("box224");
let box225 = document.getElementById("box225");
let box226 = document.getElementById("box226");

let bed1 = document.getElementById("bed1");
let bed2 = document.getElementById("bed2");
let bed3 = document.getElementById("bed3");
let bed4 = document.getElementById("bed4");
let bed5 = document.getElementById("bed5");
let bed6 = document.getElementById("bed6");


let ward1 = "Ward-1";


bed1.addEventListener("click", function() {
    if (bed1.checked == true) {
        box221.style.border = "1px solid green";
        alert(`${ward1} Bed-1 are register.`);
    } else {
        bed1.addEventListener("dblclick", function() {
            if (bed1.checked == true) {
                box221.style.border = "white";
                bed1.checked = false;
                alert(`${ward1} Bed-1 are empty.`);
            }
        });
    }


});


bed2.addEventListener("click", function() {
    if (bed2.checked == true) {
        box222.style.border = "1px solid green";
        alert(`${ward1} Bed-2 are register.`);
    } else {
        bed2.addEventListener("dblclick", function() {
            if (bed2.checked == true) {
                box222.style.border = "white";
                bed2.checked = false;
                alert(`${ward1} Bed-2 are empty.`);
            }
        });
    }
});


bed3.addEventListener("click", function() {
    if (bed3.checked == true) {
        box223.style.border = "1px solid green";
        alert(`${ward1} Bed-3 are register.`);
    } else {
        bed3.addEventListener("dblclick", function() {
            if (bed3.checked == true) {
                box223.style.border = "white";
                bed3.checked = false;
                alert(`${ward1} Bed-3 are empty.`);
            }
        });
    }
});


bed4.addEventListener("click", function() {
    if (bed4.checked == true) {
        box224.style.border = "1px solid green";
        alert(`${ward1} Bed-4 are register.`);
    } else {
        bed4.addEventListener("dblclick", function() {
            if (bed4.checked == true) {
                box224.style.border = "white";
                bed4.checked = false;
                alert(`${ward1} Bed-4 are empty.`);
            }
        });
    }
});


bed5.addEventListener("click", function() {
    if (bed5.checked == true) {
        box225.style.border = "1px solid green";
        alert(`${ward1} Bed-5 are register.`);
    } else {
        bed5.addEventListener("dblclick", function() {
            if (bed5.checked == true) {
                box225.style.border = "white";
                bed5.checked = false;
                alert(`${ward1} Bed-5 are empty.`);
            }
        });
    }
});

bed6.addEventListener("click", function() {
    if (bed6.checked == true) {
        box226.style.border = "1px solid green";
        alert(`${ward1} Bed-6 are register.`);
    } else {
        bed6.addEventListener("dblclick", function() {
            if (bed6.checked == true) {
                box226.style.border = "white";
                bed6.checked = false;
                alert(`${ward1} Bed-6 are empty.`);
            }
        });
    }
});









// Ward-2

var box331 = document.getElementById("box331");
var box332 = document.getElementById("box332");
var box333 = document.getElementById("box333");
var box334 = document.getElementById("box334");
var box335 = document.getElementById("box335");
var box336 = document.getElementById("box336");
var box337 = document.getElementById("box337");

var bed11 = document.getElementById("bed11");
var bed12 = document.getElementById("bed12");
var bed13 = document.getElementById("bed13");
var bed14 = document.getElementById("bed14");
var bed15 = document.getElementById("bed15");
var bed16 = document.getElementById("bed16");
var bed17 = document.getElementById("bed17");

let ward2 = "Ward-2";

bed11.addEventListener("click", function() {
    if (bed11.checked == true) {
        box331.style.border = "1px solid green";
        alert(`${ward2} Bed-11 are register.`)
    } else {
        bed11.addEventListener("dblclick", function() {
            if (bed11.checked == true) {
                box331.style.border = "white";
                bed11.checked = false;
                alert(`${ward2} Bed-11 are empty.`);
            }
        });
    }
});

bed12.addEventListener("click", function() {
    if (bed12.checked == true) {
        box332.style.border = "1px solid green";
        alert(`${ward2} Bed-12 are register.`)
    } else {
        bed12.addEventListener("dblclick", function() {
            if (bed12.checked == true) {
                box332.style.border = "white";
                bed12.checked = false;
                alert(`${ward2} Bed-12 are empty.`);
            }
        });
    }
});

bed13.addEventListener("click", function() {
    if (bed13.checked == true) {
        box333.style.border = "1px solid green";
        alert(`${ward2} Bed-13 are register.`)
    } else {
        bed13.addEventListener("dblclick", function() {
            if (bed13.checked == true) {
                box333.style.border = "white";
                bed13.checked = false;
                alert(`${ward2} Bed-13 are empty.`);
            }
        });
    }
});

bed14.addEventListener("click", function() {
    if (bed14.checked == true) {
        box334.style.border = "1px solid green";
        alert(`${ward2} Bed-14 are register.`)
    } else {
        bed14.addEventListener("dblclick", function() {
            if (bed14.checked == true) {
                box334.style.border = "white";
                bed14.checked = false;
                alert(`${ward2} Bed-14 are empty.`);
            }
        });
    }
});


bed15.addEventListener("click", function() {
    if (bed15.checked == true) {
        box335.style.border = "1px solid green";
        alert(`${ward2} Bed-15 are register.`)
    } else {
        bed15.addEventListener("dblclick", function() {
            if (bed15.checked == true) {
                box335.style.border = "white";
                bed15.checked = false;
                alert(`${ward2} Bed-15 are empty.`);
            }
        });
    }
});

bed16.addEventListener("click", function() {
    if (bed16.checked == true) {
        box336.style.border = "1px solid green";
        alert(`${ward2} Bed-16 are register.`)
    } else {


        bed16.addEventListener("dblclick", function() {
            if (bed16.checked == true) {
                box336.style.border = "white";
                bed16.checked = false;
                alert(`${ward2} Bed-16 are empty.`);
            }
        });
    }
});

bed17.addEventListener("click", function() {
    if (bed17.checked == true) {
        box337.style.border = "1px solid green";
        alert(`${ward2} Bed-17 are register.`)
    } else {

        bed17.addEventListener("dblclick", function() {
            if (bed17.checked == true) {
                box337.style.border = "white";
                bed17.checked = false;
                alert(`${ward2} Bed-17 are empty.`);
            }

        });
    }
});

setInterval(function() {
    submit.innerText = "Submit";
    submit.style.transition = "0.5s linear";

    //alert("hello");
}, 2000);
setInterval(function() {
    submit.innerText = "Register";
    submit.style.transition = "0.5s linear";
}, 6000);