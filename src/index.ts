import e from "express";
import express, { query, response } from "express"
import { request } from "http";
import path,{ dirname} from "path";

const app=express();

const port=3000;  

//get zapros 

app.get('/',(request,response)=>{
  response.send( "get zapros keldi.nima qilaman?")
})


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


app.get('/add',(req,res)=>{
  let a=+req.query.a!
  let b=+req.query.b!
  let c=+req.query.c!
   let sum=Math.max(a,b,c)
   res.send("javab"+sum)
  })


  
app.get('/welcome',(req,res)=>{
  let name=req.query.name
  let surname=req.query.surname

   res.send(`Welcome  ${name} ${surname}`)
 
  })


  app.listen(port,()=>{
  console.log("Server ishladi http://127.0.0.1"+ port);
});
