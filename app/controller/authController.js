const model=require('../../models/index');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

async function login(req, res) {
    try {
        const user= await model.Users.findOne({where:{email:req.body.email}})
        if (user.length < 1) {
            return res.send('User not found')
        }

        const password = req.body.password
        const match = await bcrypt.compare(password,user.password)
        if(!match) {
            return res.status(400).json({message:'Password Salah'})
        }
        const payload = {
            id:user.id,
            name:user.name,
            email:user.email
        }

        const token=jwt.sign(payload,"secret")

        return res.json({
            message: 'login berhasil',
            access_token:token})
    } catch (error) {
           res.status(404).json({message:error.message}) 
    }
}


module.exports={login}






// controller.getUsers=async (req, res) =>{
//     try {
//             let user= await model.Users.findAll()
//             if(user.length > 0 ) {
//                 res.status(200).json({
//                         message:'Daftar Users',
//                         data:user
//                         })
//                 } else{
//                     res.status(200).json({
//                         message:'Tidak ada User',
//                         data:[] 
//                         })
//                 }

//     }catch (error) {
//         res.status(404).json({
//             message:error.message
//         })

//     }
// }

// controller.register = async (req, res) => {
//             const {name , email , password,confPassword} = req.body
//             if(password !== confPassword) return res.status(200).json({message:'password mismatch'})
//             const salt = await bcrypt.genSalt()
//             const hashPassword = await bcrypt.hash(password, salt)
//     try {
//             await model.Users.create({
//                 name :name,
//                 email :email,
//                 password :password
//             })
//             res.json({message:'pendaftaran berhasil'})

//     }catch(error){      
//         res.status(200).json({
//         message:'Tidak ada User',
//         data:[] 
//         })
//     }
// }
