import mongoose from "mongoose";

const SessionSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: [true],
    },
    name: {
        type: String,
        required: [true],
    },
    sensorName: {
        type: String,
        required: [true],
    },
    sensorId: {
        type: String,
        required: [true],
    },
    sensorFilePath: {
        type: String,
        required: [true],
    },
    duration: {
        type: String,
        required: [true],
    },
    experimentAlias: {
        type: String,
        required: [true],
    },
    experimentId: {
        type: String,
        required: [true],
    },
    experimentFilePath: {
        type: String,
        required: [true],
    },
});

module.exports = mongoose.model("SessionSchema", SessionSchema, "sessions");
