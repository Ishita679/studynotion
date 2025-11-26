const mongoose = require("mongoose");
const profileSchema = mongoose.Schema({
gender:{
    type:String
},
dateOfBirth:{
    tyoe:String
},
about:{
    type:String,
    trim:true
},
contactNumber:{
    type:Number,
    trim:true
},
})
module.exports = mongoose.model("Profile",profileSchema);