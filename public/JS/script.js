console.log("This is a scipt writtrn by kishan jsdsakj")
// fetch('https://puzzle.mead.io/puzzle').then(response=>{
//     response.json().then((data)=>{
//         console.log(data)

//     })

// })
// console.log(add01.name)
const in01=document.getElementById('in01')
let p01=document.getElementById('p01')
let p02=document.getElementById('p02')
const form=document.querySelector('form')
p01.innerText ="Please provide location to fetch weather"
p02.textContent="Thank you"
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    fetch(`/weather?address=${in01.value}}`).then(response=>{
        response.json().then((data)=>{
            if(data.error){
                // console.log('Hi this is a error: ',data.error)
                p01.innerText='Hi this is a error: '+data.error
                p02.innerText=""
                
            }
            else{
                // console.log(data)
                p01.innerText="Weather Location:- "+ in01.value
                p02.innerHTML=`Location:- ${data.location} <br> Temperature:- ${data.temperature} <br> Wind Speed:- ${data.wind_speed} <br> Feelslike:- ${data.feelslike} <br> visibility:- ${data.visibility} `
                console.log('This is it')
            }
        })
    
    })
    
    // console.log('Testing')
    // console.log(in01.value)
    

})

