const mongoose = require("mongoose");

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
        required: [true, "Email required"],
    },
    isAdmin: {
        type: Boolean,
        required: [false, "Password required"],
    },
});

module.exports = mongoose.model("UserSchema", UserSchema, "users");
