// Copyright by Arnaud 2013-1016

//Ensemble des variables ajustables

var version=1.1;
var message_debut=false;
var contenumessage_debut="Vous utilisez une version Beta de Holmes.";
var corefile_name="core";
var debugfile_name="debug"

// Fonction statut

function status(x){

var name=localStorage.getItem('name');
var surname=localStorage.getItem('surname');

var bilan= function(){
	if(x==undefined){
		return ""
	}
	if(x!=undefined){
		return "<li> Debug <ul><li>"+x+"</li></ul></ul>"
	}
}


appear('<div id="infotxt"><ul><li>System status<ul><li>Version: '+version+'</li><li>Message_debut status: <code>'+message_debut+'</code></li><li>Linker file: <code>'+corefile_name+'.js</code></li><li>Debug file: <code>'+debugfile_name+'.js</code></li></li></ul><li>User data<ul><li>Name: '+name+'</li><li>Surname: '+surname+'</li></ul>'+bilan()+'</div>',"Status","y")
}
//Lancement de l'application

function launch(){

	if(navigator.onLine==true){

		setTimeout("script_incruste('popwindow')", 100);
		setTimeout("script_incruste('"+corefile_name+"')", 200)
		setTimeout("script_incruste('feel')", 300)
		setTimeout("script_incruste('historique')", 400)
		setTimeout("script_incruste('"+debugfile_name+"')", 500)
		setTimeout("script_incruste('things')", 600)
		setTimeout("apply_holmesstyle()", 700)
		setTimeout("config();", 800);
		setTimeout("document.getElementById('link-txt').focus();", 1200)

		if(localStorage.getItem('casper')!=undefined){
			var data= localStorage.getItem('casper')
			var casp= localStorage.getItem('casper').split("+/")
			var l=casp.length
			var t=""
			var lo=2
				for (var i=0;i<l;i++){
				var t= t+"<li id="+i+" onClick='effect ("+i+")'>"+casp[i]+"</li>"
				}
			document.getElementById("wordcasper").innerHTML='<div id="txt-word">Maybe you are looking for:</div><ul id="wordli">'+t+'</ul>'
		}

		if(message_debut==true){
			setTimeout('appearmsg("'+contenumessage_debut+'","Holmes hello");',2000);
		}

	}

	else{
		document.getElementById("progress").innerHTML="You are not connected";
	}
}

//Fonction installation des fichiers JS

function script_incruste(fichier){
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = fichier+'.js';
	document.getElementsByTagName("head")[0].appendChild(script)
}

