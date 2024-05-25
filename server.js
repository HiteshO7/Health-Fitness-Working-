const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDBnpm install mongodb
mongoose.connect('mongodb+srv://HiteshThakur:MBaI5pDV0iCTQh9g.ttrdkvw.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a schema and model for storing BMI data
const bmiSchema = new mongoose.Schema({
  name: String,
  age: Number,
  sex: String,
  height: Number,
  weight: Number,
  bmi: Number
});

const BMIDetail = mongoose.model('BMIDetail', bmiSchema);

// Endpoint to save BMI data
app.post('/api/bmi', (req, res) => {
  const { name, age, sex, height, weight, bmi } = req.body;

  const newBMIDetail = new BMIDetail({ name, age, sex, height, weight, bmi });

  newBMIDetail.save((err) => {
    if (err) {
      res.status(500).send('Error saving data');
    } else {
      res.status(200).send('Data saved successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
