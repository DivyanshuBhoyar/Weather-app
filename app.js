window.addEventListener('load', () => {
    let long ;
    let lat ;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree') ;
    let locationTimezone = document.querySelector('.location-timezone')
   var iconhtml = document.querySelector('.location-img')
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude ;
            console.log(lat, long);

            const api = 'https://api.openweathermap.org/data/2.5/onecall?lat='+lat +'&lon='+long +'&exclude=daily&appid=ccc4ee3876879b9f7d11055292ad4cd0'
            fetch(api).then(response => {
                return response.json();
            }).then(data => {
                console.log(data);
                const {temp, weather: [{description , icon}]  } = data.current ;
                console.log(temp ,description , icon);
                temperatureDegree.textContent = (temp - 273).toFixed(2) ;
                locationTimezone.textContent = data.timezone ;
                temperatureDescription.textContent = description
                iconhtml.src = 'http://openweathermap.org/img/wn/'+icon +'@2x.png'

            }) ;
        }) ;
        
    }
   
})