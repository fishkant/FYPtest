const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema({
    gender:{type: Array},
    age:{type: Array},
    timers:{type: Array},
    selections: {type: Array},
    //title: {type: String},

},
{timestamps: true}
);

const Candidate = mongoose.model("Candidate", candidateSchema)

exports.Candidate= Candidate;