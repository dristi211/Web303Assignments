/*
    Assignment #4
    Dristi Khondkar
    0811195
*/

$(function () {
    // your code here
    
 // 1. Use geolocation to find the current location of the user's machine
     if ("geolocation" in navigator) {
     navigator.geolocation.getCurrentPosition(function (position) {
      let currentLocation = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
      accuracy: position.coords.accuracy
         };
                        
  document.getElementById("locationhere").innerText = `Current Location: Latitude: ${currentLocation.lat}, Longitude: ${currentLocation.lng}`;
    
      // For bonus we have to display accuracy

 document.getElementById("accuracyMessage").innerText = `Accuracy: ${currentLocation.accuracy}  meter`;     
 document.getElementById("accuracyMessage").innerText = `Accuracy: ${currentLocation.accuracy/1000}  km`;

    
    // 2. Check to see if a location value is already stored in localstorage.
     let storedLocation = localStorage.getItem("location");
    
     if (storedLocation) {
       storedLocation = JSON.parse(storedLocation);
      document.getElementById("previousLocation").innerText = `Previous Location: Latitude: ${storedLocation.lat}, Longitude: ${storedLocation.lng}`;
    
        // Welcome message for returning visitor
     document.getElementById("welcomeMessage").innerText = "Welcome back!";
    
     // Using a function to compare the distance

     let distance = compareDistance(currentLocation, storedLocation); //  function name is compareDistance
    
    // Display distance traveled

    document.getElementById("distanceMessage").innerText = `You've traveled approximately ${distance / 1000} km since your last visit.`;
    
      } else {

  // 3. If there is no location value already stored in localstorage, welcome the user for the first time.

   document.getElementById("welcomeMessage").innerText = "Welcome to the page for the first time!";
                        }
    
// 4. Store the current location values in localstorage.

 localStorage.setItem("location", JSON.stringify(currentLocation));
    
     }, function (error) {
    console.error("Error obtaining geolocation: ", error);
         });
        } else {
                    alert("Geolocation is not supported by this browser.");
                }
            });
    
      
    // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        var toRadians = function (num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2 - lat1);
        var Δλ = toRadians(lon2 - lon1);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return (R * c);
    }



