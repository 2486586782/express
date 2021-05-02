const express =require ('express')
const app=express()

app.get("/",(request,response)=>{
    console.log(request.query)
    response.send("ok")
})

app.get("/home",(request,response)=>{
    response.send("一级路由")
})

app.get("/home/meishi",(request,response)=>{
    response.send("二级路由")
})

app.post("/",(request,response)=>{
    response.send("post请求")
})

app.listen(8000,()=>{
    console.log("8000端口监听中")
})