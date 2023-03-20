//create an express server
const express = require('express');
const router = require('./routes/user.route');
const authRouter = require('./routes/login.route');
const uploadExcelRouter = require('./routes/upload-excel.route');
const cors = require('cors');
require('dotenv').config();
const projectRouter = require('./routes/project.route');
const caseStudiesRouter = require('./routes/case-study.route');
const staffingRouter = require('./routes/staffing-details.route');
const searchRouter = require('./routes/search.route');
const skillsRouter = require('./routes/skills.route');
const uploadImageRouter = require('./routes/upload-image.route');

//add swagger documentation
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
// const swaggerAutogen = require('swagger-autogen')();

// const outputFile = "../swagger.json";
// const endpointsFiles = ["./routes/loginRoutes.js","./routes/userRoutes.js"];
// //const config = {}
// console.log(typeof(swaggerAutogen))
// swaggerAutogen(outputFile, endpointsFiles, config).then(async () => {
//   await import('./index.js'); // Your express api project's root file where the server starts
// });

const app = express();
const PORT = process.env.PORT || 8000;

// middlewares
app.use(express.json());
app.use(
  cors({
    origin: '*',
  })
);
app.use('/excel', uploadExcelRouter);
app.use('/image', uploadImageRouter);
app.use('/api', router);
app.use('/auth', authRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/staffing', staffingRouter);
//for the engagements
app.use('/api/projects', projectRouter);
app.use('/api/case-studies', caseStudiesRouter);
app.use('/api/search', searchRouter);
app.use('/api/skills', skillsRouter);
// app.use(express.static(__dirname + 'public'));
app.use('/images', express.static(__dirname + '/public'));
app.get('/', (req, res) => {
  res.send('Hello World!');
});

//start a server on port 8000
app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});
