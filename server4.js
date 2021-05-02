const espress= require("express")
const app=espress();


const bodyparset =require("body-parser")//导入第三方中间间
app.use(bodyparset.urlencoded({extended:true}))//解析post请求请求体里面的请求参数



app.post("/",(request,response)=>{
    console.log(request.body);   //post请求参数
    response.send("ok")
})



app.listen("5000",()=>{
console.log("5000端口监听中")
})