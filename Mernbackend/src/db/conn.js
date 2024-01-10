const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://21eg105h15:PupX8MgTUpgTnFPC@cluster0.7x2rkdv.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log(`connection successful`);
}).catch((e) => {
    console.log(`no connection${e}`);
});


  
  const User = require("./model/user");
  module.exports = User;



