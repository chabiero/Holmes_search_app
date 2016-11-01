// Initialisation
var version= 1.0
var admin= "arnaud"
var born="07/02/2015"
var root="/files"
var dataimg="/img"
var keypass= "321421"
function init(){
	if(localStorage.getItem('key')=="1"){
		var loading="Initialisation..."
		document.getElementById("loader").style.visibility="visible";
		document.getElementById("loader").innerHTML=loading;
		var script = document.createElement('script');
        document.getElementsByTagName("head")[0].appendChild(script);
        var script1 = document.createElement('script');
		script1.type = 'text/javascript';
	    script1.src = 'script/database.js';
        document.getElementsByTagName("head")[0].appendChild(script1);
	setTimeout('document.getElementById("password").style.visibility="visible";document.getElementById("password").focus(); document.getElementById("loader").innerHTML="Unlock."', 700)
	}
	
}
function mapdebug(){
  var script = document.createElement('div');
  script.id="map";
  document.getElementsByTagName("body")[0].appendChild(script);
  L.mapbox.accessToken = 'pk.eyJ1IjoiZGlzY292ZXJ5IiwiYSI6InNCeWkxSU0ifQ.w8c0wlDWVA0rEdkMn9_wLQ';
  var geocoder = L.mapbox.geocoder('mapbox.places'),
  map = L.mapbox.map('map', 'examples.map-h67hf2ic');
  geocoder.query('Paris', showMap);


function showMap(err, data) {
    // The geocoder can return an area, like a city, or a
    // point, like an address. Here we handle both cases,
    // by fitting the map bounds to an area or zooming to a point.
    if (data.lbounds) {
        map.fitBounds(data.lbounds);
    } else if (data.latlng) {
        map.setView([data.latlng[0], data.latlng[1]], 13);
    }
}
}

function debug(){
	  setTimeout('var element = document.getElementById("map")',200);
      setTimeout('element.parentNode.removeChild(element)',200);
      setTimeout('document.getElementById("project_people").innerHTML="Remove map..."',200)
      setTimeout('var user = "test"',600);
      setTimeout('sessionStorage.setItem("user",user)',600)
setTimeout('document.getElementById("project_people").innerHTML=document.getElementById("project_people").innerHTML+"<br>Test <code>sessionLocal</code>..."',600);
      setTimeout('var test = sessionStorage.getItem("user")',1000);
setTimeout('document.getElementById("project_people").innerHTML=document.getElementById("project_people").innerHTML+"<br>Display <code>sessionLocal</code>: "+test',1000)
      setTimeout('mapdebug()',1400);
setTimeout('document.getElementById("project_people").innerHTML=document.getElementById("project_people").innerHTML+"<br>Showing Paris on the map..."',1400)
 setTimeout('back()',1800);
setTimeout('document.getElementById("project_people").innerHTML="Show panel: ok."',2300)
 setTimeout('document.getElementById("project_people").innerHTML="D E L T A con work on your computer. Loading D E L TA"',2700);
  setTimeout('location.reload()',4000);
      }
      
      function hack(){
	      mapdebug()
	      	document.getElementById("project_people").style.visibility="visible"
	      	

      }