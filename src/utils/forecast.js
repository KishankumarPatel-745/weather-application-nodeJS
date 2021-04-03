
const request=require('request')
const forecast=(latitude,longitute,ForecastCallback)=>{
    const url=`http://api.weatherstack.com/current?access_key=6753a46056f5f042341fc6340376f861&query=${latitude},${longitute}`;
    request({url, json:true},(error,{body}={})=>{
        if(error){
            ForecastCallback('hi cannot able to connect to weatherstack api',undefined);
        }else if(body.success===false){
            ForecastCallback(" hi invalid coordinate , no location found");
        }else{
            ForecastCallback(undefined,{
                // body
                location: body.location.name +"  "+ body.location.country,
                temperature: body.current.temperature,
                wind_speed: body.current.wind_speed,
                feelslike: body.current.feelslike,
                visibility: body.current.visibility,
                humidity: body.current.humidity
            })
        }
    })

}
module.exports=forecast;