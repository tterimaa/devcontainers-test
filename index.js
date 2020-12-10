console.log("Testing dev-containers");

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Successfully connected to database");
  console.log(`Host: ${db.host}`);
  console.log(`Host: ${db.port}`);
});

const kittySchema = new mongoose.Schema({
    name: String
});

const Kitten = mongoose.model('Kitten', kittySchema);

const silence = new Kitten({ name: 'Silence' });
silence.save((err, silence) => {
    if (err) return console.error(err);
    console.log(`Kitten ${silence} successfully saved`);
});