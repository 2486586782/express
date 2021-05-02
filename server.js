const express =require("express")
const app=express();     



app.disable('x-powered-by') //隐藏框架信息


//根路由
app.get("/",(request,response)=>{
    console.log("有人请求了");
    console.log(request.query);
    response.send("ok")
})

//一级路由 
app.get("/home",(request,response)=>{
    response.send("首页")
})




app.listen(8000,()=>{
    console.log("8000端口监听中")
})