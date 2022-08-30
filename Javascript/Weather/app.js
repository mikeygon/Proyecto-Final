 const case1 = document.getElementById('tiemp1')
 const ic1 = document.getElementById('icono1')
 const ic2 = document.getElementById('icono2')
 const ic3 = document.getElementById('icono3')
 const case2 = document.getElementById('tiemp2')
 const case3 = document.getElementById('tiemp3')
 const API_Key = '3be247e9985354236dd67d25850f48d3';
 const Api_hours = '6097549e1fa9b073dd8747a04d313357'; 
 const btnSwitch = document.querySelector('#switch')

  const fetchData = position => {
      const {latitude, longitude} = position.coords;
      fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${API_Key}`)
         .then(response => response.json())
         .then(data => setWeatherData(data))

     const setWeatherData = data => {
         console.log(data);
         const weatherData = {
             location: data.name,
             description: data.weather[0].main,
             humidity: `${data.main.humidity} %`,
             wind: `${data.wind.speed} m/s`,
             temperature: `${data.main.temp} °C`,
             tempMin: `Min: ${data.main.temp_min} °C`,
             tempMax: `Max: ${data.main.temp_max} °C`,
             date: getDate(),
         }

         

     switch (data.weather[0].main) {
         case 'Clear':
             iconoAnimado.src = '/amcharts_weather_icons_1.0.0/animated/day.svg'
              console.log('LIMPIO')
             break;
         case 'Cloudy':
             iconoAnimado.src = '/amcharts_weather_icons_1.0.0/animated/cloudy-day-1.svg'
             console.log('NUBLAD')
             break;
         case 'Smoke':
             iconoAnimado.src = '/amcharts_weather_icons_1.0.0/animated/night.svg'
             console.log('NIEBLA')
             break;
         case 'Clouds':
             iconoAnimado.src = '/amcharts_weather_icons_1.0.0/animated/cloudy-day-3.svg'
             console.log('NUBLAD')
             break;
         case 'Night':
             iconoAnimado.src = '/amcharts_weather_icons_1.0.0/animated/night.svg'
             console.log('NOCHE')
             break;
         case 'Rainy':
             iconoAnimado.src = '/amcharts_weather_icons_1.0.0/animated/rainy-1.svg'
             console.log('LLOVIENDO')
             break;
         case 'Drizzle':
             iconoAnimado.src = '/amcharts_weather_icons_1.0.0/animated/rainy-4.svg'
             console.log('LLOVIZNANDO')
             break;
         case 'Snowy':
             iconoAnimado.src = '/amcharts_weather_icons_1.0.0/animated/snowy-1.svg'
             console.log('NEVANDO')
             break;
         case 'Thunder':
             iconoAnimado.src = '/amcharts_weather_icons_1.0.0/animated/thunder.svg'
             console.log('TRONANDO')
             break;
     }


     fetch(`https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=${latitude}&lon=${longitude}&appid=${API_Key}`)
         .then(response => response.json())
         .then(dato => {
           let temp1 = dato.list[4].main.temp
           let dia1 = dato.list[4].dt_txt
           let icon1 = dato.list[4].weather[0].main
           case1.textContent = `${temp1} C°`
           ic1.textContent = icon1
           let temp2 = dato.list[11].main.temp
           let dia2 = dato.list[11].dt_txt
           let icon2 = dato.list[11].weather[0].main
           case2.textContent = ` ${temp2} C°`
           ic2.textContent = icon2
           let temp3 = dato.list[19].main.temp
           let dia3 = dato.list[19].dt_txt
           let icon3 = dato.list[19].weather[0].main
           case3.textContent = ` ${temp3} C°`
           ic3.textContent = icon3
            console.log(dato);

        
            switch (icon1) {
                case 'Clear':
                    ic1.src = '/amcharts_weather_icons_1.0.0/animated/day.svg'
                     console.log('LIMPIO')
                    break;
                case 'Cloudy':
                    ic1.src = '/amcharts_weather_icons_1.0.0/animated/cloudy-day-1.svg'
                    console.log('NUBLADO')
                    break;
                case 'Clouds':
                    ic1.src = '/amcharts_weather_icons_1.0.0/animated/cloudy-day-3.svg'
                    console.log('NUBLAD')
                    break;
                case 'Night':
                    ic1.src = '/amcharts_weather_icons_1.0.0/animated/night.svg'
                    console.log('NOCHE')
                    break;
                case 'Rain':
                    ic1.src = '/amcharts_weather_icons_1.0.0/animated/rainy-1.svg'
                    console.log('LLOVIENDO')
                    break;
                case 'Drizzle':
                    ic1.src = '/amcharts_weather_icons_1.0.0/animated/rainy-4.svg'
                    console.log('LLOVIZNANDO')
                    break;
                case 'Snowy':
                    ic1.src = '/amcharts_weather_icons_1.0.0/animated/snowy-1.svg'
                    console.log('NEVANDO')
                    break;
                case 'Thunder':
                    ic1.src = '/amcharts_weather_icons_1.0.0/animated/thunder.svg'
                    console.log('TRONANDO')
                    break;
            }

            switch (icon2) {
                case 'Clear':
                    ic2.src = '/amcharts_weather_icons_1.0.0/animated/day.svg'
                     console.log('LIMPIO')
                    break;
                case 'Cloudy':
                    ic2.src = '/amcharts_weather_icons_1.0.0/animated/cloudy-day-1.svg'
                    console.log('NUBLADO')
                    break;
                case 'Clouds':
                    ic2.src = '/amcharts_weather_icons_1.0.0/animated/cloudy-day-3.svg'
                    console.log('NUBLAD')
                    break;
                case 'Night':
                    ic2.src = '/amcharts_weather_icons_1.0.0/animated/night.svg'
                    console.log('NOCHE')
                    break;
                case 'Rain':
                    ic2.src = '/amcharts_weather_icons_1.0.0/animated/rainy-1.svg'
                    console.log('LLOVIENDO')
                    break;
                case 'Drizzle':
                    ic2.src = '/amcharts_weather_icons_1.0.0/animated/rainy-4.svg'
                    console.log('LLOVIZNANDO')
                    break;
                case 'Snowy':
                    ic2.src = '/amcharts_weather_icons_1.0.0/animated/snowy-1.svg'
                    console.log('NEVANDO')
                    break;
                case 'Thunder':
                    ic2.src = '/amcharts_weather_icons_1.0.0/animated/thunder.svg'
                    console.log('TRONANDO')
                    break;
            }

            switch (icon3) {
                case 'Clear':
                    ic3.src = '/amcharts_weather_icons_1.0.0/animated/day.svg'
                     console.log('LIMPIO')
                    break;
                case 'Cloudy':
                    ic3.src = '/amcharts_weather_icons_1.0.0/animated/cloudy-day-1.svg'
                    console.log('NUBLADO')
                    break;
                case 'Clouds':
                    ic3.src = '/amcharts_weather_icons_1.0.0/animated/cloudy-day-3.svg'
                    console.log('NUBLAD')
                    break;
                case 'Night':
                    ic3.src = '/amcharts_weather_icons_1.0.0/animated/night.svg'
                    console.log('NOCHE')
                    break;
                case 'Rain':
                    ic3.src = '/amcharts_weather_icons_1.0.0/animated/rainy-1.svg'
                    console.log('LLOVIENDO')
                    break;
                case 'Drizzle':
                    ic3.src = '/amcharts_weather_icons_1.0.0/animated/rainy-4.svg'
                    console.log('LLOVIZNANDO')
                    break;
                case 'Snowy':
                    ic3.src = '/amcharts_weather_icons_1.0.0/animated/snowy-1.svg'
                    console.log('NEVANDO')
                    break;
                case 'Thunder':
                    ic3.src = '/amcharts_weather_icons_1.0.0/animated/thunder.svg'
                    console.log('TRONANDO')
                    break;
            }
    
          });

         Object.keys(weatherData).forEach( key => {
             document.getElementById(key).textContent = weatherData[key];
         });
       
     }
  }
  


 const getDate = () =>{
     let date = new Date();
     return`${date.getDate()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${date.getFullYear()}`
 }

 const onLoad = () => {
     navigator.geolocation.getCurrentPosition(fetchData);
}

const currentTime = () => {
    const el = document.querySelector('.hora')

    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    hh = hh < 10 ? `0${hh}` : hh;
    mm = mm < 10 ? `0${mm}` : mm;
    ss = ss < 10 ? `0${ss}` : ss;


    let time = `${hh}:${mm}:${ss}`
    el.innerText = time;
}

currentTime();
setInterval(currentTime, 1000);

const futDays1 = () => {
    const df1 = document.querySelector('#d-1')
       const getDate = () =>{
        let d = new Date();
        return`${d.getDate() + 1}.${('0' + (d.getMonth() + 1)).slice(-2)}.${d.getFullYear()}`
        
    }
    let dias1 = `${getDate()}`
    df1.innerText = dias1
}
futDays1();

const futDays2 = () => {
    const df2 = document.querySelector('#d-2')
    
    const getDate = () =>{

        let d2 = new Date();
        return`${d2.getDate() + 2}.${('0' + (d2.getMonth() + 1)).slice(-2)}.${d2.getFullYear()}`
    }
    let dias2 = `${getDate()}`
    df2.innerText = dias2   
}
futDays2();


const futDays3 = () => {
    const df2 = document.querySelector('#d-3')
    
    const getDate = () =>{

        let d3 = new Date();
        return`${d3.getDate() + 3}.${('0' + (d3.getMonth() + 1)).slice(-2)}.${d3.getFullYear()}`
    }
    let dias3 = `${getDate()}`
    df2.innerText = dias3  
}
futDays3();

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
})