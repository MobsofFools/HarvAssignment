const fs = require("fs");


    if (typeof result !== 'undefined') {
        res.write(`Thank you, ${ result.pop().fname }!`);
    }
    else
    {
        res.write("Thank you!");
    }