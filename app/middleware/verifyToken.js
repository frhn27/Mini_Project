const jwt=require('jsonwebtoken')

//jika user tidak login kita akan mem verifikasi token nya 

async function isAuthenticate(req, res, next) {     
    if (!req.headers.authorization) {
      return res.status(401).json({message: 'Unauthorized'})
    }
  
    const splitToken = req.headers.authorization.split(' ')
    if (splitToken.length !== 2 || splitToken[0] !== 'Bearer') {
      return res.status(400).json({message: 'Wrong authorization format'})
    }
  
    jwt.verify(splitToken[1], 'secret', { algorithms: ['HS256'] }, async (err, payload) => {
      if (err && err.name === 'TokenExpiredError') {
        return res.status(401).json({message: 'Expired Token'})
      } else if (err) {
        return res.status(401).json({message: 'Invalid Token'})
      } else {
        next()
      }
    })
  }

  module.exports={isAuthenticate}







// const verifyToken  =(req, res, next) =>{
//     const authHeader=req.headers['authorization']
//     const token=authHeader && authHeader.split(' ')[1]

//     if (token == null) return res.sendStatus(401)
//     jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,decode)=>{
//         if (err) return res.sendStatus(403)
//         req.email=decode.email
//         next()
//     })
// }

// module.exports={verifyToken}