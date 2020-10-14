const covidApi = "https://api.covid19tracking.narrativa.com/api/2020-10-10/country/spain/region/:region/sub-region/:sub-region"


const getData = async (event) => {
  event.preventDefault()

  var regions = document.querySelector('.regions').value;
  
  var log = document.querySelector('#info-comunidad');
  let buscarSubRegions = `https://api.covid19tracking.narrativa.com/api/countries/spain/regions/${regions}/sub_regions`
  var covidApi = `https://api.covid19tracking.narrativa.com/api/2020-10-10/country/spain/region/${regions}`
  //var covidApiSubRegions = `https://api.covid19tracking.narrativa.com/api/2020-10-12/country/spain/region/${regions}/sub_region/${sub_region}`
  
  
  
 //if(r){
  const responseCovid = await fetch(covidApi)
  
  const postData = await responseCovid.json()
  
  let data = Object.values(postData.dates)
  
  data.map(data => console.log(data.countries.Spain.regions.map(data =>{
  let dataConfirmed = data.today_confirmed;
  
  let dataDeaths = data.today_deaths;
    
  if (regions === 'null') {return log.textContent = 'A ver maquina, selecciona un lugar.'}
  else { if (dataConfirmed > 30000) {return log.textContent = `Casos confirmados:${dataConfirmed} Fallecidos:${dataDeaths}  Viajar ahí es un canteo. Hazte caso y busca garitos por otro lado.`}
  else {return log.textContent = `Casos confirmados:${dataConfirmed} Fallecidos:${dataDeaths}   Te renta mazo. Estaría fetén buscarse una keli para unos días.`} 
  } }
/* } else if(r) {
  console.log(data)
  } */
//}
)))}
  
const getSubregions = async (event) => {
  
  var regions = document.querySelector('.regions').value;
  let buscarSubRegions = `https://api.covid19tracking.narrativa.com/api/countries/spain/regions/${regions}/sub_regions`
 console.log(regions)
  fetch(buscarSubRegions)
  .then(data => data.json())
  .then(countries => countries.countries[0].spain[regions].map(data =>{
    
    let idSubregions = data.id
    let nameSubregions = data.name
    let optionId = document.querySelector(".sub-regions");
    let option = document.createElement("option");
    option.value = idSubregions
    option.innerHTML = nameSubregions
    optionId.appendChild(option) 
    
    //return console.log(idSubregions) 
  
}))

}

var subButton = document.querySelector('.sub-button')
subButton.addEventListener('click', getData)

var selectRegion = document.querySelector('.regions')
selectRegion.addEventListener('change', getSubregions)
// Option 
// llamada