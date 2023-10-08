const express = require('express');
const StoreRouter = express.Router();
const products = require('../data/product.json');


StoreRouter.route("/:id").get((req, res) => {    
    const id = req.params.id;
    res.render("product",{
        product: products[id]
    })
})

StoreRouter.route("/").get((req, res) => {    
    res.render("products", {products} );
});

module.exports = StoreRouter