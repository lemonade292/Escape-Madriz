const covidApi = "https://api.covid19tracking.narrativa.com/api/2020-10-12/country/spain/region/:region/sub-region/:sub-region"


const getData = async (texto) => {
  var comunidad = document.querySelector('input').value
  console.log(comunidad)
  
  var covidApi = `https://api.covid19tracking.narrativa.com/api/2020-10-12/country/spain/region/${comunidad}`
  
  const responseCovid = await fetch(covidApi)
  const postData = await responseCovid.json()
 
 
  let data =Object.values(postData.dates)
  
  data.map(data => console.log(data.countries.Spain.regions.map(data =>{
  let dataConfirmed = data.today_confirmed;
  let dataDeaths = data.today_deaths;
  //return log.textContent = `${dataConfirmed} ${dataDeaths} listo`
   if (dataConfirmed > 30000) {return log.textContent = `Casos confirmados:${dataConfirmed} Fallecidos:${dataConfirmed}  Viajar ahí es un canteo. Hazte caso y busca garitos por otro lado.`}
  else {return log.textContent = `Casos confirmados:${dataConfirmed} Fallecidos:${dataDeaths}   Te renta mazo. Estaría fetén buscarse una keli para unos días.`} 
})))}
  



 const input = document.querySelector('input')
 const log = document.getElementById('info-provincia')
 let regions = document.querySelector('#regions');

 
 //Primera iteración Hacer un map con el array de objetos de la llamada
 //Segunda iteración Crear un option
 //Tercera iteración Meter la infor del map en el innerHTML del option creado
 //Cuarta iteración Hacerle un appendChild() del option al id de regions

 input.addEventListener('input', getData)

