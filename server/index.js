import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import route from './routes/product.js'
const app=express()

app.use(express.json())

app.use(cors())
app.use('/product',route)
mongoose.connect('mongodb+srv://akif:akif123@atlascluster.8zpslq0.mongodb.net')
app.listen(4000,()=>{
    console.log('Server Connected');
})