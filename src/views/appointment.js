const mongooes = require("mongoose");
const { stringify } = require("querystring");
const appointment = new mongooes.Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    age: {
        type: String
    },
    address: {
        type: String
    },
    date: {
        type: String
    }

})
const appointments = mongooes.model("appointments", appointment);
module.exports = appointments;