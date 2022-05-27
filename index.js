const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');

const dateTimeRouter = require('./src/routes/datetime.route');
const app = express();
const port = process.env.PORT || 3000;

app.use('/api/date-time', dateTimeRouter);
app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({'message': err.message});
  
  return;
});

app.listen(port, () => console.log(`Team Calender API listening on port ${port}!`));
