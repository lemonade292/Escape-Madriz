const covidApi = "https://api.covid19tracking.narrativa.com/api/2020-10-10/country/spain/region/:region/sub-region/:sub-region"


const getData = async (event) => {
  event.preventDefault()

  var regions = document.querySelector('.regions').value;
  var subRegions = document.querySelector('.sub-regions').value
  var log = document.querySelector('#info-comunidad');
 
  var covidApi = `https://api.covid19tracking.narrativa.com/api/2020-10-14/country/spain/region/${regions}`
  var subRegionsApi = `https://api.covid19tracking.narrativa.com/api/2020-10-14/country/spain/region/${regions}/sub_region/${subRegions}`
  
  //'PARA EL CONTROL Z'
  
 if(subRegions === 'null'){
  const responseCovid = await fetch(covidApi)
  
  const postData = await responseCovid.json()
  
  let data = Object.values(postData.dates)
  
  data.map(data => data.countries.Spain.regions.map(data =>{
    let dataConfirmed = data.today_confirmed;
    
    let dataDeaths = data.today_deaths;
      
    if (regions === 'null') {return log.textContent = 'A ver maquina, no te cantees mas y selecciona un lugar.'}
    else if(regions === 'madrid') { return log.innerHTML = `Casos confirmados: ${dataConfirmed} <br><br> Fallecidos: ${dataDeaths} <br><br> A ver fiera, ir al 100mon de Sol no es salir de Madriz. Lo de los contagios aquí es una movida, pero podrás disfrutar del agüita del canal de la Isabel II que te renta mazo.`
    } else if(regions === 'cataluna') { return log.innerHTML = `Casos confirmados: ${dataConfirmed} <br><br> Fallecidos: ${dataDeaths} <br><br> Para que vas a ir ahí figura? Si hablan mazo raro y tienen todos los garitos chapados`
  } else { 
      if (dataConfirmed > 30000) {return log.innerHTML = `Casos confirmados: ${dataConfirmed} <br><br>  Fallecidos: ${dataDeaths} <br><br> Viajar ahí es un canteo. Hazte caso y busca garitos por otro lado.`}
    else {return log.innerHTML = `Casos confirmados: ${dataConfirmed} <br><br>  Fallecidos: ${dataDeaths}  <br><br> Te renta mazo. Estaría fetén buscarse una keli para unos días.`} 
    }}))
 } else  {
   const responseSubRegions = await fetch(subRegionsApi)
  
  const postDataSubRegions = await responseSubRegions.json()
  
  let data = Object.values(postDataSubRegions.dates)
  
  data.map(data => data.countries.Spain.regions.map(data => data.sub_regions.map( data => {
    
    let dataConfirmed = data.today_confirmed;
    let dataDeaths = data.today_deaths;
      
    if (dataConfirmed > 15000) {return log.innerHTML = `Casos confirmados: ${dataConfirmed}<br><br> Viajar ahí es un canteo. Hazte caso y busca garitos por otro lado.`}
    else {return log.innerHTML = `Casos confirmados: ${dataConfirmed} <br><br> Te renta mazo. Estaría fetén buscarse una keli para unos días.`} 
    }))) 
  } 

}
  
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
  
}))

}

var subButton = document.querySelector('.sub-button')
subButton.addEventListener('click', getData)

var selectRegion = document.querySelector('.regions')
selectRegion.addEventListener('change', getSubregions)



