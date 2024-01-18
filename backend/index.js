require('dotenv').config();
const path = require('path');
const express = require('express');
const mongoose = require("mongoose");

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


app.use('/api', require('./routes/api'));

const PORT = process.env.APP_PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));

module.exports = app;
