

    
      function initialize() {

 	 var threeM = new google.maps.LatLng(44.9531, -92.9953); //Maplewood MN
 	 var americanExpress = new google.maps.LatLng(40.7127,-74.0059); //New York City
 	 var ATandT = new google.maps.LatLng(32.7767,-96.7970); //Dallas Texas
 	 var boeing = new google.maps.LatLng(41.8369,-87.6847); //Chicago IL
 	 var caterpiller = new google.maps.LatLng(40.7208,-89.6094); //Peoria IL
 	 var chevron = new google.maps.LatLng(37.7800,-121.9781); // San Ramon CA
 	 var ciscoSystems = new google.maps.LatLng(37.3382,-121.8863); // San Jose CA
	 var cocaCola = new google.maps.LatLng(33.7550,-84.3900); // Atlanta GA
	 var duPont = new google.maps.LatLng(39.7458,-75.5467); // Wilmington DE
	 var exxonMobil = new google.maps.LatLng(32.8117,-96.9508); // Irving TX
	 var generalElectric = new google.maps.LatLng(41.1758,-73.2719);  // Fairfield CT	
	 var goldmanSachs = new google.maps.LatLng(40.7127,-74.0059); // New York City
	 var theHomeDepot = new google.maps.LatLng(33.7550,-84.3900); // Atlanta GA
	 var intel = new google.maps.LatLng(37.3544,-121.9692); // Santa Clara CA
	 var IBM = new google.maps.LatLng(41.1286,-73.7078); //Armonk NY
	 var johnsonjohnson = new google.maps.LatLng(40.4867,-74.4444); // New Brunswick NJ
	 var jpMorganChase = new google.maps.LatLng(40.7127,-74.0059);  // New York City
	 var mcDonalds = new google.maps.LatLng(41.8400,-87.9531); // Oak Brook IL
	 var merck = new google.maps.LatLng(40.6774,-74.2893); // Kenilworth NJ
	 var microsoft = new google.maps.LatLng(47.6694,-122.1239); // Redmond WA
	 var nike = new google.maps.LatLng(45.5200,-122.6819); // Washington County OR
	 var pfizer = new google.maps.LatLng(40.7127,-74.0059); // New York City
	 var proctorGamble = new google.maps.LatLng(39.10000,-84.5167); // Cincinnati, OH
	 var travelers = new google.maps.LatLng(40.7127,-74.0059); // New York City
	 var unitedHealthGroup = new google.maps.LatLng(44.9133,-93.5033); // Minnetonka MN
	 var unitedTechnologies = new google.maps.LatLng(41.7627,-72.6743); // Hartford CT
	 var verizon = new google.maps.LatLng(40.7127,-74.0059); // New York City
	 var visa = new google.maps.LatLng(37.5514,-122.2664); // Foster City CA
	 var walmart = new google.maps.LatLng(39.3667,-94.2133); // Bentonville AR
	 var waltDisney = new google.maps.LatLng(34.1803,-118.3283); //Burbank, CA





	 var bounds = new google.maps.LatLngBounds();
        var map_canvas = document.getElementById('Maps_Image');
        var map_options = {
          center: new google.maps.LatLng(39.0997,-94.5783),  
          zoom: 5,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(map_canvas, map_options);

	var markers = [ 
		[threeM, 'styles/images/star.png','3M'],
		[americanExpress,'styles/images/star.png','American Express'],
		[ATandT,'styles/images/star.png', 'AT&T'],
		[boeing, 'styles/images/star.png', 'Boeing'],
		[caterpiller,'styles/images/star.png', 'Caterpiller'],
		[chevron,'styles/images/star.png', 'Chevron'],
		[ciscoSystems, 'styles/images/star.png', 'Cisco Systems'],
		[cocaCola, 'styles/images/star.png', 'Coca Cola'],
		[duPont, 'styles/images/star.png', 'Du Pont'],
		[exxonMobil, 'styles/images/star.png', 'Exxon Mobil'],
		[generalElectric, 'styles/images/star.png', 'General Electric'],
		[goldmanSachs, 'styles/images/star.png', 'Goldman Sachs'],
		[theHomeDepot, 'styles/images/star.png', 'The Home Depot'],
		[intel, 'styles/images/star.png', 'Intel'],
		[IBM, 'styles/images/star.png', 'IBM'],
		[johnsonjohnson, 'styles/images/star.png', 'Johnson & Johnson'],
		[jpMorganChase, 'styles/images/star.png', 'JP Morgan Chase'],
		[mcDonalds, 'styles/images/star.png', 'Mc Donalds'],
		[merck, 'styles/images/star.png', 'Merck'],
		[microsoft, 'styles/images/star.png', 'Microsoft'],
		[nike, 'styles/images/star.png', 'Nike'],
		[pfizer, 'styles/images/star.png', 'Pfizer'],
		[proctorGamble, 'styles/images/star.png', 'Proctor and Gamble'],
		[travelers, 'styles/images/star.png', 'Travelers'],
		[unitedHealthGroup, 'styles/images/star.png', 'United Health Group'],
		[unitedTechnologies, 'styles/images/star.png', 'United Tecnologies'],
		[verizon, 'styles/images/star.png', 'Verizon'],
		[visa, 'styles/images/star.png', 'Visa'],
		[walmart, 'styles/images/star.png', 'Wal Mart'],
		[waltDisney, 'styles/images/star.png', 'Walt Disney'],
 ];


	//var infoWindow = new google.maps.InfoWindow(), marker, i;

	//setup markers and infowindows
	for(i=0; i<markers.length; i++){
		//alert(markers[i][0]);
		//bounds.extend(markers[i][0]);
		marker = new google.maps.Marker({
			position: markers[i][0],
			icon: markers[i][1],
			title: markers[i][2],
			map: map,
			clickable: true,
			//flat: true,
			body: markers[i][3]
		});



		var apitest = function (){
			console.log("http://dev.markitondemand.com/Api/v2/quote/jsonp?symbol=DAL&callback=myFunction")
		} 
 

	//infowindows:
		/*google.maps.event.addListener(marker, 'mousedown', (function(marker,i) {
			return function(){
				infoWindow.open(map, marker);
			}
		})(marker, i));
		map.fitBounds(bounds);*/
	}//end for
   }// end initialize

     // google.maps.event.addDomListener(window, 'load', initialize);

    
    /*

	<script>
	document.getElementById("myBtn").addEventListener("click", displayDate);

	function displayDate() {
	    document.getElementById("demo").innerHTML = getJSON("http://dev.markitondemand.com/Api/v2/quote/jsonp?symbol=DAL&callback=myFunction");
	}*/
	