const express = require('express');
var bodyParser = require('body-parser');
const route = require('./routes/route.js');
const app = express();
const mongoose= require("mongoose")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', route);

mongoose.connect("mongodb+srv://BIkashTechie:ZfBwR3V1zIKvAi5i@cluster0.gxiqfnk.mongodb.net/Bikash143?retrywrites=true&w=majority",{
    useNewurlparser : true
})
.then( () => console.log("Monngodb is connected"))
.catch( err => console.log(err))
    

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
