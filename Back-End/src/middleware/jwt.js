const jwt = require('jsonwebtoken');

//Verify jwt token
function VerifyToken(req, res, next){
    try{
        const token=req.header('Authorization')
        if(!token){
            return res.status(401).json({message:"Auth token required to authenticate"});;
        }
        const decode=jwt.verify(token, process.env.JWT_SECRET_KEY)
        req.userId=decode.userId
        req.userRole=decode.role
        next();
    }catch(e){
        return res.status(401).json({message:'Invalid/expired token, login required'})
    }
}



function AuthorizaAdmin(req, res, next){
    if(req.userRole !=="Admin"){
        return res.status(403).json({message:'Authenticated but not allowed to access the resource.'});
    }
    next()
}


//genereate jwt token 
function generateToken(user) {
  try {
    const secret_key = process.env.JWT_SECRET_KEY;
    if (!secret_key) {
      throw new Error("JWT secret key is not defined in environment variables.");
    }

    const payload = {
      userId: user._id,
      role: user.role,
    };

    const token = jwt.sign(payload, secret_key, { expiresIn: '1h' });
    return token;
  } catch (e) {
    throw new Error("Error while generating token");
  }
}

module.exports = { generateToken,VerifyToken, AuthorizaAdmin };
