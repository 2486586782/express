const espress = require ("express");
const app=espress();
//过滤一些不合法的请求，列如图片防盗链，所以都需要的时候用
/*app.use((request,response,next)=>{ //全局中间件,第一个门
if(request.get('Referer')){
let miniReferer=request.get("Referer").split("/")[2];
if(miniReferer==="http://localhost:8080"){
    next()
}else{
response.sendFile(__dirname+"/public/xy.png")
}}else{
    next();
}
})*/
//使用函数定义图片防盗链,更加灵活，可以在需要的地方使用
function demo(request,response,next){
    if(request.get('Referer')){
        let miniReferer=request.get("Referer").split("/")[2];
        if(miniReferer==="http://localhost:8080"){
            next()
        }else{
        response.sendFile(__dirname+"/public/xy.png")
        }}else{
            next();
        }
}





app.get("/tupian",demo,(request,response)=>{
    response.sendFile(__dirname+"/public/tp1.gif")
})












app.use((request,response,next)=>{ //全局中间件,最后一个门
    response.send("全局中间件")
    })
app.listen("8080",()=>{
console.log("8080端口监听中")
})