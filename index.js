// Import a module
const http = require('http');
const router = require('./router')
const express = require('express')
// Import Node url module
const url = require('url');
const qs = require('querystring');
const fs = require('fs');
const port=8080;


/*
const serverHandle = function (req, res) {
//parse la route
  const route = url.parse(req.url)
  //on récupère le path
  const path = route.pathname
  //récupèr ele paramètre
  const params = qs.parse(route.query)

  res.writeHead(200, {'Content-Type': 'text/plain'});

  console.log(path)

  if (path === '/hello' && 'name' in params) {
    res.write('Hello ' + params['name'])
    res.end();
  }
  else if (path === '/' ) {
     fs.readFile('./explain.html', function(error, content) {
        res.writeHead(200, { 'Content-Type': "html" });
        res.write(content);
        res.end();
    });
  }
  else if (path === '/Naim') {
     fs.readFile('./Naim.html', function(error, content) {
        res.writeHead(200, { 'Content-Type': "html" });
        res.write(content);
        res.end();
    });
  
}

  else {
     fs.readFile('./404.html', function(error, content) {
        res.writeHead(404, { 'Content-Type': "html" });
        res.write(content);
        res.end();
    });
  }


  }

  // Declare an http server
  const app = http.createServer(serverHandle);*/
  const app = express()
  app.use('/', router)
  // Start the server
  app.listen(port, function(){
    console.log("Server started on port " + port)
  })


