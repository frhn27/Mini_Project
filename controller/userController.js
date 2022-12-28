const model= require('../models/index.js')
const controller = {}


controller.findAll= async (req, res) => {
        try{
        let user= await model.Users.findAll()
            if(user.length > 0 ) {
                res.status(200).json({
                        message:'Daftar Users',
                        data:user
                        })
                } else{
                    res.status(200).json({
                        message:'Tidak ada User',
                        data:[] 
                        })
                }
        } catch (error) {
                res.status(404).json({
                    message:error.message
                })
        }
    }
    
    
controller.findById=async (req, res) => {
    try{
    let user=await model.Users.findAll({where: {id: req.params.id}})
                if(user.length > 0 ) {
                    res.status(200).json({
                        message:'Daftar User',
                        data: user
                        })
                    } else {
                        res.status(200).json({
                            message:'User Tidak di temukan',
                            data:[]
                        })
                    } 
        } catch{
            res.status(404).json({
                message:error.message
            })
        }
    }
        
controller.addUsers= async(req, res)=>{
       try{
          let user = await model.Users.create(req.body)
          res.status(201).json({
            message:'Data Berhasil di tambah',
            data:user
          })
        } catch(error){
            res.status(404).json({
                message:error.message
            })
       }
    }
controller.updateUser=async(req, res,)=> {
    try {
        let user= await model.Users.update({
            name:req.body.name,
            email:req.body.email,
            password: req.body.password,
            address: req.body.address,
            phone_number:req.body.phone_number
                },{where:{
            id:req.params.id}
            })
        res.status(200).json({
            message:'Berhasil ubah data user',
            data:user
            })
        } catch (err) {
            res.status(404).json({
                message:err.message
                })
            }
    }

    controller.deleteUsers=async (req, res) => {
    try{
        
        let user=await model.Users.destroy({where:{id:req.params.id}})
        res.status(200).json({
            message : 'User deleted successfully'
        })
     } catch (error){
        res.status(404).json({
            message:err.message
            })
        }
    }



module.exports=controller