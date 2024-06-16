import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';

const app = express();
const PORT = 3000;

/** Mongoose connection */
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
    useNewUrlParser: true
});

/** Body Parser Setup. */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/** Serving Static Files */
app.use(express.static('public'));

routes(app);

/** First Endpoint on the browser [Template String - ${PORT}]. */
app.get('/', (req, res) =>
    res.send(`Node and Express server is running on port ${PORT}`)
);

/** Check that the server is running. */
app.listen(PORT, () =>
    console.log(`Your server is running on port ${PORT}`)
);