const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
res.send('Welcome to MEAN Stack!');
});

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/meanDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

app.listen(port, () => {
console.log(`Server is running on port ${port}`);
});
