const express = require('express');

// Routes are exported from them
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//Controller  
const errorController = require("./controllers/error");

// Body Parser to parse the body of requests
const bodyParser = require('body-parser');

// Making a Express App
const app = express();

// Setting Something for html templating
app.set('view engine','pug');
app.set('views','views');

// This tells about public path for style and JS files
app.use(express.static("./public"));
// This makes use of middleware that parse whole body
app.use(bodyParser.urlencoded());

// This Middlewares helps in routing
app.use(adminRoutes);
app.use(shopRoutes);

// This is when path is invalid 
app.use(errorController.get404);

// Listens for requests to server;
app.listen(3000);