function apply_holmesstyle(){
	var widthwindow= document.body.clientWidth;

	document.getElementById("lapp-logo").style.marginTop="120px";
	document.getElementById("link-txt").style.opacity="1";
	document.getElementById("link-txt").style.visibility="visible";

	if(widthwindow<=600){
		setTimeout('document.getElementById("popwindow").style.height="100%"', 0);
		setTimeout('document.getElementById("popwindow").style.width="100%"', 0);
		setTimeout('document.getElementById("popwindow").style.top="0"', 0);
		setTimeout('document.getElementById("popwindow").style.marginTop="0px"', 0);
		setTimeout('document.getElementById("popwindow").style.marginLeft="-50%"', 0);
	}
	if(widthwindow>600){
		setTimeout('document.getElementById("popwindow").style.height="400px"', 0);
		setTimeout('document.getElementById("popwindow").style.width="80%"', 0);
		setTimeout('document.getElementById("popwindow").style.top="50%"', 0);
		setTimeout('document.getElementById("popwindow").style.marginLeft="-40%"', 0);
		setTimeout('document.getElementById("popwindow").style.marginTop="-200px"', 0);
	}
}
function errorcase(){
	appearmsg("Something went wrong. If that often happens, please launch the debug program.","Oh...")
	if(localStorage.getItem('erreur')==undefined){
	localStorage.setItem("erreur", "1");
	}
	else{
		var nume= parseInt(localStorage.getItem('erreur'))+parseInt("1");
	localStorage.setItem("erreur", nume);
	}
}
function settingsslide(){
	if(localStorage.getItem('language')=="english"){
		document.getElementById('slidebar').innerHTML='<div id="title-slidebar">Settings</div><ul id="settingsul1"><span id="language-title">Language</span><li onclick="en()">English</li><li onclick="fr()">French</li></ul><ul id="settingsul2"><span id="theme-title">Theme</span><li onclick="light()">Light</li><li onclick="dark()">Dark</li></ul><ul id="settingsul3"><span id="app-title">Apps</span><li onclick="historic()">History</li><li onclick="debug()">Debug</li><li onclick="status()">About</li></ul><div id="close-slidebar" onclick="closeslide()"></div>'
}
if(localStorage.getItem('language')=="french"){
		document.getElementById('slidebar').innerHTML='<div id="title-slidebar">Préférence</div><ul id="settingsul1"><span id="language-title">Language</span><li onclick="en()">English</li><li onclick="fr()">French</li></ul><ul id="settingsul2"><span id="theme-title">Theme</span><li onclick="light()">Light</li><li onclick="dark()">Dark</li></ul><ul id="settingsul3"><span id="app-title">Apps</span><li onclick="historic()">Historique</li><li onclick="about()">A propos</li></ul><div id="close-slidebar" onclick="closeslide()"></div>'
}
	document.getElementById('slidebar').style.marginLeft="0px"
}
function closeslide(){
	document.getElementById('slidebar').style.marginLeft="-300px"
}
function dark(){
	localStorage.setItem("darkmode", "ok");
	document.getElementById('bar').style.backgroundColor="#292929"
	document.body.style.backgroundColor="black"
document.getElementById("logo-title").style.color="white"
document.getElementById("search-button").style.backgroundColor="#292929"
document.getElementById("erase-button").style.backgroundColor="#292929"
document.getElementById("wordli").style.backgroundColor="#292929"
document.getElementById("sidebar").style.backgroundColor="#292929"

}
function light(){
	localStorage.setItem("darkmode", "ok");
	document.getElementById('slidebar').style.backgroundColor="white"
	document.body.style.backgroundColor="#f5f5f5"
}
function apname(){
	document.getElementById("aboutuser").style.visibility="visible"
}

function more(){
		if(document.getElementById("shortcut").style.visibility=="visible"){
		document.getElementById("shortcut").style.visibility="hidden"
		document.getElementById("refresh").style.visibility="hidden"
		document.getElementById("shortcut").style.opacity="0"
		document.getElementById("refresh").style.opacity="0"
		document.getElementById("sidebar").style.webkitTransform = 'rotate(0deg)';
		document.getElementById("sidebar").style.mozTransform = 'rotate(0deg)';
		document.getElementById("sidebar").style.msTransform = 'rotate(0deg)';
	    document.getElementById("sidebar").style.oTransform = 'rotate(0deg)';
		document.getElementById("sidebar").style.transform = 'rotate(0deg)';
		}
		else{
		document.getElementById("shortcut").style.visibility="visible"
		document.getElementById("refresh").style.visibility="visible"
		document.getElementById("shortcut").style.opacity="1"
		document.getElementById("refresh").style.opacity="1"
		document.getElementById("sidebar").style.webkitTransform = 'rotate(45deg)';
		document.getElementById("sidebar").style.mozTransform = 'rotate(45deg)';
		document.getElementById("sidebar").style.msTransform = 'rotate(45deg)';
	    document.getElementById("sidebar").style.oTransform = 'rotate(45deg)';
		document.getElementById("sidebar").style.transform = 'rotate(45deg)';
		}
	}
	function refresh(){
		var configdone= localStorage.getItem('configdone');
		document.getElementById("lapp").style.opacity="1";
		document.getElementById("lapp").style.visibility="visible";
		document.getElementById("link-txt").value=null
		document.getElementById("shortcut").style.visibility="hidden"
		document.getElementById("refresh").style.visibility="hidden"
		document.getElementById("shortcut").style.opacity="0"
		document.getElementById("refresh").style.opacity="0"
		document.getElementById("sidebar").style.webkitTransform = 'rotate(0deg)';
		document.getElementById("sidebar").style.mozTransform = 'rotate(0deg)';
		document.getElementById("sidebar").style.msTransform = 'rotate(0deg)';
	    document.getElementById("sidebar").style.oTransform = 'rotate(0deg)';
		document.getElementById("sidebar").style.transform = 'rotate(0deg)';
		closeslide();
		closetowel();
		closetowelmsg();
		setTimeout('launch()', 1000)
		if(configdone!="done"){
		window.location.reload()
	}
	}
