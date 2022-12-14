let city = document.getElementById('city-input');
const Http = new XMLHttpRequest();

function getlocation(){
    console.log('getLocation called!');

    let bdcApi = "https://api.bigdatacloud.net/data/revers-geocode-client"

    navigator.geolocation.getCurrentPosition(
        (position) => {
            bdcApi = bdcApi + "?latitude=" + position.coords.latitude + "&longitude" + position.coords.longitude + "&localityLanguage=en";
            getApi(bdcApi);
        },
        (err) => {
            getApi(bdcApi);
        },
        {
            enableHighAccuracy: true, timeout: 5000, maximumAge: 0
        }
    );
    
}

function getApi(bdcApi){
    Http.open("GET", bdcApi);
    Http.send();
    Http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            city.value = this.responseText;
        }
    };
}