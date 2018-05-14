var express = require('express')
var app = express()
var port = 8082
app.use(express.static('./src'))
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(port, '127.0.0.1', err => {
    if (err) {
        console.log(err)
    }
    console.log('成功在127.0.0.1:' + port + '开启服务')
})
