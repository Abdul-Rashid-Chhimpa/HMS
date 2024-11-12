const mongooes = require("mongoose");


const LoginSchema = new mongooes.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: Number,
        required: true,
        unique: true
    }
});
const collection = mongooes.model("users", LoginSchema);
module.exports = collection;