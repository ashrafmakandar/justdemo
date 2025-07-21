const jwt= require("jsonwebtoken");

const autorize= async (req,res,next) => {
    const header= req.headers.authorization;

    const decode= header.split(" ")[1];


    const userr=  jwt.verify(decode,process.env.JWT_TOKEN);
    req.user= userr;
    next();



}

module.exports= autorize;