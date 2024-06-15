// Import required modules
const express = require('express');

// Create an Express application
const app = express();

// Define a port number for your server
const port = process.env.PORT || 5000; // Use the provided PORT environment variable or default to 5000

// Define routes and middleware (optional)
// Example route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
