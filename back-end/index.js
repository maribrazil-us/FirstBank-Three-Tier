const express = require('express');
const app = express();
const cors = require('cors');
const dal = require('./dal.js');
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.get('/account/create/:name/:email/:password', function(req, res) {
    dal.create(
        req.params.name,
        req.params.email,
        req.params.password
    ).then((user) => {
        console.log(user);
        res.send(user);
    });
});

//app.get('/account/login/:email/:password', function(req, res) {
  //  res.send({
    //    email: req.params.email,
    //    password: req.params.password
    //});
//});

app.get('/account/all', function(req, res) {
    dal.all().then((docs) => {
        console.log(docs);
        res.send(docs);
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
