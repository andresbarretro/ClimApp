const API_KEY ="4928748b0dacbf9612904fb8f811d5f7"

// elementos del DOM
const boton = document.getElementById("Buscar");
const input = document.getElementById("ciudad");

const contenedor = document.getElementById('container');
 
// traducciones de descripciones del clima
 const traducciones = {
  // Cielo
  "clear sky": " 🌤️ despejado",
  "cielo claro": "🌤️ despejado",

  // Nubes
  "few clouds": "🌤️ pocas nubes",
  "algo de nubes": "⛅parcialmente nublado",
  "scattered clouds": " 🌤️nubes dispersas",
  "nubes dispersas": "⛅pocas nubes",
  "broken clouds": "☁️ muy nublado",
  "overcast clouds": "☁️ nublado",
  "muy nuboso": "☁️ muy nublado",
  "nubes": "☁️ nublado",

  // Lluvia
  "light rain": "🌦️ lluvia ligera",
  "lluvia ligera": "🌦️ lluvia ligera",
  "moderate rain": "🌧️ lluvia moderada",
  "heavy intensity rain": " 🌧️ lluvia fuerte",
  "very heavy rain": "⛈️ lluvia muy fuerte",
  "extreme rain": "⛈️ lluvia extrema",
  "chubasco de ligera intensidad": "🌦️ lluvia ligera",
  "chubascos": "🌦️ lluvias",
  "shower rain": "🌦️ lluvia intermitente",
  "light intensity shower rain": "🌦️ lluvia ligera",
  "heavy intensity shower rain": "🌦️ lluvia fuerte",
  "ragged shower rain": "🌦️ lluvia irregular",

  // Tormenta
  "thunderstorm": "🌩️ tormenta eléctrica",
  "light thunderstorm": "🌩️ tormenta eléctrica ligera",
  "heavy thunderstorm": "⛈️ tormenta eléctrica fuerte",
  "ragged thunderstorm": "🌩️ tormenta irregular",
  "tormenta": "🌩️ tormenta eléctrica",

  // Nieve
  "light snow": "🌨️ nieve ligera",
  "snow": "🌨️ nieve",
  "heavy snow": "🌨️ nieve fuerte",
  "sleet": "🌨️ aguanieve",
  "light shower sleet": "🌨️ aguanieve ligera",
  "shower sleet": "🌨️ aguanieve",
  "light rain and snow": "🌨️ lluvia ligera con nieve",
  "rain and snow": "🌨️ lluvia con nieve",

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

// Evento al hacer clic en el botón
boton.addEventListener("click", async(e) => {
    e.preventDefault()
    // Limpiar el contenedor antes de mostrar nuevos datos
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }

    // Obtener el valor ingresado en el input
    const ingresarCiudad = input.value
    console.log(ingresarCiudad) 
    const urlClima = `https://api.openweathermap.org/data/2.5/weather?q=${ingresarCiudad}&units=metric&appid=${API_KEY}&unit=metric&lang=es`;
   const data =  await datos(urlClima)
   

   // Crear elementos para mostrar los datos del clima
    const titulo = document.createElement("h2");
    titulo.textContent = `El clima en ${data.name}`;
const tempActual = document.createElement("p");
    tempActual.textContent = `TempActual 🌡️ ${data.main.temp}`;
    
const tempMin = document.createElement("p");
    tempMin.textContent = `TempMin 🌡️${data.main.temp_min}`;
    
const tempMax = document.createElement("p");
    tempMax.textContent = `TempMax 🌡️${data.main.temp_min}`;
    
const Descripcion = document.createElement("p");
    Descripcion.textContent = ` ${traducciones[data.weather[0].description ] || data.weather[0].description}`;
    
    // Agregar los elementos al contenedor
    contenedor.appendChild(titulo);
    contenedor.appendChild(tempActual);
    contenedor.appendChild(tempMin);
    contenedor.appendChild(tempMax);
    contenedor.appendChild(Descripcion);
    


// Limpiar el input después de la búsqueda
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






})
