import { delproduct, getAll, getproduct, postproduct } from "../controller/product.js"
import express from 'express'
const router=express.Router()

router.get('/',getAll)
router.get('/:id',getproduct)
router.post('/',postproduct)
router.delete('/:id',delproduct)

export default router