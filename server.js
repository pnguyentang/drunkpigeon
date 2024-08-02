const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/pigeon', { useNewUrlParser: true, useUnifiedTopology: true });

const Transaction = mongoose.model('Transaction', new mongoose.Schema({
    senderTable: String,
    receiverTable: String,
    drink: String,
    timestamp: { type: Date, default: Date.now }
}));

app.post('/send-drink', (req, res) => {
    const { senderTable, receiverTable, drink } = req.body;
    const transaction = new Transaction({ senderTable, receiverTable, drink });
    transaction.save().then(() => res.status(201).send('Drink sent!'));
});

app.get('/transactions', (req, res) => {
    Transaction.find().then(transactions => res.json(transactions));
});

app.listen(3000, () => console.log('Server running on port 3000'));
