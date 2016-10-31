function linker(){
	var lg=navigator.language;
	var adress="http://"+lg+".wikipedia.org/wiki/";
	var linkword=document.getElementById("link-txt").value.toLowerCase();
	var link= linkword.split(" ");
	var link2= linkword.split("");
	var linklink= link.join("%20")
	var wiki="http://fr.wikipedia.org/wiki/"+linklink
	var wolf= "http://www.wolframalpha.com/input/?i="+linklink
	var lint= "http://www.linternaute.com/dictionnaire/fr/definition/"+linklink+"/"
	var pint= "http://pinterest.com/search/pins/?q="+linklink
	var goog="https://www.google.com/search?q="+linklink
	var yout="http://www.youtube.com/results?search_query="+linklink
	var title= "Holmes - "+linkword
	var linkadress= linkword.split(".");
	document.getElementById("erase-button").style.visibility="visible";
	document.title=title
	   if(link2[0]=="!"){
    setTimeout('document.getElementById("link-txt").style.color="red"', 50)
	setTimeout('document.getElementById("linker").style.opacity="0"',0)
	setTimeout('document.getElementById("linker").style.visibility="hidden"',0)
    }
     if(link2[0]!="!"){
    setTimeout('document.getElementById("link-txt").style.color="black"', 50)
    }
    if(linkadress[0]=="www"){
    setTimeout('document.getElementById("linker").style.height="181px"', 50)
    setTimeout('document.getElementById("url-linker").style.opacity="1"', 150)
	setTimeout('document.getElementById("url-linker").style.visibility="visible"', 160)
	document.getElementById("url-linker").innerHTML="<a href=http://"+linkword+" target='_blank'>URL - "+linkword+"</a>"
	}
    if(linkadress[0]!="www"){
    setTimeout('document.getElementById("url-linker").style.opacity="0"', 50)
    setTimeout('document.getElementById("linker").style.height="156px"', 60)
	setTimeout('document.getElementById("url-linker").style.visibility="hidden"', 156)
	}
	if(linkword.length=="0"){
document.getElementById("erase-button").style.visibility="hidden";
	setTimeout('document.getElementById("wiki-linker").style.opacity="0";document.getElementById("goog-linker").style.opacity="0";document.getElementById("yout-linker").style.opacity="0";document.getElementById("pint-linker").style.opacity="0";document.getElementById("lint-linker").style.opacity="0";document.getElementById("wolf-linker").style.opacity="0"', 0)
	setTimeout('document.getElementById("linker").style.opacity="0"', 10)
	setTimeout('document.getElementById("linker").style.visibility="hidden"', 20)
	document.title="Holmes - Search anything, find everything."
	}
	if(linkword.length>="1"){
	setTimeout('document.getElementById("wiki-linker").style.opacity="1"', 100)
	setTimeout('document.getElementById("wolf-linker").style.opacity="1"', 200)
	setTimeout('document.getElementById("lint-linker").style.opacity="1"', 300)
	setTimeout('document.getElementById("pint-linker").style.opacity="1"', 400)
	setTimeout('document.getElementById("yout-linker").style.opacity="1"', 500)
	setTimeout('document.getElementById("goog-linker").style.opacity="1"', 600)
	document.getElementById("linker").style.opacity="1"
	document.getElementById("linker").style.visibility="visible"
	document.getElementById("wiki-linker").innerHTML="<a href="+wiki+" target='_blank' onclick='savehistory();wordcasper()'>Wikipedia - "+linkword+"</a>"
		document.getElementById("wolf-linker").innerHTML="<a href="+wolf+" target='_blank' onclick='savehistory();wordcasper()'>Wolframalpha - "+linkword+"</a>"
	document.getElementById("lint-linker").innerHTML="<a href="+lint+" target='_blank' onclick='savehistory();wordcasper()'>Linternaute - "+linkword+"</a>"
	document.getElementById("pint-linker").innerHTML="<a href="+pint+" target='_blank' onclick='savehistory();wordcasper()'>Pinterest - "+linkword+"</a>"
	document.getElementById("yout-linker").innerHTML="<a href="+yout+" target='_blank' onclick='savehistory();wordcasper()'>Youtube - "+linkword+"</a>"
	document.getElementById("goog-linker").innerHTML="<a href="+goog+" target='_blank' onclick='savehistory();wordcasper()'>Google - "+linkword+"</a>"
	}
}