const express = require('express'),
    app = express();
    bodyParser = require('body-parser')
// require('express-async-errors')

    const db = require('./db'),
        productRoutes = require('./controllers/product.controller')

//
app.use(bodyParser.json())
app.use('/api/products',productRoutes)
app.use((err,req,res,next)=>{
    console.log(err)
    res.status(err.status || 500).send('Something went  wrong!');
})
db.query("SELECT 1")
    .then(()=>{
        console.log('db connection succeeded.')
        const port = 3001
        app.listen(port,
            ()=>console.log(`Server started on port ${port}`))
    })
    .catch(err=>console.log('db connection failed.\n' + err)); 
    
    

