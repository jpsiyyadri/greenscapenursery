const functions = require('firebase-functions');
// const admin = require('firebase-admin');
// var firebase = require('firebase');
// var firebaseui = require('firebaseui');
const express = require('express')
const cors = require('cors')({origin: true});

const app = express()
app.use(cors);

const app2 = express()

app2.get('/', (req, res) => {
  res.send('Hello JP!')
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api', (req, res) => {
  const date = new Date();
  const hours = (date.getHours() % 12) + 1;  // London is UTC + 1hr;
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
  res.set('Vary', 'Accept-Encoding, X-My-Custom-Header');
  res.json({bongs: 'BONG '.repeat(hours)});
});

// The Firebase Admin SDK to access Cloud Firestore.
// admin.initializeApp();
exports.app1 = functions.https.onRequest(app);
exports.app2 = functions.https.onRequest(app2);
