//引入express中间件
var express = require('express');
var app = express();

//指定启动服务器到哪个文件夹，我这边指的是dist文件夹
app.use(express.static('../dist'));

app.get('/api', function(req, res) {
    res.send('Hello World!');
})

app.get('/api/data/menulist.json', function(req, res) {
    res.send('Hello World!');
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found')
    err.status = 404
    next(err)
})

// error handler
app.use(function(err, req, res, next) {
    res.status(err.status || 500)
    console.log(err)
    res.send(err.message)
})


//监听端口为3000
var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
})