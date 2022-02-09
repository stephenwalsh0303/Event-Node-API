// FileName: index.js
// Import express
let express = require('express')
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
// Initialize the app
let app = express();
// Add the code below to index.js
// Import routes
let apiRoutes = require("./routes/api-routes")

app.use(
     express.urlencoded({
       extended: true
     })
);

app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/resthub', { useNewUrlParser: true});
var db = mongoose.connection;

if(!db)
console.log("Error connecting db")
else
console.log("Db connected successfully")
// Setup server port
var port = process.env.PORT || 8080;
// Send message for default URL
app.get('/', (req, res) => res.send('api server working!'));

// Use Api routes in the App
app.use('/api', apiRoutes);

// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Running RestHub on port " + port);
});
