// dependencies
const express = require('express');

// creating express server
const app = express();

// sets up initial port
const PORT = process.env.PORT || 3001;

// this sets up express for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// point server to route files
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// listener code
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });
  