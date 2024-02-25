import express, { Express } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app: Express = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));

// parse application/json
app.use(bodyParser.json());

// connect to the database
mongoose.connect('mongodb://localhost:27017/jacobdanderson').then(() => console.log('Connected to the database!'));

app.listen(3005, () => console.log('Server listening on port 3005!'));
