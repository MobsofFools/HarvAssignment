const mycustomer = require("../models/Customer");

exports.addCustomer = (req,res)=>{
    console.log(JSON.stringify(req.body));

    const customer = new mycustomer(req.body);

    customer.save((err)=>{
        if (err) throw err;

        res.redirect("./contact");
    });
};

exports.showCustomers = (req, res)=>{

    mycustomer.Customer.find(
        {},
        function(err, result){
            res.render("showcustomers", { customers: result});
        }
    );

};

exports.findLastInquiry = (req, res) => {
    mycustomer.Customer.find()
    .sort ({date: -1})
    .limit(1)
    .exec((err, result)=>{
        if (err) throw error;
        res.render('thanks', {fname: result[0].fname})
    });
};