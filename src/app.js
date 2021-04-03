const path=require('path')
const express=require('express')
const hbs=require('hbs')
const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')
const app=express()


const port=process.env.PORT||3000
//setting static files folder/path
app.use(express.static(path.join(__dirname,"../public")))

//setting handlebars and views directory
app.set('view engine','hbs')
app.set('views',path.join(__dirname,'../templates/views'))
hbs.registerPartials(path.join(__dirname,'../templates/partials'))
//index.html name has some special meaning as it acts as a home url reso
// app.get("/help",(req,res)=>{
//     res.send({
//         name:'kishan',
//         age:24,
//         doing: 'developing'
//     })
// })
// app.get("/about",(req,res)=>{
//     res.send(`<div class="card"  style="width: 18rem;">
//     <div class="card-body" style="border:3px solid red;padding:10px;">
//       <h5 class="card-title">About company</h5>
//       <h6 class="card-subtitle mb-2 text-muted">Owner</h6>
//       <p class="card-text">we started our operation in 2012</p>
//       <a href="#" class="card-link">Know More</a>
//       <a href="#" class="card-link">About web creater</a>
//     </div>
//   </div>`)
// })
app.get('',(req,res)=>{
    res.render('index',{
        follower:'krishna',
        h1con:"HI this is a kishan using hbs:handlebars",
        name:'kishan patel@mead'
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        h1con:'This is a weather app ',
        name:"Kishan"
    })
})
app.get('/help',(req,res)=>{
    res.render('help',{
        name:"kishan",
        h1con:"This is a help page"
        
    })
})
app.get("/weather",(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:'pls provide the address in the request so that we could forecast'
        })
    }
    geocode(req.query.address,(error,{latitude,longitute}={})=>{
        if(error){
            return res.send({
                error:"Error while getting response for Geocode lol------"+error
            })
        }
            forecast(latitude,longitute,(error,response)=>{
                if(error){
                    return res.send({error})
                }
                // console.log(response.visibility)
                res.send(response)
            })
        

    })
    
})
// app.get('/products',(req,res)=>{
//     if(!req.query.search){
//         return  res.send({
//             error:"pls provide search term in the request so we can assist you"
//         })
//     }
//     console.log(req.query.name)
//     res.send({
//         product:[]
//     })

// })
app.get('/help/*',(req,res)=>{
    res.render('404Help',{
        name:'Radharani',
        follower:'Krishna'
    })
})
app.get('*',(req,res)=>{
    res.render('404',{
        name:'Radhe',
        follower:'Vidhata'
    })
})
app.listen(port,()=>console.log("server is running on port ",port))

//important variable
// console.log(__dirname);
// console.log(path.join(__dirname,"../public"));


//app.com
//app.com/help
//app.com/about
