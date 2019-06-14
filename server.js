const express = require('express');
// ... other imports 
const path = require("path")
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const routes = require('./app/routes.js');
const auth = require('./app/config/facebook.auth');
//require auth modules
var passport = require('passport');
var expressSession = require('express-session');



require('dotenv').config();



//database init
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
  .then(
    () => { console.log('Database is connected') },
    err => { console.log('Can not connect to the database' + err) }
  );

let app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//session init
var session = expressSession({
  secret: '60dd06aa-cf8e-4cf8-8925-6de720015ebf',
  resave: false,
  saveUninitialized: false,
  name: 'sid'
});

app.use(session);
app.use('/', routes);
auth(app);

if (process.env.ENV === 'production') {
  app.use(express.static(path.join(__dirname, "client", "build")))
  app.get("*", (req, res) => {
    console.log('port: ' + process.env.PORT);
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

app.listen(process.env.PORT || 8080, () => {
  console.log("Listening on port " + process.env.PORT);
});  
