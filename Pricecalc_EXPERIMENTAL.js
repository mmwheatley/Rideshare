<script src="http:/maps.google.com/maps?file=api&v=2&key= ARUN API FOR GOOGLE MAPS GOES HERE" type="text/javascript"></script>

<script src="http://maps.google.com/maps/api/js?sensor=false" type="text/javascript"></script>

// setup the variables that encode and display the two locations
// this is for calculating distance between two points

    var geocoder, location1, location2;

// setup the map variables
// this is for displaying the two points on the map using the DirectionService() API Call

    var directionDisplay;
    var directionsService = new google.maps.DirectionsService();
    var map;


    function initialize() {

// Initial map function
// this initiates the first map seen prior to calculating your selected locations

      directionsDisplay = new google.maps.DirectionsRenderer();

// default location is Chicago USA, perhaps change to your place of business?

      var chicago = new google.maps.LatLng(41.850033, -87.6500523);
      var myOptions = {
        zoom:7,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: chicago
      }
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    directionsDisplay.setMap(map);

    geocoder = new GClientGeocoder();

}



function showLocation() {
		geocoder.getLocations(document.forms[0].address1.value, function (response) {
			if (!response || response.Status.code != 200) {
				alert("Sorry, your start addess is required");
			} else {
				location1 = {lat: response.Placemark[0].Point.coordinates[1], lon: response.Placemark[0].Point.coordinates[0], address: response.Placemark[0].address};
				geocoder.getLocations(document.forms[0].address2.value, function (response) {
					if (!response || response.Status.code != 200) {
						alert("Sorry, your end address is required");
					} else {
						location2 = {lat: response.Placemark[0].Point.coordinates[1], lon: response.Placemark[0].Point.coordinates[0], address: response.Placemark[0].address};
						calculateDistance();

					}
				});
			}
		});
	}


  function calcRoute() {
      var start = document.getElementById("start").value;
      var end = document.getElementById("end").value;
      var request = {
          origin:start,
          destination:end,
          travelMode: google.maps.DirectionsTravelMode.DRIVING
      };
      directionsService.route(request, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
          directionsDisplay.setDirections(response);
        }
      });
  }


  // function to format currency

  function CurrencyFormatted(amount) {
  	var i = parseFloat(amount);
  	if(isNaN(i)) { i = 0.00; }
  	var minus = '';
  	if(i < 0) { minus = '-'; }
  	i = Math.abs(i);
  	i = parseInt((i + .005) * 100);
  	i = i / 100;
  	s = new String(i);
  	if(s.indexOf('.') < 0) { s += '.00'; }
  	if(s.indexOf('.') == (s.length - 2)) { s += '0'; }
  	s = minus + s;
  	return s;
  }


  // function to calculate distance

  	function calculateDistance()
  	{
  		try
  		{
  			var glatlng1 = new GLatLng(location1.lat, location1.lon);
  			var glatlng2 = new GLatLng(location2.lat, location2.lon);
  			var miledistance = glatlng1.distanceFrom(glatlng2, 3959).toFixed(1);
  			var kmdistance = (miledistance * 1.609344).toFixed(1);
  			document.getElementById('results').innerHTML = 'Address 1: ' + location1.address + ' (' + location1.lat + ':' + location1.lon + ')<br />Address 2: ' + location2.address + ' (' + location2.lat + ':' + location2.lon + ')<br />Distance: ' + miledistance + ' miles (or ' + kmdistance + ' kilometers)<br/>';
}
}

        // do our JS math here

            var rate = CurrencyFormatted(document.getElementById("price_per_mile").value);
            var fee = CurrencyFormatted(document.getElementById("admin_fee").value);
            var price = CurrencyFormatted(miledistance * rate);
            var total = CurrencyFormatted(Number(price) + Number(fee));

        			document.getElementById('price').innerHTML = miledistance +' multiplied by ' + rate + ' equals ' + price + '<br/> Price Amount Rounded to nearest digit equals: $' + Math.round(price*100)/100 + ' Dollars<br/><br/> Admin Fee of $' + fee + ' Dollars Plus Shipping Price of $' + price + ' Dollars equals $' + total +' Total';
        		}
        		catch (error)
        		{
        			alert(error);
        		}
        	}
