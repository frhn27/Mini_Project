const express = require('express');
var bodyParser = require('body-parser');
const dotenv=require('dotenv');

dotenv.config()


const PORT =process.env.PORT || 5000;


const routeUser= require('./routes/route.user.js')
const routeProduct=require('./routes/route.product.js')

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(express.json())

//Route Users
app.get('/users', routeUser);
app.get('/users/:id', routeUser);
app.post('/users', routeUser);
app.put('/users/:id', routeUser);
app.delete('/users/:id', routeUser);

//Route Product
app.get('/product', routeProduct);
app.get('/product/detail/:id', routeProduct);
app.post('/product', routeProduct);
app.put('/product/:id', routeProduct);
app.delete('/product/:id', routeProduct);

app.listen(PORT,()=>{
    console.log(`Server running at ${PORT}`)
})