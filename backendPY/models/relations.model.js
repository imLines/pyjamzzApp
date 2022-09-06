const Customer = require('./customer.model');
const ShoppingCard = require('./shoppingCard.model');
const Payment = require('./payment.model');
const Order = require('./payment.model');
const Delivery = require('./delivery.model');
const Product = require('./product.model');
const Stock = require('./stock.model');
const WishList = require('./wishlist.model');
const ImagesProduct = require('./imagesProduct.model');

Customer.hasOne(ShoppingCard);
Payment.hasOne(Customer);
Customer.hasMany(Order);
Payment.hasOne(Order);
Payment.belongsTo(Order);
Delivery.hasMany(Order); 
Order.hasMany(Product);
Product.hasMany(Stock);
Customer.hasMany(WishList);
WishList.hasOne(Product);

Product.hasMany(ImagesProduct);


