
// const lon ;
// const lat ;




// window.addEventListener('load', ()=> {
// if(navigator.geolocation){

//     navigator.geolocation.getCurrentPosition( posicion => {

//         console.log(posicion);
//         lon= posicion.coords.longitude;
//         lat= posicion.coords.latitude;
const boton = document.getElementById("Buscar");
const input = document.getElementById("ciudad");
// const temp = document.querySelector('.temp');
// const sumary = document.querySelector('.temp-max');
// const local = document.querySelector('.name');
// const icono = document.querySelector('.temp-min');
// const description = document.querySelector(".description");
const contenedor = document.querySelector('.container');
 

 const traducciones = {
  // Cielo
  "clear sky": "despejado",
  "cielo claro": "despejado",

  // Nubes
  "few clouds": "pocas nubes",
  "algo de nubes": "parcialmente nublado",
  "scattered clouds": "nubes dispersas",
  "nubes dispersas": "pocas nubes",
  "broken clouds": "muy nublado",
  "overcast clouds": "nublado",
  "muy nuboso": "muy nublado",
  "nubes": "nublado",

  // Lluvia
  "light rain": "lluvia ligera",
  "lluvia ligera": "lluvia ligera",
  "moderate rain": "lluvia moderada",
  "heavy intensity rain": "lluvia fuerte",
  "very heavy rain": "lluvia muy fuerte",
  "extreme rain": "lluvia extrema",
  "chubasco de ligera intensidad": "lluvia ligera",
  "chubascos": "lluvias",
  "shower rain": "lluvia intermitente",
  "light intensity shower rain": "lluvia ligera",
  "heavy intensity shower rain": "lluvia fuerte",
  "ragged shower rain": "lluvia irregular",

  // Tormenta
  "thunderstorm": "tormenta eléctrica",
  "light thunderstorm": "tormenta eléctrica ligera",
  "heavy thunderstorm": "tormenta eléctrica fuerte",
  "ragged thunderstorm": "tormenta irregular",
  "tormenta": "tormenta eléctrica",

  // Nieve
  "light snow": "nieve ligera",
  "snow": "nieve",
  "heavy snow": "nieve fuerte",
  "sleet": "aguanieve",
  "light shower sleet": "aguanieve ligera",
  "shower sleet": "aguanieve",
  "light rain and snow": "lluvia ligera con nieve",
  "rain and snow": "lluvia con nieve",

  // Niebla y atmósfera
  "mist": "neblina",
  "smoke": "humo",
  "haze": "calina",
  "fog": "niebla",
  "sand": "arena",
  "dust": "polvo",
  "ash": "ceniza volcánica",
  "squalls": "ráfagas de viento",
  "tornado": "tornado"


};


boton.addEventListener("click", async(e) => {
    e.preventDefault()
    const ingresarCiudad = input.value
    console.log(ingresarCiudad) 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ingresarCiudad}&units=metric&appid=${API_KEY}&unit=metric&lang=es`;
   const data =  await datos(url)
    contenedor.innerHTML =`
     <h2 class= "nombreCiudad"> ${data.name} </h2>
        <p class ="tempActual>temp: ${data.main.temp} </p>
        <p class ="tempMin">temp-min: ${data.main.temp_min}</p>
        <p class ="tempMax">temp-max: ${data.main.temp_max}</p>
        <p class = "Descripcion">descripcion: ${traducciones[data.weather[0].description] || data.weather[0].description} </p>
    `
})



async function datos(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        return data
    } catch (err) {
        console.log(err)
    }
}







