// //server.js
// var express = require('express');
// var app = express();
// var sql = require('mssql');

// //SqlServer Connect Config
// var config = {
//     user: 'sa',
//     password: 'sa',
//     server: 'localhost',
//     database: 'database',
//     options: {
//         encrypt: true
//     }
// };
// app.get('/api/user', function(req, res) {
//     sql.connect(config).then(function() {
//         //Query
//         new sql.Request()
//             .input('input_parameter', sql.Int, 1002)
//             .query('select * from Authority_Uset where id !=@input_parameter')
//             .then(function(recordset) {
//                 console.dir(recordset);
//                 res.json(recordset);
//             }).catch(function(err) {
//                 //...error checks
//                 console.log(err);
//                 res.send(err);
//             });
//     }).catch(function(err) {
//         //...error checks
//         console.log(err);
//         res.send(err);
//     })
// })
// app.post('api/user', function(req, res) {
//     //操作数据库代码自行脑补
// })
// app.delete('api/user/:userId', function(req, res) {
//     //操作数据库代码自行脑补
// })
// app.listen(8080, function() {
//     console.log('app listening on 8080');
// })