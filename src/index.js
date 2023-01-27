//create an express server 
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

//pre requisites
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!'); 
});

//start a server on port 3000
app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});

