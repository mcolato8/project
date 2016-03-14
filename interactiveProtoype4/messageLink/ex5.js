//Javascript

//check that the html is loaded 

window.onload=function(){
    console.log("boom");
    


document.f.onsubmit = processForm;

function processForm(){
 
    var userName = document.f.userName.value;
    
    var date =
        document.f.date.value;
    
    var message = 
        document.f.message.value;
    
    console.log("userName" + userName);
    if (userName == "" || date == "" || message == ""){
        alert("please fill in the blanks");
    }
}

function resetPage() {
    myMsg.innerHTML = "";
    userName.value="";
    date.value="";
    message.value="";
    
}
}

 function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: {lat: 38.544564, lng: -121.750445}
        });

        var marker = new google.maps.Marker({
          map: map,
          // Define the place with a location, and a query string.
          place: {
            location: {lat: 38.544564, lng: -121.750445},
            query: 'Google, Davis, California'

          },
          // Attributions help users find your site again.
          attribution: {
            source: 'Google Maps JavaScript API',
            webUrl: 'https://developers.google.com/maps/'
          }
        });
     
        // Construct a new InfoWindow.
        var infoWindow = new google.maps.InfoWindow({
          content: 'Davis,CA '
        });

        // Opens the InfoWindow when marker is clicked.
        marker.addListener('click', function() {
          infoWindow.open(map, marker);
        });
      
 }

