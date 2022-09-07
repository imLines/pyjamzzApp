const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = process.env.PORT || "8000";


app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.status(200).send("Initialize");
});

app.listen(port, ()=>{
    console.log(`Listening to requests on http://localhost:${port}`)
});


//Models
require('./models/customer.model');
require('./models/shoppingCard.model');
require('./models/payment.model');
require('./models/order.model');
require('./models/product.model');
require('./models/stock.model');
require('./models/delivery.model');
require('./models/relations.model');
require('./models/wishlist.model');
require('./models/imagesProduct.model');
require('./models/orderDetails.model');

//Routes
require('./routes/customer.routes')(app);
require('./routes/product.routes')(app);


const {sequelize} = require('./models/model');
sequelize.sync({force: false, alter: false})
.then(()=>{
    console.log('Success Sync DB Pyjamzz.');
})
.catch((err)=>{
    console.log("Failed to sync with DB: "+err);
});