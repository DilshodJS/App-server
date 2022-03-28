import e from "express";
import express, { query, response } from "express";
import { request } from "http";
import path, { dirname } from "path";
import { engine } from "express-handlebars";

//configure express
const app = express();

//configure handelbars
app.engine(".hbs", engine({ extname: "hbs" }));
app.set('view engine', '.hbs');
app.set('views', './pages');

//register routes
app.get('/',(req,res)=>{
  let {name,age,job}=req.query
  
res.render('index',{name:name,age:age,job:job})
})

app.get('/click',(req,res)=>{
  res.render('click',{ layout:'mat' } )
})


//get zapros
//post zapros

// const Option={
//   root:path.join(__dirname,'../pages/')
// }

// app.get('/data',(request,response)=>{
//   response.sendFile("index.html",Option)
// })

// app.get('/nav2',(request,response)=>{
//   response.sendFile("Home2.html",Option)
// })

// app.get('/html',(request,response)=>{
//   response.send(`<h1>Heading tags in htmlllll</h1>`)
// })

// app.get('/json',(request,response)=>{
//   response.send({
//     username:'diwqaa',
//     age:20,
//     username2:'Abdullayev'
//   })
// })

// app.get('/add',(req,res)=>{
//   let a=+req.query.a!
//   let b=+req.query.b!
//    res.send("javab "+(a+b))
// })

// app.get('/add',(req,res)=>{
//   let a=+req.query.a!
//   let b=+req.query.b!
//   let c=+req.query.c!
//    let sum=Math.max(a,b,c)
//    res.send("javab"+sum)
//   })

// app.get('/welcome',(req,res)=>{
//   let name=req.query.name
//   let surname=req.query.surname

//    res.send(`Welcome  ${name} ${surname}`)

//   })

//run server on port
const port = 3000;
app.listen(port, () => {
  console.log("Server ishladi http://127.0.0.1" + port);
});
