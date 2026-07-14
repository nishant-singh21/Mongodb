use("ecommerce");

db.products.find({ name: "Wireless Mouse" })
 db.products.find({ category: "Electronics" })


 db.products.find({ price: { $gt: 1000 } })

db.products.find({ price: { $lt: 500 } })

db.products.find({ price: { $gte: 500, $lte: 1000 } })  

db.products.find({ $or: [{ category: "Electronics" }, { price: { $lt: 500 } }] })