// Copyright by Arnaud 2013-2016

var langage_utilisateur=navigator.language;

// fonction interface

function interface(erase_button,wordcasper,linker){
	document.getElementById("erase-button").style.visibility=erase_button;
	document.getElementById("wordcasper").style.visibility=wordcasper;
	var shortc= localStorage.getItem('shortc');
	
	if((linker===true)&&(shortc!=undefined)){
		document.getElementById("linker").style.opacity="1";
		document.getElementById("linker").style.visibility="visible";
		document.getElementById("shortcut-linker").style.visibility="visible"
		setTimeout('document.getElementById("wiki-linker").style.opacity="1"', 100);
		setTimeout('document.getElementById("wolf-linker").style.opacity="1"', 200);
		setTimeout('document.getElementById("lint-linker").style.opacity="1"', 300);
		setTimeout('document.getElementById("pint-linker").style.opacity="1"', 400);
		setTimeout('document.getElementById("yout-linker").style.opacity="1"', 500);
		setTimeout('document.getElementById("goog-linker").style.opacity="1"', 600);
		setTimeout('document.getElementById("shortcut-linker").style.opacity="1"', 700);
	}
		if((linker===true)&&(shortc==undefined)){
		document.getElementById("linker").style.opacity="1";
		document.getElementById("linker").style.visibility="visible";
		document.getElementById("shortcut-linker").style.opacity="0"
		setTimeout('document.getElementById("wiki-linker").style.opacity="1"', 100);
		setTimeout('document.getElementById("wolf-linker").style.opacity="1"', 200);
		setTimeout('document.getElementById("lint-linker").style.opacity="1"', 300);
		setTimeout('document.getElementById("pint-linker").style.opacity="1"', 400);
		setTimeout('document.getElementById("yout-linker").style.opacity="1"', 500);
		setTimeout('document.getElementById("goog-linker").style.opacity="1"', 600);
	}
	else if(linker===false){
		document.getElementById("linker").style.opacity="0";
		document.getElementById("linker").style.visibility="hidden";
		document.getElementById("wiki-linker").style.opacity="0";
		document.getElementById("wolf-linker").style.opacity="0";
		document.getElementById("lint-linker").style.opacity="0";
		document.getElementById("pint-linker").style.opacity="0";
		document.getElementById("yout-linker").style.opacity="0";
		document.getElementById("goog-linker").style.opacity="0";
		document.getElementById("shortcut-linker").style.opacity="0";
	}
}

// fonction d'initialisation du Linker

function linker(x){
	
	if(document.getElementById("link-txt").value.length>=1){
		
		//définition des variables
		
			var linker_txt = function(){
			var link_text=document.getElementById("link-txt").value
			link_text= link_text.split(" ");
			return link_text.join("%20");
			}

	var linkword=document.getElementById("link-txt").value;
	var wiki="http://fr.wikipedia.org/wiki/"+linker_txt();
	var wolf= "http://www.wolframalpha.com/input/?i="+linker_txt();
	var lint= "http://www.linternaute.com/dictionnaire/fr/definition/"+linker_txt()+"/";
	var pint= "http://pinterest.com/search/pins/?q="+linker_txt();
	var yout="http://www.youtube.com/results?search_query="+linker_txt();
	var goog="https://www.google.com/search?q="+linker_txt();
	setshortcut()
	console.log("Recherche du mot "+linkword+".")
	
	
		//actualisation de l'interface
		
		document.getElementById("wiki-linker").innerHTML="Wikipedia - "+linkword;
		document.getElementById("wolf-linker").innerHTML="Wolframalpha - "+linkword;
		document.getElementById("lint-linker").innerHTML="Linternaute - "+linkword;
		document.getElementById("pint-linker").innerHTML="Pinterest - "+linkword;
		document.getElementById("yout-linker").innerHTML="Youtube - "+linkword;
		document.getElementById("goog-linker").innerHTML="Google - "+linkword;
		
		if(x===1){
			window.open(wiki, '_blank');
			savehistory()
		}
		
		if(x===2){
			window.open(wolf, '_blank');
			savehistory()
		}
		
		if(x===3){
			window.open(lint, '_blank');
			savehistory()
		}
		
		if(x===4){
			window.open(pint, '_blank');
			savehistory()
		}
		if(x===5){
			window.open(yout, '_blank');
			savehistory()
		}
		if(x===6){
			window.open(goog, '_blank');
			savehistory()
		}
		if(x===7){
			setshortcut(1);
			savehistory()
		}
	interface("visible","hidden",true);
	
	}
	
	else if(document.getElementById("link-txt").value.length===0){
	
		//actualisation de l'interface
		
	interface("hidden","visible",false);
		
	}
	
}
	
	// fonction de rénitialisation de la barre de recherche
	
	function reset(){
		document.getElementById("link-txt").value="";
		linker();
	}
	
	// fonction pour ajouter un raccourci
	
	function shortcut(){
		appear('<div id="infotxt"><p>Add a shortcut by filling blanks with a URL and a name. Put "#" where we have to put the word.</p></div><input type="text" id="shortname" placeholder="Type the name of the shortcut." autofocus ><input type="text" id="shortadress" placeholder="Type the adress." autofocus ><div id="shortadd" onclick="addshortcut()">Add the shortcut</div>','Shortcut','y')
	}
	
function addshortcut(){
	var adress= document.getElementById("shortadress").value
	var name= document.getElementById("shortname").value
	document.getElementById("shortcut-linker").style.visibility="visible"
	document.getElementById("shortcut-linker").innerHTML=name
	localStorage.setItem("shortc", name+"@"+adress);
	closetowel()
}

function setshortcut(x){
	var shortc= localStorage.getItem('shortc');
	if(shortc!=undefined){
		var linkword=document.getElementById("link-txt").value;
		var shortdata= localStorage.getItem('shortc')
		shortd= shortdata.split("@");
		shorte= shortd[1].split("#")
		adress= shorte[0]+linkword+shorte[1]
		document.getElementById("shortcut-linker").innerHTML=shortd[0]+" - "+linkword
		if(x==1){
			window.open(adress, '_blank');
		}
	}
}