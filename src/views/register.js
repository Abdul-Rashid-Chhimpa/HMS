const mongooes = require("mongoose");
const register = new mongooes.Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    password: {
        type: Number
    }
})
const regi = mongooes.model("regi", register);
module.exports = regi;