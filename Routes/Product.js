const express = require("express")
const router = express.Router()
const {Product} = require("../models")

router.get("/", async (req,res)=>{

    const allproducts = await Product.findAll()
    res.json(allproducts);
})
// router.post


router.post("/", async (req, res) => {
  const product =req.body
  await Product.create(product)
  res.json(product)

});


module.exports = router