const express = require('express')
const router = express.Router()
const {postproduct,getproducts} = require('../controllers/product.controller')
const upload = require('../middleware/upload.file')
router.post('/postproduct',upload, postproduct)
 router.get('/getproducts', getproducts)

module.exports = router