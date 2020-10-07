const express = require('express')
const mongoose = require('mongoose')
const Article = require('./models/article')
const articleRouter = require('./routes/articles')
const methodOverride = require('method-override')
const app = express()
var todoController = require('./controllers/todoController');
const functions = require('firebase-functions');




const uri = "mongodb+srv://junior:051298jun@articles.4sifl.mongodb.net/articles?retryWrites=true&w=majority"
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.use(methodOverride('_method'))

app.get('/', async (req, res) => {
  const articles = await Article.find().sort({ createdAt: 'desc' })
  res.render('articles/index', { articles: articles })
})

app.use('/articles', articleRouter)


//set up template engine
app.set('view engine','ejs');



//static files
app.use(express.static('./public'));

//fire controlers
todoController(app);

todoController(app);


const path = require('path');
const sendMail = require('./mail');
const { log } = console;



// email, subject, text
app.post('/email', (req, res) => {
  const { subject, email, text  } = req.body;
  log('Data: ', req.body);

  sendMail(email, subject, text , function(err, data) {
      if (err) {
          log('ERROR: ', err);
          return res.status(500).json({ message: err.message || 'Internal Error' });
      }
      log('Email sent!!!');
      return res.json({ message: 'Email sent!!!!!' });
  });
});



exports.app=functions.https.onRequest(app)