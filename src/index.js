const express = require('express');
const bcrypt = require('bcrypt');
const path = require('path');

// mongoose import
const mongooes = require("mongoose");
// const mongodb = require("mongodb");
const regi = require("./views/register");
const appoint = require("./views/appointment");

const connect = mongooes.connect("mongodb://localhost:27017/UserData");
connect.then(() => {
    console.log("Database is connected");
}).catch(() => {
    console.log("Database is not Conected");
});


const collection = require("./mongodb");
const signup = require("./views/JS/signup");
const { register } = require('module');
const app = express();


const routeFile = path.join(__dirname, "views");
// console.log(routeFile);

// const User = require("./mongodb");


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//use EJS as the view engine
app.set('view engine', 'ejs');


// static file / link css file
app.use(express.static(routeFile));
app.use(express.static("public"));



app.get("/", (req, res) => {
    res.render(routeFile);
});
app.get("/profile", (req, res) => {
    res.render("profile");
})


app.get("/login", (req, res) => {
    res.render("login");

});

app.get("/signup", (req, res) => {
    res.render("signup");
});

app.get("/register", (req, res) => {
    res.render("register");
})
app.get("/appointment", (req, res) => {
    res.render("appointment");
})

app.get("/facilities", (req, res) => {
    res.render("facilities");
})
app.get("/status", (req, res) => {
    res.render("status");
})
app.get("/DrStaff", (req, res) => {
    res.render("DrStaff");
})

app.get("/hy", async(req, res) => {

    const items = await collection.find(); // Fetch data from MongoDB
    let html = '<h1>Data from MongoDB</h1><ul>';

    items.forEach((item) => {
        html += `<li>${item.username}: ${item.password}</li> <br>`;
    });

    html += '</ul>';
    res.send(html);
})

app.post("/login", async(req, res) => {
    try {

        const data = {
            username: req.body.username,
            password: req.body.password
        };
        const Signup = {
            username: req.body.username,
            password: req.body.password
        };

        const existInguser = await collection.findOne({ username: data.username, password: data.password });
        if (existInguser) {
            res.redirect("http://localhost:5000/profile");
        } else {
            console.log("user is not exits.")
            res.redirect("http://localhost:5000/signup");
            const userdata = await collection.insertMany(Signup);
            // const SignupData = await signup.insertMany(Signup);
        }
    } catch (err) {
        console.log("invalid", err);
    }
});

app.post("/signup", async(req, res) => {
    const Signup = {
        username: req.body.username,
        password: req.body.password
    };

    const newUser = await signup.findOne({ username: Signup.username, password: Signup.password });
    if (newUser) {
        // alert("User is register successfully.")
        res.redirect("http://localhost:5000/login");
    } else {
        const SignupData = await signup.insertMany(Signup);
        // console.log(SignupData);
    }

});


app.post("/register", async(req, res) => {
    // console.log(req.body)
    const dataRegi = new regi(req.body);
    await dataRegi.save();

    res.send("register");

});

app.post("/appointment", async(req, res) => {
    // console.log(req.body);
    const appoin = new appoint(req.body);
    await appoin.save();
})


const port = 5000;
app.listen(port, () => {
    console.log(`server is runing on port :${port} `);
});