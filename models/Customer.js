const mongoose = require("mongoose");
const myCounter = require("../models/Counters");

const customerSchema = new mongoose.Schema({

    CustId: {
        type: Number,
        required: false,
    },
    fname: {
        type: String,
        required: false,
        trim: true, 
    },
    lname : {
        type: String,
        required: false,
        trim: true,
    },
    email : {
        type: String,
        required: false,
        trim: true,
    },
    inqtext : {
        type: String,
        required: false,
        trim: true,
    }, 
});
  /* 
customerSchema.pre('save', function(next){

    var doc = this;

    myCounter.Counter.findOneAndUpdate(

        { "_id": "CustId" },

        { $inc : { sequence_value : 1 } },

        { new : true, useFindAndModify: false },

        function(err, seq){
            if(err) throw err;

            doc.CustId = seq.sequence_value;
			next();
        }
    );
});

*/
module.exports.Customer = mongoose.model ('Customer', customerSchema);