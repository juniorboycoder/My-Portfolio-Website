var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const methodOverride = require('method-override')

//Connect to the database
//Here you should update your login credentials to database
//You may replace your login credentials following the pattern: 'mongodb://YOUR_USER:YOUR_PASSWORD@ds223063.mlab.com:23063/tutorial'


var urlencodedParser = bodyParser.urlencoded({extended:false});

//use method overwrite for deleting,puting..



//mongoose.connect('mongodb://localhost/blog', {
//  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
//})

const uri = "mongodb+srv://junior:051298jun@articles.4sifl.mongodb.net/articles?retryWrites=true&w=majority"
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})


module.exports = function (app) {


    app.get('/index', function(req,res){
        res.render('index');
    
    })

   





    app.get('/index2', function(req,res){
        res.render('index2');
    
    })

    app.get('/indexx', function(req,res){
        res.render('indexx');
    
    })
   
    app.get('/indexxx', function(req,res){
        res.render('indexxx');
    
    })
    app.get('/index3', function(req,res){
        res.render('index3');
    
    })
   


    app.post('/todo', urlencodedParser,function (req, res) {
        //console.log(req.body);
        //get data from the view and add it to the mongodb
        var newTodo = Todo(req.body).save(function(err, data){
            if(err){
                throw err;
            }
            res.json(data);
        });
    });

    app.delete('/todo/:item', function (req, res) {
        //delete the requested item from mongodb
        Todo.find({item:req.params.item.replace(/\-/g, " ")}).remove(function(err,data){
            if(err){
                throw err;
            }
            res.json(data);
        });
    });

};