const form = document.querySelector("form");

form.addEventListener('submit', function(event){
    event.preventDefault()

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const result=document.querySelector("#result")
    
    if(isNaN(height) || height<0 || height===""){
        result.innerHTML= `Write a Valid Height ${height}`
    }else  if(isNaN(weight) || weight<0 || weight===""){
        result.innerHTML= `Write a Valid weight ${weight}`
    }else{
        const BMI=weight/(height*height/10000)
        result.innerHTML=`<span> ${BMI.toFixed(1)}</span></br>`
        if(BMI.toFixed(1)<18.6){
            const range=document.createTextNode("Under Weight")
            result.appendChild(range)
        }else if(BMI.toFixed(1)<24.9){
            const range=document.createTextNode("Norma Range")
            result.appendChild(range)
        }else{
            const range=document.createTextNode("Over Weight")
            result.appendChild(range)
        }
    }
})