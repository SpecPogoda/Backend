/*const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')*/

import express from 'express'
import cors from 'cors';
import bodyParser from 'body-parser';

import usersRouter from './routes/weather.js'

const app = express()

app.get('/', (req, res) => {
    res.sendStatus(200)
    console.log('connected')
})

app.use(cors())
app.use(bodyParser.json());
app.use('/weather', usersRouter);

app.listen( 9000 , () => console.log(`Server started, listening port: 9000`));
