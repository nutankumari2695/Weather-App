const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherbox = document.querySelector('.weather-box');
const weatherdetail = document.querySelector('.weather-detail');
const errorgive = document.querySelector('.not-found');
const cityhide = document.querySelector('.city-hide');

search.addEventListener('click', () => {
    const APIkey = '14612eeaf4a94f62aeb97d6c23fc9efa';
    const city = document.querySelector('.search-box input').value.trim();
    
    if (city === '') {
        return;
    }
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`)
        .then(response => response.json())
        .then(json => {
            if (json.cod === '404') {
                cityhide.textContent = city;
                container.style.height = '400px';
                weatherbox.classList.remove('active');
                weatherdetail.classList.remove('active');
                errorgive.classList.add('active');
                return;
            }
            
            container.style.height = '555px';
            container.classList.add('active');
            weatherbox.classList.add('active');
            weatherdetail.classList.add('active');
            errorgive.classList.remove('active');
            cityhide.textContent = city;
            // setTimeout(() =>{
            //     container.classList.remove('active'); 
            // })

            const image = document.querySelector('.weather-box img');
            const temp = document.querySelector('.weather-box .temp');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-detail .humidity span');
            const wind = document.querySelector('.weather-detail .wind span');

            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = 'images/clear.png';
                    break;
                case 'Rain':
                    image.src = 'images/rain.png';
                    break;
                case 'Snow':
                    image.src = 'images/snow.png';
                    break;
                case 'Mist':
                case 'Haze':
                    image.src = 'images/mist.png';
                    break;
                default:
                    image.src = 'images/cloud.png';
            }

            temp.innerHTML = `${parseInt(json.main.temp)}<span>&deg;C</span>`;

            // temp.innerHTML = `${parseInt(json.main.temp)}<span>C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}km/h`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
});



// const container = document.querySelector('.container');
// const search = document.querySelector('.search-box button');
// const weatherbox = document.querySelector('.weather-box');
// const weatherdetail = document.querySelector('.weather-detail');
// const errorgive = document.querySelector('.not-found');
// const cityhide = document.querySelector('.city-hide');

// search.addEventListener('click', () => {
//     const APIkey = '14612eeaf4a94f62aeb97d6c23fc9efa';
//     const city = document.querySelector('.search-box input').value.trim();
    
//     if (city === '') {
//         return;
//     }
    
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`)
//         .then(response => response.json())
//         .then(json => {
//             if (json.cod === '404') {
//                 cityhide.textContent = city;
//                 container.style.height = '400px';
//                 weatherbox.classList.remove('active');
//                 weatherdetail.classList.remove('active');
//                 errorgive.classList.add('active');
//                 return;
//             }
            
//             container.style.height = '555px';
//             container.classList.add('active');
//             weatherbox.classList.add('active');
//             weatherdetail.classList.add('active');
//             errorgive.classList.remove('active');
//             cityhide.textContent = city;
//             setTimeout(() =>{
//                 container.classList.remove('active'); 
//             },8500)

//             const image = document.querySelector('.weather-box img');
//             const temp = document.querySelector('.weather-box .temp');
//             const description = document.querySelector('.weather-box .description');
//             const humidity = document.querySelector('.weather-detail .humidity span');
//             const wind = document.querySelector('.weather-detail .wind span');

//             switch (json.weather[0].main) {
//                 case 'Clear':
//                     image.src = 'images/clear.png';
//                     break;
//                 case 'Rain':
//                     image.src = 'images/rain.png';
//                     break;
//                 case 'Snow':
//                     image.src = 'images/snow.png';
//                     break;
//                 case 'Mist':
//                 case 'Haze':
//                     image.src = 'images/mist.png';
//                     break;
//                 default:
//                     image.src = 'images/cloud.png';
//             }

//             temp.innerHTML = `${parseInt(json.main.temp)}<span>C</span>`;
//             description.innerHTML = `${json.weather[0].description}`;
//             humidity.innerHTML = `${json.main.humidity}%`;
//             wind.innerHTML = `${parseInt(json.wind.speed)}km/h`;

//             const infoweather = document.querySelector('.info-weather');
//             const infohumidity = document.querySelector('.info-humidity');
//             const infowind = document.querySelector('.info-wind');

//             const cloneweather = infoweather.cloneNode(true);
//             const clonehumidity = infohumidity.cloneNode(true);
//             const clonewind = infowind.cloneNode(true);

//             cloneweather.id = 'clone-info-weather';
//             cloneweather.classList.add('active-clone');

//             clonehumidity.id = 'clone-info-humidity';
//             clonehumidity.classList.add('active-clone');

//             clonewind.id = 'clone-info-wind';
//             clonewind.classList.add('active-clone');


//             // setTimeout(() =>{
//             //     infoweather.insertAdjacentElement("afterend", cloneweather);
//             //     infohumidity.insertAdjacentElement("afterend", clonehumidity);
//             //     infowind.insertAdjacentElement("afterend", clonewind);

//             // },2500);
        
//         const cloneinfoweather = document.querySelectorAll('.info-weather.active-clone');
//         const tcw = cloneinfoweather.length;
//         const cloneinfoweatherfirst = cloneinfoweather[0];


//         const cloneinfohumidity = document.querySelectorAll('.info-humidity.active-clone');
       
//         const cloneinfohumidityfirst = cloneinfohumidity[0];

//         const cloneinfowind = document.querySelectorAll('.info-wind.active-clone');
       
//         const cloneinfowindfirst = cloneinfowind[0];


//         // if(tcw > 0){
//         //     cloneinfoweatherfirst.classList.remove('active-clone');
//         //     cloneinfohumidityfirst.classList.remove('active-clone');
//         //     cloneinfowindfirst.classList.remove('active-clone');

//         //     setTimeout(() =>{
//         //         cloneinfoweatherfirst.remove();
//         //         cloneinfohumidityfirst.remove();
//         //         cloneinfowindfirst.remove();
//         //     },2000);

//         //   }
//         })
//         .catch(error => {
//             console.error('Error fetching weather data:', error);
//         });
// });













