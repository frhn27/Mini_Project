const model= require('../models/index.js')
const controller = {}


controller.findAll=async (req, res) => {
        try {
            let product= await model.Product.findAll()
            if (product.length > 0 ) {
                res.status(200).json({
                    message: 'Daftar product',
                    data: product
                })
            }else {
                res.status(200).json({
                    message:'Product Tidak Ditemukan',
                    data:[]
                })
            }
        } catch (error) {
            res.status(500).json({
                message : error.message
            })
        }
    }  
           
 controller.findById= async (req, res) =>{
    try {
        let product=await model.Product.findAll({where: {id: req.params.id}})
        if(product.length > 0  ) {
            res.status(404).json({
                message:'Daftar Product',
                data: product
            })
        }else {
            res.status(404).json({
                message:'Daftar Product Tidak di Temukan',
                data :[]
            })
        }
    }catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
 }

controller.post=async (req, res)=>{
    try { 
        let product = await model.Product.create(req.body)
        res.status(201).json({
          message:'Data Berhasil di tambah',
          data:product
        })
      } catch(error){
          res.status(404).json({
              message:error.message
          })
     }
 }
        
controller.put= async(req, res)=> {
    try {
        let product= await model.Product.update({
            name:req.body.name,
            quantity:req.body.quantity,
            price: req.body.price
            },{where:{
            id:req.params.id}
            })
        res.status(200).json({
            message:'Berhasil ubah data Product',
            data:product
            })
        } catch (err) {
            res.status(404).json({
                message:err.message
                })
            }
    }

controller.delete=async(req, res)=> {
    try{
        let product=await model.Users.destroy({where:{id:req.params.id}})
        res.status(200).json({
            message : 'product deleted successfully'
        })
     } catch (error){
        res.status(404).json({
            message:err.message
            })
        }
}

module.exports=controller