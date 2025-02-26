var express = require('express');
var formidable = require('formidable');
const session = require('express-session');
var app = express();

app.set('view engine', 'ejs');

app.use(session({
secret: 'abcdefg', 
resave: true, 
saveUninitialized: false 
}));

app.post('/login', function(req, res) {
   var form = new formidable.IncomingForm();
   form.parse(req, function(err, fields, files) {
        user =  verifica(fields.username, fields.parola);
        // verificarea datelor de login
        
        if(user){
          req.session.username = user; 
          // setez userul ca proprietate a sesiunii
          res.redirect('/logat'); }
        else
          req.session.username = false;
   });
});

app.get('/logat', function(req, res) {
   res.render('pagini/logout',{'nume':req.session.username});
});
         


app.get('/logout', function(req, res) {
   req.session.destroy(); 
   // distrugem sesiunea la intrarea pe pagina de logout
   res.render('pagini/login');
}); 

app.get('/', function(req, res)
{
  res.render('pagini/log');
})

function verifica(username, parola)
{
var fs = require('fs');
fs.readFileSync('users.json', function(err, data)
{
  if (err) throw err;
  var json = JSON.parse(data);
  if(username == json.username & parola == jason.parola)
  {
    return username;
  }
  else
  {
    return 0;
  }
});
}
app.listen(4000); 
