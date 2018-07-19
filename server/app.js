// import data from 'src/data/menulist.json'
//引入express中间件
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
var appRouter = express.Router()
var fs = require('fs')

appRouter.route('/:apiName')
    .get(function(req, res) {
        fs.readFile(__dirname + '/data/theme.json', 'utf8', function(err, data) {
            if (err) throw err
            var data = JSON.parse(data)
            if (data[req.params.apiName]) {
                res.json(data[req.params.apiName])
            } else {
                res.send('no such api name')
            }
        })
    })
app.use('/api', appRouter)


//指定启动服务器到哪个文件夹，我这边指的是dist文件夹
app.use(express.static('../dist'));

app.get('/api', function(req, res) {
    res.send('Hello World!');
})

app.get('/api/user', function(req, res) {
    fs.readFile(__dirname + '/data/userInfor.json', 'utf8', function(err, data) {
        if (err) throw err
        var data = JSON.parse(data)
        res.json(data)
    })
})

app.get('/api/user/menulsit', function(req, res) {
    fs.readFile(__dirname + '/data/menulist.json', 'utf8', function(err, data) {
        if (err) throw err
        var data = JSON.parse(data)
        res.json(data)
    })
})

app.get('/api/user/hotMenu', function(req, res) {
    fs.readFile(__dirname + '/data/hotBusiness.json', 'utf8', function(err, data) {
        if (err) throw err
        var data = JSON.parse(data)
        res.json(data)
    })
})

app.get('/api/chart/aqi', function(req, res) {
    fs.readFile(__dirname + '/data/aqi-beijing.json', 'utf8', function(err, data) {
        if (err) throw err
        var data = JSON.parse(data)
        res.json(data)
    })
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