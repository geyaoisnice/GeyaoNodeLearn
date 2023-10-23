const http = require("http")

//创建服务器
http.createServer((req, res) => {
    console.log(req)
    if (req.url === "/home") {

    }
    res.writeHead(renderStatus(req.url), { "Content-Type": "text/html;charset=utf-8" })
    res.write(renderHtml(req.url))
    res.end()

}).listen(3002, () => {
    console.log("geyao.....")
})
function renderHtml(url) {
    switch (url) {
        case "/home":
            return `<html>
            <p>hello home</p>
        </html>`;
        case "/list":
            return `<html>
            <p>hello list</p>
        </html>`;
        default:
            return `<html>
            <p>hello 404</p>
        </html>`;

    }
}
function renderStatus(url){
    var arr=["/home","/list"]
    return arr.includes(url)?200:404
}