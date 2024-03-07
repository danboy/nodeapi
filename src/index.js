import 'dotenv/config';
import express from 'express';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import { defineEndpoints } from "./routes/index.js";
import mw from "./middleware/index.js";
import helmet from "helmet";

const app = express()

app.use(helmet());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
  res.header('Access-Control-Allow-Credentials', 'true')
  if (req.method === 'OPTIONS') {
    res.sendStatus(200)
  }
  next()
})

app.use(logger('combined', { skip: () => { return process.env.NODE_ENV === 'test' } }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use("/", defineEndpoints({mw}))

app.listen(3005)
