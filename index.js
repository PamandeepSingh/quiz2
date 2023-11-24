// require('dotenv').config();

// const express = require('express');
// const mongoose = require('mongoose');
// const mongoString = process.env.DATABASE_URL;

// mongoose.connect(mongoString);
// const database = mongoose.connection;

// database.on('error', (error) => {
//     console.log(error)
// })

// database.once('connected', () => {
//     console.log('Database Connected');
// })
// const app = express();

// app.use(express.json());

// app.listen(3000, () => {
//     console.log(`Server Started at ${3000}`)
// })






const mongoose = require('mongoose');
const express = require('express');
const app = express();


// const port = process.env.PORT || 3000;
app.listen(3000, () => {
       console.log(`Server Started at ${3000}`)
 })





mongoose.connect(
    'mongodb+srv://PamandeepSingh:300363773@cluster0.jx8uycu.mongodb.net/quizExamRecords'
);
 
// Create a Schema object
const activitySchema = new mongoose.Schema({
  activity: { type: String, required: true },
});

// This Activitry creates the collection called activitimodels
const Activitymodel = mongoose.model('quizExamRecords', activitySchema);

app.get('/', (req, res) => {
  const Exams23001 = new Activitymodel({
    
    activity: ' name: Pamandeep singh  sid: 300363773',
             
        
       
  });

  Activitymodel.insertMany([Exams23001]);

  res.send(`<h1>Document  Added</h1>`);
});

