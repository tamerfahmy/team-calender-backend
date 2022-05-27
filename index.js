const express = require('express');
const cors = require('cors');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swagger = require('./swagger');

const dateTimeRouter = require('./src/routes/datetime.route');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
    origin: ['http://localhost:4200', 'http://localhost:8080', 'https://team-calender.herokuapp.com']
}));

const specs = swaggerJsDoc(swagger.options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.use('/api/date-time', dateTimeRouter);



/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({'message': err.message});
  
  return;
});

app.listen(port, () => console.log(`Team Calender API listening on port ${port}!`));
