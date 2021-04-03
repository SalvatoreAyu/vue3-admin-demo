HTTP 请求的参数无外乎这么几种

1. query 参数
2. form 参数
3. path 参数
4. matrix 参数
5. cookie 参数
6. header 参数这六种参数中，express 暂不提供 api 直接获取 matrix 参数。其余五种都支持。但是 header 参数无法枚举。简单介绍下这些参数的获取

# Query 参数 Req.query

# Form 参数 Req.body，需要用到插件 body-parser，代码：

```
var BodyParser= require('body-parser');
app.use(BodyParser.urlencoded({ extended: true }));
```

# path 参数 Req.params

# matrix 参数 无

# cookie 参数 Req.cookies,需要用到插件 cookie-parser，代码：

```
var CookieParser = require("cookie-parser");
app.use(new CookieParser());
```

# header 参数 Req.get(name)

```
var Express = require("express");
var app = new Express();
// query param
app.get("/search",function(req,res){
    res.json(req.query);
});
// form param
var BodyParser= require('body-parser');
app.use(BodyParser.urlencoded({ extended: true }));
app.post("/search",function(req,res){
    res.json(req.body);
});
// path param
app.get("/search/:path.html",function(req,res){
    res.json(req.params);
});
// cookie param
var CookieParser = require("cookie-parser");
app.use(new CookieParser());
app.put("/search",function(req,res){
    res.json(req.cookies);
});
// header param
app.patch("/search",function(req,res){
    res.send(req.get('Content-Type'));
});
app.listen(8080);
```
