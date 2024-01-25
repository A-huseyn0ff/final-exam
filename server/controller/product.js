import {pro} from '../models/product.js'
export const getAll=async(req,res)=>{
    const data=await pro.find({})
    res.send(data)
}

export const getproduct=async(req,res)=>{
    const id=req.params.id    
    const data=await pro.findById(id)
    res.send(data)
}

export const delproduct=async(req,res)=>{
    const id=req.params.id    
    const data=await pro.findByIdAndDelete(id)
    res.send(data)
}
export const postproduct=async(req,res)=>{
    const id=req.params.id    
    const data=await new pro ({
        image:req.body.image,
        name:req.body.name,
        title:req.body.title,
        price:req.body.price
    })
    const save=await data.save()
    res.send(save)
}