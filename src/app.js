'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Esoteric Resources
const errorHandler = require( './middleware/error.js');
const notFound = require( './middleware/404.js' );



// Prepare the express app
const app = express();
const router = require('./middleware/router.js');


// App Level MW
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(router); //app.use(router); 



// Catchalls
app.use(notFound);
app.use(errorHandler);





module.exports = {
  server: app,
  start: (port) => app.listen(port, () => console.log(`Server up on port ${port}`) ),
};