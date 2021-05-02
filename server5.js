const espress= require("express")
const app=espress()
app.use(espress.urlencoded({extended:true}))//导入内部中间件解析post请求里面的urlencoded编码
app.use(espress.static(__dirname+"/public"))//导入内部中间件去暴露静态资源


app.post("/",(request,response)=>{
console.log( request.body);
response.send("ok")
})






/*app.get("/shenhuo",(request,response)=>{
response.sendFile(__dirname+"/public/shenhuo.html")
})
app.get("/gonzhuo",(request,response)=>{                               //适用于少量的页面
    response.sendFile(__dirname+"/public/gonzhuo.html")
    })*/
app.listen("9000",()=>{
console.log("9000端口监听中")
})