var express = require('express');
var app = express();

//Reusable controllers
var productController=function(req, res){
  console.log("Invoking  rest api for product list");
  var products = [
    {id:1, title:"headphone",description:"sony headphone",quantity:500, unitprice:12},
    {id:2, title:"mobile",description:"oneplus6",quantity:1500, unitprice:16},
    {id:3, title:"powerbank",description:"mi",quantity:5000, unitprice:17},
    {id:4, title:"cushions",description:"sofa",quantity:400, unitprice:25},
    {id:5, title:"Marigold",description:"Festival flower",quantity:7500, unitprice:34},
  ];
  res.send(products);
};

// setting router to map requests  with controllers
app.get ('/products',productController);
var server = app.listen(8086, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example apppp listening at http://localhost:8086", host, port)
})