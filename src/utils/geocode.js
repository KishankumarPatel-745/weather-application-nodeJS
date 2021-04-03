const request=require('request')
const geocode=(address,weatherCall)=>{
    let url=`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiYzA3ODA3NDUiLCJhIjoiY2tsMTdhYjh3MDRxbDJ3b3Vvb2pydnhmMCJ9.kvEFAj3406FgltCpGZ4ACQ&limit=1`
    request({url, json:true},(error,{body}={})=>{
        
        if(error){
            weatherCall("unable to connect to the Geocoding API callback error",undefined)
        }else if(body.message||body.features.length===0){
            weatherCall('Invalid Token for given Geo API call or no location found')
        }else {
            let data=body.features[0].center
            // console.log("this is a both lat/long data",data)
            // console.log("latitude of delhi ",data[1])
            // console.log("longitute of delhi ",data[0])
            let weatherUrl=`http://api.weatherstack.com/current?access_key=6753a46056f5f042341fc6340376f861&query=${data[1]},${data[0]}`
            weatherCall(error,{latitude:data[1],
            longitute:data[0]});
            //or 
            //weatherCall(undefined,weatherUrl)
        }
       
        
})
}
//-----------------not require below code in this file
// geocode("Brampton",(error,weatherurl)=>{
//     console.log(weatherurl)
//     if(error){
//         console.log("error:- ",error)
//     } 
//     else{
//          request({ url:weatherurl,json:true},(error,response)=>{
//             if(error){
//                     console.log("Unable to connect to a weather API")
//             }else if(response.body.error){
//                 console.log("invalid location")
//             }else{
//                 console.log(response.body.current.weather_descriptions,"HHHi "+response.body.location.name+"  the temperature out there is a ",response.body.current.temperature," cels. and wind Speed(in kmph) is a ",response.body.current.wind_speed)
//             }
                

//     })
    
// }
// })
module.exports=geocode;