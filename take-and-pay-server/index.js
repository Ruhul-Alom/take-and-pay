require('dotenv').config();
const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`App is running on port: ${port}`);
});

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.vlvew.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // await client.connect();
        const database = client.db("take-and-pay");
        const products = database.collection("products");
        const banner = database.collection("banner");
        const cart = database.collection("cart");
        const blog = database.collection("blog");
        const contact = database.collection("contact");

        app.get('/', (req, res) => {
            res.send("You are getting information ");
        });

        app.get('/products', async (req, res) => {
            const product = await products.find({}).toArray();
            res.send(product);
        });

        app.get('/blogs', async (req, res) => {
            const blogs = await blog.find({}).toArray();
            res.send(blogs);
        });

        app.get('/slider', async (req, res) => {
            const slider = await banner.find({}).toArray();
            res.send(slider);
        });

        app.get('/carts', async (req, res) => {
            const carts = await cart.find({}).toArray();
            res.send(carts);
        });

        app.get('/carts/:email', async (req, res) => {
            const email = req.params.email;
            const query = { email: email };
            const carts = await cart.find(query).toArray();
            res.send(carts);
        });

        app.post('/carts', async (req, res) => {
            const cartInfo = req.body;
            try {
                const existingCart = await cart.findOne({ _id: cartInfo._id });
                if (existingCart) {
                    res.status(400).json({ error: 'Duplicate _id found' });
                } else {
                    const cartInsertion = await cart.insertOne(cartInfo);
                    res.status(200).json({ message: 'Cart information inserted successfully' });
                }
            } catch (error) {
                console.error('Error inserting cart information:', error);
                res.status(500).json({ error: 'Internal server error' });
            }
        });

        app.delete('/carts/:id', async (req, res) => {
            const id = req.params.id;
            const query = { productId: id };
            const deleteT = await cart.deleteOne(query);
            res.send(deleteT);
        });

        app.post('/contact', async (req, res) => {
            const contactInfo = req.body;
            try {
                const existingContact = await contact.findOne({ _id: contactInfo._id });
                if (existingContact) {
                    res.status(400).json({ error: 'Duplicate _id found' });
                } else {
                    const contactInsertion = await contact.insertOne(contactInfo);
                    res.status(200).json({ message: 'Contact information inserted successfully' });
                }
            } catch (error) {
                console.error('Error inserting contact information:', error);
                res.status(500).json({ error: 'Internal server error' });
            }
        });

    } finally {
        // Ensure proper cleanup if needed
    }
}

run().catch(console.dir);
