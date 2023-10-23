# 前言

> 我是歌谣 今天给大家带来的是关于node中http模块的一个讲解

# 案例1

```
const http=require("http")

//创建服务器
http.createServer(()=>{
    
}).listen(3002,()=>{
    console.log("geyao.....")
})
```
# 运行结果
![在这里插入图片描述](https://img-blog.csdnimg.cn/b89d4a4ea83c46e2a54b387720b0aa1a.png)

# 案例2

```
const http=require("http")

//创建服务器
http.createServer((req,res)=>{
    res.write("hello geyao1")
    res.end()
    
}).listen(3002,()=>{
    console.log("geyao.....")
})
```
# 运行结果
![在这里插入图片描述](https://img-blog.csdnimg.cn/b94410e049384866be18e091185a7446.png)

# 案例3

```
const http=require("http")

//创建服务器
http.createServer((req,res)=>{
    res.write(`<html>
        <p>hello geyao</p>
    </html>`)
    res.end()
    
}).listen(3002,()=>{
    console.log("geyao.....")
})
```
# 运行结果
![在这里插入图片描述](https://img-blog.csdnimg.cn/8c1d5fb5b7824a3dbc2319ad298bc215.png)

# 案例4

```
const http=require("http")

//创建服务器
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
    res.write(`<html>
        <p>hello geyao</p>
        <div>大家好</div>
    </html>`)
    res.end()
    
}).listen(3002,()=>{
    console.log("geyao.....")
})
```

# 运行结果
![在这里插入图片描述](https://img-blog.csdnimg.cn/57fdadc5318e45ef88a41f637654eec2.png)

# 案例5

```
const http = require("http")

//创建服务器
http.createServer((req, res) => {
    console.log(req)
    if (req.url === "/home") {

    }
    res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" })
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
```

# 运行结果
![在这里插入图片描述](https://img-blog.csdnimg.cn/bd3b3555a5e547e4b804d1b329ae5c99.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/743059a702c44de5b2c1703d2d1dc629.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/0119611a3bc0436a983a26acc40a6435.png)

# 案例6

```
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
```
# 运行结果
![在这里插入图片描述](https://img-blog.csdnimg.cn/bd3b3555a5e547e4b804d1b329ae5c99.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/743059a702c44de5b2c1703d2d1dc629.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/0119611a3bc0436a983a26acc40a6435.png)