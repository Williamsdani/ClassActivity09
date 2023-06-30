const mongoose = require('mongoose');

 const restaurantShema = new mongoose.Schema({
    branch: {
        type: String,
        required: [true, "Branch is Required"]
    },
    address: {
        type: String,
        required: [true, "Address is Required"]
    },
    refMax: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "chops"
    }],
    citizenMeal: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "chops"
    }],
    chickWizz: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "chops"
    }]
}, {timestamps: true})

const resModel = mongoose.model('Restaurant', restaurantShema)

module.exports=resModel























// const mongoose  = require("mongoose")
// const ResturantSchema= mongoose.Schema({
//     branch:{
//         type:String,required:[true,"please fill your branch"],
//         unique:true
//     },
//     citizenMeal:{
//         type:Object,
//     },
  
//     refuel:{
//         type:Object
//     },
//     chickWizz:{
//         type:Object
//     },
   
// },{timestamps:true})



// const resturantModel = mongoose.model("resturantmodel",ResturantSchema)

// module.exports =resturantModel
// const mongoose = require('mongoose');
