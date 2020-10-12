const covidApi = "https://api.covid19tracking.narrativa.com/api/2020-10-10/country/spain/region/madrid"


const getData = async () => {
  
  const responseCovid = await fetch(covidApi)
  const postData = await responseCovid.json()
 
 
  let data =Object.values(postData.dates)
  
  data.map(data => console.log(data.countries.Spain.regions.map(data =>{
  let dataConfirmed = data.today_confirmed;
  let dataDeaths = data.today_deaths;
  return `${dataConfirmed} ${dataDeaths} listo`
})))}
  
  
  
 
 getData(covidApi)
 


 const input = document.querySelector('input')
 const log = document.getElementById('info-provincia')

 input.addEventListener('input', updateValue)

 function updateValue(e) {
    log.textContent = e.srcElement.value
 }