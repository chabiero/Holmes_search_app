//Fonctions permettant d'enregistrer les recherches de l'utilsateur


//Fonctions wordcasper
function wordcasper(){
	if(localStorage.getItem('casper')==undefined){
		localStorage.setItem("casper", document.getElementById("link-txt").value);
		}
		else{
			var data= localStorage.getItem('casper');
			localStorage.setItem("casper",document.getElementById("link-txt").value+"+/"+data)
			var casp= localStorage.getItem('casper').split("+/");
			var l=casp.length;
	  	var t="";
	  	var lo=2
        for (var i=0;i<l;i++){
    	var t= t+"<li id="+i+" onClick='effect("+i+")'>"+casp[i]+"</li>";
    }
document.getElementById("wordcasper").innerHTML='<div id="txt-word">Maybe you are looking for:</div><ul id="wordli">'+t+'</ul>';
		}
		if(localStorage.getItem('casper').split("+/").length>10){
			localStorage.removeItem('casper')
		}
}

function effect(x){
	var casp= localStorage.getItem('casper').split("+/");
	document.getElementById("link-txt").value=casp[x];
	linker();
}

//fonction mémorisation de l'historique

function historic(){
	var text = "";
		
		if((localStorage.getItem('historic')==undefined)&&(localStorage.getItem('language')=="french")){
			
			appearmsg(" Aucun historique.<br> Voulez vous effacer vos donnees?<br> <div id='yes' onclick='forgetme();closetowelmsg()'>Oui!</div>","Alerte de Dr. Watson")
		
		}   


		if((localStorage.getItem('historic')==undefined)&&(localStorage.getItem('language')=="english")){
   
			appearmsg(" No internet history.<br> Do you want to erase your data?<br> <div id='yes' onclick=';closetowelmsg();forgetme();'>Yes!</div>","Dr. Watson's alert")
			
		}
 
		if(localStorage.getItem('historic')!=undefined){
		 var datahist= localStorage.getItem('historic');
		 var datatable= datahist.split(";")
		 var nhi= datatable.length;
		 var nha= parseInt(datatable.length)-parseInt(1)
		 for (i = 0; i < nha; i++) { 
			 text += "<li id="+i+" onclick='disphist("+i+")'>"+datatable[i]+"</li>";
		}
		
	 appear('<div id="li"></div>',"Internet history","y")
	document.getElementById("li").innerHTML="<ul id='hist'>"+text+"</ul></div><div id='erasehist' onclick='erasehist()'>Erase!</div><div id='erasedata' onclick='forgetme()'>Forget me :(</div>";
	
	}
}

//fonction affichage de l'historique

function disphist(x){
	var datahist= localStorage.getItem('historic');
	var datatable= datahist.split(";")
	document.getElementById("link-txt").value=datatable[x]
	linker();
	closetowel()
}

//fonction enregistrer l'historique

function savehistory(){
	wordcasper();
	if(localStorage.getItem('historic')==undefined){
		localStorage.setItem("historic", document.getElementById("link-txt").value+";");
		}
		else{
			var data= localStorage.getItem('historic')
			localStorage.setItem("historic",data+document.getElementById("link-txt").value+";")
		}
}

//fonction effacer l'historique

function erasehist(){
	localStorage.removeItem('historic');
	closetowel()
}

//fonction forgetme

function forgetme(){
	
	if(localStorage.getItem('language')=="english"){
		appear('<div id="infotxt"><p>'+localStorage.getItem("name")+', we can erase your Holmes data. After these changes, all your data will be <b>erased</b> (name, history, text document...). Please fill blanks with the <b>same</b> word.</p></div><div id="error"></div><input type="password" id="w1" placeholder="Type a word." autofocus ><input type="password" id="w2" placeholder="Type the same word."><div id="agree" onclick="erasedata()">Forget me!</div>',"Forget me :(","y")
	}
	
	if(localStorage.getItem('language')=="french"){
		appear('<div id="forgetmetxt">Bonjour '+localStorage.getItem("name")+', nous pouvons effacer toutes vos informations presentes sur Holmes, toutes les informations seront <b>effacees</b> (nom, historique, document texte...). Quand vous utilisez Holmes, Holmes apprend sur vous. Voulez vous effacez les informations?</div><div id="agree" onclick="erasedata()">Oui</div>',"Oublie moi :(","y")
	}
	
}
function erasedata(){
if((document.getElementById('w1').value==document.getElementById('w2').value)&&(document.getElementById('w1').value!="")){
		document.getElementById("content").innerHTML='<div id="infotxt"><p>We are erasing your data... Holmes will restart in a few seconds.</p></div>';
		document.getElementById("progress").innerHTML="Erasing your data"
		localStorage.removeItem('historic');
		localStorage.removeItem('name');
		localStorage.removeItem('text');
		localStorage.removeItem('didact');
		localStorage.removeItem('language');
		localStorage.removeItem('casper');
		localStorage.removeItem('configdone');
		localStorage.removeItem('notes');
		localStorage.removeItem('shortc');
		setTimeout('window.location.reload()', 2500)
	}
	else if(document.getElementById('w1').value!=document.getElementById('w2').value){
		document.getElementById("error").style.visibility="visible"
		document.getElementById("error").innerHTML="<p>It is not the same word.</p>"
	}
	else if(document.getElementById('w1').value==""){
		document.getElementById("error").style.visibility="visible"
		document.getElementById("error").innerHTML="<p>Please, fill all the blanks.</p>"
	}
}