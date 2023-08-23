import mongoose from "mongoose";

const SessionSchema = new mongoose.Schema({
    sensors: {
        type: [String],
        required: [true],
    },
    duration: {
        type: String,
        required: [true],
    },
    experiment: {
        type: String,
        required: [true],
    },
    files: {
        type: [String],
        required: [true],
    },
});

module.exports = SessionSchema;
