	var map;
  var button = document.querySelector('#satellite');
  button.addEventListener('click', () => {
    map.setMapTypeId('satellite'); //cambia a modo satellite
  })
		function initMap(){
      var mapOptions = {
        center:{lat: 19.88951, lng: -102.19723},
				zoom: 18,
				mapTypeId: 'terrain'
      }
			map = new google.maps.Map(document.getElementById('map'), mapOptions);
		}