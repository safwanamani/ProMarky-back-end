const Product = require('../models/product');

//Create Product
exports.Create = (req, res) => {
    Product.findOne({ proId: req.body.proId }, (err, product) => {
        if (product) return res.status(400).json("Product Id is already used");

        const _product = new Product(req.body);

        _product.save()
            .then(data => {
                res.status(200).json(data);
            }).catch(err => {
                res.status(400).json(err);
            })
    })
}

//View all Products
exports.ViewAllProducts = (req, res) => {
    Product.find((err, products) => {
        if (products) {
            res.status(200).json(products);
        } else {
            res.status(400).json(err);
        }
    })
}

//View Product
exports.ViewProduct = (req, res) => {
    Product.findById(req.params.id, (err, product) => {
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(400).json(err);
        }
    })
}

//Edit Product 
exports.EditProduct = (req, res) => {
    Product.findById(req.params.id, (err, product) => {
        if (product) {
            product.proId = req.body.proId
            product.productName = req.body.productName
            product.quantity = req.body.quantity
            product.date = req.body.date
            product.status = req.body.status

            product.save()
                .then(data => {
                    res.status(200).json(data);
                }).catch(err => {
                    res.status(400).json(err);
                })
        }
    })
}

//Delete Product
exports.DeleteProduct = (req, res) => {
    Product.findByIdAndDelete(req.params.id, (err, product) => {
        if (product) {
            res.status(200).json("Product Deleted");
        } else {
            res.status(400).json(err);
        }
    })
}