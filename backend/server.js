import dotenv from 'dotenv'
dotenv.config()
import express from "express"
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'
import connectDB from "./config/db.js"

const port = process.env.PORT || 5000

connectDB();  // Call connectDB to establish the MongoDB connection

const app = express();

// request body parse middleware, used to send data from api POST data to middle ware, otherwise the routes can't read routes body encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => {
    res.send("API is running...")
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

app.use(notFound);
app.use(errorHandler);



app.listen(port, () => console.log(`Server running on port ${port}`))