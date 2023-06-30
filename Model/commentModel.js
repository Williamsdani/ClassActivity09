const mongoose = require('mongoose');

const foodSchema =new mongoose.Schema({
    refMax:{
        type: Object
    },
    citizenMeal:{
        type: Object
    },
    chickWizz:{
        type: Object
    },
    link: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant'
    }
})


const foodModel = mongoose.model('chops', foodSchema);

module.exports=foodModel
































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

// const restaurantShema = new mongoose.Schema({
//     branch: {
//         type: String,
//         required: [true, "Branch is Required"]
//     },
//     address: {
//         type: String,
//         required: [true, "Address is Required"]
//     },
//     refMax: [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "chops"
//     }],
//     citizenMeal: [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "chops"
//     }],
//     chickWizz: [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "chops"
//     }]
// }, {timestamps: true})

// const resModel = mongoose.model('Restaurant', restaurantShema)

// module.exports=resModel
























// const { default: mongoose } = require("mongoose");

// const commentSchema=new mongoose.Schema({
//     refuel:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"meal"
//     },
//     citizenMeal:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"meal"
//     },
//     chickenWizz:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"meal"
//     }

// },{timestamps:true})

// const meal=mongoose.model("Resturant",commentSchema)

// module.exports=meal


// const mongoose = require('mongoose');

// const restaurantShema = new mongoose.Schema({
//     branch: {
//         type: String,
//         required: [true, "Branch is Required"]
//     },
//     address: {
//         type: String,
//         required: [true, "Address is Required"]
//     },
//     refMax: [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "chops"
//     }],
//     citizenMeal: [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "chops"
//     }],
//     chickWizz: [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "chops"
//     }]
// }, {timestamps: true})

// const resModel = mongoose.model('Restaurant', restaurantShema)

// module.exports = resModel