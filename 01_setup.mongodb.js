use("ecommerce");

db.dropDatabase();
db.products.insertMany([
{
    name: "Wireless Mouse",
    price: 799,

    category: "Electronics",
       stock: 120,
    ratings: 4.5,
    tags: ["computer", "accessory", "wireless"],
    createdAt: new Date()
},
{
    name: "Mechincal Keyboard",
    price: 2499,
    category: "Electronics",
    stock: 80,
    ratings: 4.7,
    tags: ["computer", "accessory", "mechanical"],
    createdAt: new Date()
},
{
    name : "Gaming laptop",
    price: 59999,
    category: "computers",
    stock: 30,
    ratings: 4.6,
    tags: ["gaming", "laptop"],
    createdAt: new Date()
}

])


db.contacts.insertMany([
    {name: "Alice", message:"i loved your website", phone: "987653647", createdAt: new Date()},
    {name: "Bob", message:"Do you have any discounts available?", phone: "987653647", createdAt: new Date()},
    {name: "Charlie", message:"I want to cancel my order ", phone: "987653647", createdAt: new Date()},
])

db.orders.insertMany([
    {
        orderId: "ORD001",
        customerName: "Alice",
        products: [
            {name: "Wireless Mouse", quantity: 1, price: 799},
            {name: "Mechincal Keyboard", quantity: 1, price: 2499}
        ],
        total: 3298,
        status: "Shipped",
        createdAt: new Date()
    },
    {
        orderId: "ORD002",
        customerName: "Bob",
        products: [
            {name: "Gaming laptop", quantity: 1, price: 59999}
        ],
        total: 59999,
        status: "pending",
        createdAt: new Date()
    }
])