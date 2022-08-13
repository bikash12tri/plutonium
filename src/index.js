const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const app = express();
const mongoose= require("mongoose")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', route);

mongoose.connect("mongodb+srv://BIkashTechie:ZfBwR3V1zIKvAi5i@cluster0.gxiqfnk.mongodb.net/Bikash143?retryWrites=true&w=majority",{
    useNewurlParser : true
})
.then( () => console.log("MongoDB is connected"))
.catch( err => console.log(err) )


app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
