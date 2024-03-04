const express = require('express'),
    router = express.Router()


const service = require('../services/product.service')


//http://localhost:3000/api/products/
router.get('/', async (req, res) => {
    const products = await service.getAllEmployees()
    res.send(products)
})


router.get('/:id', async (req, res) => {
    const product = await service.getAllEmployeeById(req.params.id)
    if (product.length == 0)
        res.status(404).json('no record found' + req.params.id)
    else
        res.send(product)
})


router.delete('/:id', async (req, res) => {
    const product = await service.DeleteEmployeeById(req.params.id)
    if (product.length == 0)
        res.status(404).json('no record found' + req.params.id)
    else
        res.send('Deleted successfully' + product)
})


router.post('/', async (req, res) => {
    const { product_name, product_price } = req.body;

    try {
        const result = await service.insertProduct({ product_name, product_price });

        res.status(201).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.put('/:id', async (req, res) => {
    const { product_name, product_price } = req.body;

    try {
        const result = await service.updateProductById(req.params.id, { product_name, product_price });

        if (result.length === 0) {
            res.status(404).json(`No record found with id ${req.params.id}`);
        } else {
            res.status(200).json(result);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


module.exports = router; 