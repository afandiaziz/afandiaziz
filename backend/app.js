require('dotenv').config();
const path = require('path');
const express = require('express');
const mongoose = require("mongoose");
const profileRouter = require('./routes/profile');
const experiencesRouter = require('./routes/experiences');
const stacksRouter = require('./routes/stacks');

const app = express();

mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => {
		console.log("Connected to mongodb");
	})
	.catch((err) => {
		console.log(err);
	});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/profile', profileRouter);
app.use('/api/experiences', experiencesRouter);
app.use('/api/stacks', stacksRouter);

module.exports = app;
