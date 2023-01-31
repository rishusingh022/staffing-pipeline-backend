//create an express server 
const express = require('express');
const router = require('./routes/practitionerRoutes');

//add swagger documentation
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

const app = express();
const PORT = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use(router);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.get('/', (req, res) => {
  res.send('Hello World!');
});



//start a server on port 3000
app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});

