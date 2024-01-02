import dotenv from 'dotenv'
dotenv.config()
import express from "express"
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'
import connectDB from "./config/db.js"

const port = process.env.PORT || 5000

connectDB()  // Call connectDB to establish the MongoDB connection

const app = express();

app.get('/', (req, res) => {
    res.send("API is running...")
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

app.use(notFound);
app.use(errorHandler);



app.listen(port, () => console.log(`Server running on port ${port}`))