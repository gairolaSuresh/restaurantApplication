const express = require('express');
const api = require('./Controller/api');
const cors=require('cors')
const bodyParser = require('body-parser');
const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/restaurantDB', {
    promiseLibrary: require('bluebird'),
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const PORT =  8000;
const app = express();
app.use(cors())
app.use(bodyParser.json())
app.get('/', function (req, res) {
    res.send('server is running')
});
app.use('/api',api)
app.listen(PORT, function (req, res) {
    console.log('server is running on port number:'+PORT)
})