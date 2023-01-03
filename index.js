const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const PORT = 3000

const routeUser= require('./app/routes/route.user.js')
const routeProduct=require('./app/routes/route.product.js')
const routeAuth=require('./app/routes/route.authenticte.js')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(express.json())

//route Authentication
app.use(routeAuth)

//Route Users
app.use(routeUser)

 //Route Product
app.use(routeProduct)

app.listen(PORT,()=>{
    console.log(`Server running at ${PORT}`)
})