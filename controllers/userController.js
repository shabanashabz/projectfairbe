
exports.register = (req,res)=>{
    console.log("Inside  user register controller");
    res.status(200).json('registration request recieved')  
}
exports.getUserDetails = (req,res)=>{
res.status(200).json('inside get user controller')
}