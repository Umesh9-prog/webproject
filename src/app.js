const express=require("express");
const app=express();
const port=process.env.PORT || 3000;

const path=require("path");
const hbs=require("hbs");


const static_path=path.join(__dirname,"../public");
const partial_path=path.join(__dirname,"../templates/partials")




app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,"../templates/views"));//getting views files
hbs.registerPartials(partial_path);


app.use(express.static(static_path));





app.get("",(req,res)=>{
   res.render('index');
})

app.get("/about",(req,res)=>{
    res.render('about');
})

app.get("/weather",(req,res)=>{
    res.render('weather')
})

app.get("*",(req,res)=>{
res.render('error',{
    errmsg:'Opps! Page Not Found'
});
})

app.listen(port,()=>{
    console.log(`listning at port no ${port}`);
})
