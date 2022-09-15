const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();


if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(morgan('dev'));
app.use(express.json());
//app.use(express.static(`${__dirname}/`)); TO DO pablic html css

app.use((req, res, next) => {
   console.log('test')
   next();
});

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});



app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;