import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config();

const app = express();

const PORT = 3333
const mongoURL = process.env.MONGO_URL;

console.log(mongoURL)

// Connect to MongoDB using Mongoose
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on the port: ${PORT}`)
})
