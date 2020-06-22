const mongoose = require("mongoose");
const url = "mongodb://localhost/assignment";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true});

var counterSchema = mongoose.Schema(
    {
        _id: {type: String, required: true},
        sequence_value: { type: Number, default:1 }
    }
);

module.exports.Counter = mongoose.model('Counter', counterSchema);
