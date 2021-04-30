// {
//     "use strict";
//
//     // Helper Functions
//     let capitalize = ( str ) => str.split(' ').map( v => v[0].toUpperCase() + v.substr(1) ).join(' ');
//
//     // Weather API
//     function updateWeather(loc) {
//
//         // API KEY - 397d846fd5b9fe2272cc64987fbf61a6
//         let req = $.get('http://api.openweathermap.org/data/2.5/forecast', {
//             APPID:'397d846fd5b9fe2272cc64987fbf61a6',
//             lat: loc.lat,
//             lon: loc.lng,
//             units: 'imperial',
//             cnt: '24'
//         });
//
//         req.done( (data, status, jqXhr) => {
//
//             $("#weather").html('');
//
//             for(let i = 0; i < 24; i += 8) {
//
//                 let day = data.list[i];
//                 let dayString = new Date( day.dt_txt ).toLocaleString( 'en-us', { weekday: 'long' } );
//
//                 let html = '';
//                 html += '<div class="col-sm-4">';
//                 html += '<div class="well text-center">';
//                 html += `<h2>${dayString}</h2>`;
//                 html += `<p>${day.main.temp_min}&deg;F / ${day.main.temp_max}&deg;F</p>`;
//                 html += `<img src='http://openweathermap.org/img/w/${day.weather[0].icon}.png'></img>`
//                 html += `<p>${capitalize(day.weather[0].description)}</p>`;
//                 html += `<p>Humidity: ${day.main.humidity}%</p>`;
//                 html += `<p>Wind: ${day.wind.speed} mph</p>`;
//                 html += `<p>Pressure: ${day.main.pressure} hpa</p>`;
//                 html += '</div>';
//                 html += '</div>';
//
//                 $('#weather').append(html);
//             }
//         });
//
//         req.fail( (data, status, jqXhr) => {
//
//             if( ls ) {
//                 console.log( 'LocalStorage Fallback', JSON.parse( ls ) );
//             } else {
//                 console.log('No Weather Object in LocalStorage!');
//             }
//         });
//     }
//
//     // Google Maps API
//
//     let map, geocoder;
//
//     function lookUp( addr ) {
//         geocoder.geocode( { address: addr }, ( results, status ) => {
//             if( status == 'OK' ) {
//                 console.log('Geocoding Successful');
//                 map.setCenter(results[0].geometry.location);
//                 updateWeather(results[0].geometry.location);
//             } else {
//                 console.log('Geocoding Failed');
//             }
//         });
//     }
//
//     function initializeMap() {
//
//         let mapOpts = {
//             zoom: 10,
//             mapTypeId: google.maps.MapTypeId.ROADMAP,
//         }
//
//         map = new google.maps.Map(document.getElementById('map-canvas'), mapOpts);
//         geocoder = new google.maps.Geocoder();
//
//         $('#city').change( function() {
//             lookUp( $(this)[0].value );
//         });
//
//         lookUp( 'San Antonio' );
//     }
// }

{
    "use strict";

    // Helper Functions
    let capitalize = ( str ) => str.split(' ').map( v => v[0].toUpperCase() + v.substr(1) ).join(' ');

    // Weather API
    function updateWeather(loc) {

        // API KEY - 397d846fd5b9fe2272cc64987fbf61a6
        let req = $.get('http://api.openweathermap.org/data/2.5/forecast', {
            APPID:'397d846fd5b9fe2272cc64987fbf61a6',
            lat: loc.lat,
            lon: loc.lng,
            units: 'imperial',
            cnt: '24'
        });

        req.done( (data, status, jqXhr) => {

            $("#weather").html('');

            for(let i = 0; i < 24; i += 8) {

                let day = data.list[i];
                let dayString = new Date( day.dt_txt ).toLocaleString( 'en-us', { weekday: 'long' } );

                let html = '';
                html += '<div class="col-sm-4">';
                html += '<div class="well text-center">';
                html += `<h2>${dayString}</h2>`;
                html += `<p>${day.main.temp_min}&deg;F / ${day.main.temp_max}&deg;F</p>`;
                html += `<img src='http://openweathermap.org/img/w/${day.weather[0].icon}.png'></img>`
                html += `<p>${capitalize(day.weather[0].description)}</p>`;
                html += `<p>Humidity: ${day.main.humidity}%</p>`;
                html += `<p>Wind: ${day.wind.speed} mph</p>`;
                html += `<p>Pressure: ${day.main.pressure} hpa</p>`;
                html += '</div>';
                html += '</div>';

                $('#weather').append(html);
            }
        });

        req.fail( (data, status, jqXhr) => {

            if( ls ) {
                console.log( 'LocalStorage Fallback', JSON.parse( ls ) );
            } else {
                console.log('No Weather Object in LocalStorage!');
            }
        });
    }

    // Google Maps API

    let map, geocoder;

    function lookUp( addr ) {
        geocoder.geocode( { address: addr }, ( results, status ) => {
            if( status == 'OK' ) {
                console.log('Geocoding Successful');
                map.setCenter(results[0].geometry.location);
                updateWeather(results[0].geometry.location);
            } else {
                console.log('Geocoding Failed');
            }
        });
    }

    function initializeMap() {

        let mapOpts = {
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        }

        map = new google.maps.Map(document.getElementById('map-canvas'), mapOpts);
        geocoder = new google.maps.Geocoder();

        $('#city').change( function() {
            lookUp( $(this)[0].value );
        });

        lookUp( 'San Antonio' );
    }
}





