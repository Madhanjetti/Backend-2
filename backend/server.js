const express=require('express')
const app=express()

const port=5000||process.env.PORT
app.use(express.static('dist'))
// app.get('/',(req,res)=>{
//     res.send('Hello World! -Backend prg2')
// })
app.get('/api/jokes',(req,res)=>{
    const jokes=[
       
       { 
        id:1,
        title:'A joke',
        content:'first joke'
       },
       {
        id:2,
        title:'b joke',
        content:'Second joke'
       },
         {
          id:3,
          title:'c joke',
          content:'Third joke'
         },
            {
                id:4,
                title:'d joke',
                content:'Fourth joke'
            },
            {
                id:5,
                title:'e joke',
                content:'Fifth joke'
            },
            {
                id:5,
                title:'e joke',
                content:'Fifth joke'  
            }

    ]
    res.send(jokes)
})
app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})