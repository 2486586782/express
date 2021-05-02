const espress =require ("express");
const app=espress()


//request详细内容
app.get("/",(request,response)=>{
console.log(request.query)//获取get查询字符串参数
let name=request.query.username;
let password=request.query.password
response.send("姓名是:  "+name+"   密码是:  "+password)
})

app.get("/home/:id",(request,response)=>{
    let id=request.params.id;      //params获取参数路由参数
    response.send(`我是${id}`);    //动态路由
    console.log(request.get('Host'))//获取请求头里面的信息
    })

app.post("/",(request,response)=>{
    let name=request.body.username;
    let password=request.body.password
    response.send(name+"   "+password)     //post参数体请求
    })
    /*----------------------------------------*/
//response详细内容
app.get("/download",(request,response)=>{
    response.download("./public/tp1.gif") //下载
    })
app.get("/sendfile",(request,response)=>{
        response.sendFile(__dirname+"/public/tp1.gif")   //发送文件要绝对路径
        })
 app.get("/redirectc",(request,response)=>{
         response.redirect("http://localhost:3000/")     //重定向，只要输入网址就会跳转
 })

app.get("/set",(request,response)=>{
response.set("demo","123");     //设置自定意相应头 ,设置响应头必须在响应前面
response.send("ok")
})

app.get("/get",(request,response)=>{
    console.log(response.get("x-powered-by"))     //获取项目指定的key,设置响应头必须在响应前面,用的少
    response.send("ok")
    })


app.get("/status",(request,response)=>{
        response.status(404);   //设置响应转态码， 不要用
        response.send("ok")
        })
    


        
app.listen("3000",()=>{
console.log("3000监听中")
})