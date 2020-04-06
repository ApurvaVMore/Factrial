

const express=require("express");
const bodyparser=require("body-parser");
const app=express();

app.listen(3000,function()
{
    console.log("app connected");
})

app.use(bodyparser.urlencoded({
    extended:true
}))

app.get("/",function(req,res)
{
    res.sendFile(__dirname +"/fact.html");
})
app.post("/",function(req,res)
{
    var number=Number(req.body.num1);
    var fact=1;
    for(var i=1;i<=number;i++)
    {
        fact=fact*i;

    }
    res.send("factorial of a given number is" +fact);
    
})
