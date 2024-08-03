const express = require("express")
const router = express.Router()
const {getQuote,postQuote} = require("../controllers/quote.controller")

router.get('/getQuote',getQuote)
router.post('/postQuote',postQuote)

module.exports = router;