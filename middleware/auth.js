const jwt  = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const secret =  process.env.secret;

const authMiddleware = (req,res,next)=>{

    const authHeader = req.headers.authorization;

    if(!authHeader){
              console.log("no header");
        return res.status(401).send("Access denied.No header provided");
  
    }

    const token = authHeader.split(" ")[1];

    if(!token){
        return res.status(401).send("error in bearer token ");
    }
    try{

        const decoded = jwt.verify(token,secret)
        req.user = {
            id:decoded.id
        }
        next();
    }catch(err){
res.status(400).send(err.message);
    }


}
module.exports= authMiddleware;