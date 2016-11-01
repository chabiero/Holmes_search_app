 // database 1.0
function start_database(){
	document.getElementById("project_people").innerHTML="<div id='logo'>D E L T A</div><div id='add'><input type='text' id='myname' placeholder='Name'><input type='text' id='surname' placeholder='Surname'><input type='text' id='country' placeholder='Country'><input type='text' id='city' placeholder='City'></div><div id='input' onclick='input()'></div></div>"
}
function input(){
	var myname= document.getElementById("myname").value;
	var surname= document.getElementById("surname").value;
	var country= document.getElementById("country").value;
	var city= document.getElementById("city").value;
  	document.getElementById("project_people").innerHTML="<div id='logo'>D E L T A</div><div id='hearth'></div><textarea resize='none' id='talk_base' contenteditable='true' onkeyup='ia_delta()' placeholder='Write something...'></textarea><div id='voice'>Hello!</div>"
  	    var audio = document.getElementById('source');
        var source = document.getElementById('mp3Source');
        source.src='files/name.mp3';

        audio.load(); //call this to just preload the audio without playing
        audio.play(); //call this to play the song right away
  // initialize ia
        var script1 = document.createElement('script');
		script1.type = 'text/javascript';
	    script1.src = 'script/ia.js';
        document.getElementsByTagName("head")[0].appendChild(script1);
  // initialize map
  
  var element = document.getElementById("map");
  element.parentNode.removeChild(element);
  var script = document.createElement('div');
  script.id="map";
  document.getElementsByTagName("body")[0].appendChild(script);
  L.mapbox.accessToken = 'pk.eyJ1IjoiZGlzY292ZXJ5IiwiYSI6InNCeWkxSU0ifQ.w8c0wlDWVA0rEdkMn9_wLQ';
  var geocoder = L.mapbox.geocoder('mapbox.places'),
  map = L.mapbox.map('map', 'examples.map-h67hf2ic');
  geocoder.query(city, showMap);


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

 // saving data
 
sessionStorage.setItem("user",myname+" "+surname+" "+city+" "+country)
}
function back(){
	document.getElementById("project_people").innerHTML="<div id='logo'>D E L T A</div><ul id='features'><li onclick='start_database()'>Start a new project</li><li onclick='data_display()'>Open a project...</li></ul>"
}