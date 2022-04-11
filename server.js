import mongoose from "mongoose";
// mongoose.connect('mongodb://localhost:27017/webdev');
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    || 'mongodb://localhost:27017/webdev'
mongoose.connect(CONNECTION_STRING);
import express from 'express';
import cors from 'cors';
import helloController from "./controllers/hello-controller.js";
import tuitsController   from "./controllers/users-controller.js";
import userController   from "./controllers/tuits-controller.js";
const app = express();
app.use(cors());
app.use(express.json());
helloController(app);
userController(app);
tuitsController(app);
app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
app.listen(process.env.PORT || 4000);