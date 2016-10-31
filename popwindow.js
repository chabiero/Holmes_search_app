// Copyright by Arnaud 2013-1016

// Paramètres du big pop-up
function appear(txt,title,close){
	document.getElementById("towel").style.visibility="visible"
	document.getElementById("popwindow").style.visibility="visible"
    document.getElementById("title-pop").innerHTML=title
    document.getElementById("content").innerHTML=txt
    document.getElementById("link-txt").readOnly=true
    if(close=="n"){
	    document.getElementById("close-popwindow").style.visibility="hidden"
    }
    if(close=="y"){
	    document.getElementById("close-popwindow").style.visibility="visible"
    }
    closeslide()
}
function closetowel(){
	document.getElementById("content").innerHTML=""
	document.getElementById("popwindow").style.visibility="hidden"
	document.getElementById("towel").style.visibility="hidden"
	document.getElementById("close-popwindow").style.visibility="hidden"
	document.getElementById("link-txt").readOnly=false
}
function appearmsg(txt,title){
	document.getElementById("towel").style.visibility="visible"
	document.getElementById("popmsg").style.visibility="visible"
    document.getElementById("titlepopmsg").innerHTML=title
    document.getElementById("bodypopmsg").innerHTML=txt
    document.getElementById("link-txt").readOnly=true
    closeslide()
}

// Paramètres du petit pop-up

function closetowelmsg(){
	document.getElementById("towel").style.visibility="hidden"
	document.getElementById("popmsg").style.visibility="hidden"
	document.getElementById("bodypopmsg").innerHTML=""
	document.getElementById("link-txt").readOnly=false
}