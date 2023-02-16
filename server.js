const express = require('express'); // Using this to set up server app
const cors = require('cors'); // Using this to prevent errors when working locally
const app = express(); // Initialize app using express

// Setting the port to environment variable, if available. If not, set it to '6969' as default.
app.set("port", process.env.PORT || 6969); 
app.use(express.json()); // This enables server to handle 'json' requests
app.use(cors()); // App must use an instance of 'cors' as middleware to prevent errors when working locally

// Importing Routes
const userRoutes = require('./app/routes/userRoutes')
const productRoutes = require('./app/routes/productRoutes')
const orderRoutes = require('./app/routes/orderRoutes')
const categoryRoutes = require('./app/routes/categoryRoutes')

// This Handles 'get' requests on the home route '/'
app.get("/", (req, res) => {
  res.json({ msg: "Welcome" });
});

// User routes
app.use('/users', userRoutes);
app.use('/orders', orderRoutes);
app.use('/products', productRoutes);
app.use('/categories', categoryRoutes);

app.listen(app.get("port"), () => {
  console.log(`Listening for calls on port ${app.get("port")}`);
  console.log("Press Ctrl+C to exit server");
});