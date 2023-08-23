const mongoose = require("mongoose");
const SessionSchema = require("./sessionModel");

const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Name required"],
    },
    lastName: {
        type: String,
        required: [true, "Name required"],
    },
    password: {
        type: String,
        required: [true, "Password required"],
    },
    email: {
        type: String,
        required: [true, "Password required"],
    },
    sessions: {
        type: [SessionSchema],
        required: [false],
    },
});

module.exports = mongoose.model("UserSchema", UserSchema, "users");
