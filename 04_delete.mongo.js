use("ecommerce");

db.products.deleteMany({ price: { $lt: 100 } });

db.contacts.deleteOne({name : "John Doe"});