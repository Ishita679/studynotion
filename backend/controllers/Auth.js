const User = require("../models/User");
const OTP = require("../models/OTP");
const OTPGenerator = require("otp-generator");
// send OTP 
exports.sendOTP = async(req,res) => {
    try{
        const{email} = req.body;
    const checkUserPresent = await User.findOne({email});
    if(checkUserPresent){
        return res.status(401).json({
            success:false,
            message:"User already registered"
            });
    }
    //generate otp
    var otp = OTPGenerator.generate(6,{
        upperCaseAlphabets:true,
        specialChars:false,
    });
    console.log("otp generated");
    //check uniqueness
    const result = await OTP.findOne({otp:otp});
    while(result){
        otp = OTPGenerator.generate(6,{
        upperCaseAlphabets:true,
        specialChars:false,
    });
    result = await OTP.findOne({otp:otp});
}  
const otpPayLoad = {email, otp};
console.log(otpBody);
res.status(200).json({
    success:true,
    message:"Otp sent successfully",
    otp,
})

}
    catch(err){
        console.log(err.message);
        return res.status(500).json({
            success:false,
            message:""
        });
        
    }
}

//signup
exports.singup = async (req,res) => {
//data fetch from request body
//validate
//2 password match
// check user already exists or not
//find most recent OTP stored for the user
//validate OTP
//hash password
//create entry in db
//return res
}