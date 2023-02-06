const express = require("express")
const router = express.Router()
const {Product} = require("../models")
const { Op } = require("sequelize");

router.get("/", async (req,res)=>{
  let priceFrom = req.query.priceFrom || 0;
  let priceTo = req.query.priceTo || 1000000000;
  // let type = req.query.type;
  const allproducts = await Product.findAll({where: {
    price : {
      [Op.between]:[priceFrom,priceTo]
    },
    

  }});
  res.json(allproducts);
})
// router.post


router.post("/", async (req, res) => {
  const product =req.body
  await Product.create(product)
  res.json(product)

});


module.exports = router