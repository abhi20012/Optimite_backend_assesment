const mongoose = require('mongoose');

mongoose.connect(process.env.DB);

const db = mongoose.connection;

db.on('error', console.log.bind(console, "Error connecting to database"));

db.once('open', function(){
	console.log("Connected to database:: MongoDB");
})

module.exports = db;