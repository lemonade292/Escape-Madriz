const covidApi = "https://api.covid19tracking.narrativa.com/api/2020-10-12/country/spain/region/:region/sub-region/:sub-region"


const getData = async (event) => {
  event.preventDefault()

  var regions = document.querySelector('#regions option').value;
  var log = document.querySelector('#info-comunidad')
  var covidApi = `https://api.covid19tracking.narrativa.com/api/2020-10-12/country/spain/region/${regions}`
  
  const responseCovid = await fetch(covidApi)
  const postData = await responseCovid.json()
 
 
  let data =Object.values(postData.dates)
  console.log(data)
  data.map(data => console.log(data.countries.Spain.regions.map(data =>{
  let dataConfirmed = data.today_confirmed;
  let dataDeaths = data.today_deaths;
  
   if (dataConfirmed > 30000) {return log.textContent = `Casos confirmados:${dataConfirmed} Fallecidos:${dataDeaths}  Viajar ahí es un canteo. Hazte caso y busca garitos por otro lado.`}
  else {return log.textContent = `Casos confirmados:${dataConfirmed} Fallecidos:${dataDeaths}   Te renta mazo. Estaría fetén buscarse una keli para unos días.`} 
})))}
  

var subButton = document.querySelector('.sub-button')
subButton.addEventListener('click', getData)

