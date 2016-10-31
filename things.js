// Copyright by Arnaud 2013-1014
function analysticsthings(){
	      if(localStorage.getItem('parental')=="true"){

var id= "link-txt"
var things= document.getElementById(id).value
var thingsanalystics= things.split(" ")
var l=thingsanalystics.length
var start=0
thingsanalystics[start]
for (var i=0;i<l;i++){
   if((thingsanalystics[i]=="con ")||(thingsanalystics[i]=="salope")||(thingsanalystics[i]=="conne")||(thingsanalystics[i]=="salop")||(thingsanalystics[i]=="connasse")||(thingsanalystics[i]=="conasse")||(thingsanalystics[i]=="salope")||(thingsanalystics[i]=="connard")||(thingsanalystics[i]=="conard")||(thingsanalystics[i]=="pute")){
  if(localStorage.getItem('language')=="en"){
   appearmsg("Please do not use this kind of word :( You can hurt touchy people...","Sorry but...")
   }
     if(localStorage.getItem('language')=="fr"){
   appearmsg("Merci de ne pas utiliser ce genre de mot... . Vous pouvez blesser les personnes...","Pardon mais...")
   }
   document.getElementById(id).value=""
   }
}
}
}