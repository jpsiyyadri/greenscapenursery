const functions = require('firebase-functions');
// const admin = require('firebase-admin');
// var firebase = require('firebase');
// var firebaseui = require('firebaseui');
const express = require('express')
const hbs = require("express-handlebars")
const path = require("path")
const cors = require('cors')({origin: true});
const app = express()
const app2 = express()

app2.use(cors);
app2.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'theme', layoutsDir: path.join(__dirname, 'src/layouts')}))
// app2.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'default_layout', layoutsDir: path.join(__dirname, 'src/layouts')}))
app2.set('views', path.join(__dirname, "src/views"))
app2.set('view engine', 'hbs')

app2.use('/images', express.static(path.join(__dirname, 'assets/img')))
app2.use('/css', express.static(path.join(__dirname, 'src/stylesheets')))
// app2.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
// app2.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))

app2.get('/login', (req, res) => {
  res.render('login')
})

app2.get('/home', (req, res) => {
  res.render('home', {'title': 'console', 'name': 'jp', 'age': '25', 'condition': true, 'arrayN': [1,2,3]})
})

app2.get('/', (req, res) => {
  res.render('index', {'title': 'console', 'name': 'jp', 'age': '25', 'condition': true, 'arrayN': [1,2,3]})
})

app.get('/', (req, res) => {
  res.send('Hello World! ' + __dirname)
})

// The Firebase Admin SDK to access Cloud Firestore.
// admin.initializeApp();
exports.app1 = functions.https.onRequest(app);
exports.app2 = functions.https.onRequest(app2);
