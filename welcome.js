var h = require('http');
var u = require('url');
h.createServer(function (req, res) {
    var url_p = u.parse(req.url, true);
    var nm = url_p.query.name;
    var cl = url_p.query.cl;
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write("<h1 style='color:" + cl + "'> Welcome " + nm + "</h1>");
    res.end();
}).listen(9000, function () { console.log("server is started - 9000") })