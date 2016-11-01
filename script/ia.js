var user_informations= sessionStorage.getItem("user").split(" ");
var name= user_informations[0];
var surname= user_informations[1];
var city= user_informations[2];
var country= user_informations[3];
var voice= document.getElementById("voice");

// vocabulary

var salutation = ["hello", "good morning", "hi", "hey", "good evening", "good afternoon"]; 
var qrc= ["who", "where", "what", "how"];
var suject= ["I", "you", "he", "she", "it", "we", "they"];
var mood= ["fine", "bad"]
var action1= ["show", "display"]
var action2= ["remind", "remember"]

function ia_delta(){
	document.getElementById("hearth").style.borderColor="#03c1dd";
	voice.innerHTML="Hello "+name+"! Write simple sentences"
    var usertext=document.getElementById("talk_base").value;
    var spl_usertext= usertext.split(" ")
    who= spl_usertext[0];
    verb= spl_usertext[1];
    var l= spl_usertext.length;
    if(usertext=="exit"){
	    debug()
    }
    for (var i=0;i<l;i++){
    if((spl_usertext[i]=="likes")||(spl_usertext[i]=="loves")){
	   var what= spl_usertext[2]
	   voice.innerHTML="So, "+who+" likes "+what
	}
	
	if((spl_usertext[i]=="live")||(spl_usertext[i]=="stay")){
	   var what= spl_usertext[2]
	   voice.innerHTML="So, "+who+" live in "+what
	   }
	if(salutation.indexOf(spl_usertext[i])!="-1"){
		  voice.innerHTML="Good morning"
		  }
		  if((qrc.indexOf(spl_usertext[i])!="-1")){
			  b=""
			  wrd= spl_usertext[i]
			  m=i+2
			  k= parseInt(spl_usertext)-parseInt(m);
			  for (var i=m;i<l;i++){
				 b=b+" "+spl_usertext[i]
				  if(wrd=="where"){
					 j="area"
					 document.getElementById("hearth").style.borderColor="#02de82";
	   }
				  }
				   var audio = document.getElementById('source');
        var source = document.getElementById('mp3Source');
        source.src='files/map.mp3';
        audio.load(); //call this to just preload the audio without playing
        audio.play(); //call this to play the song right away

	   voice.innerHTML="(question: "+b+","+j+")"
	}
		  if((action1.indexOf(spl_usertext[i])!="-1")){
			 b=""
			  m=i+2
			  for (var i=m;i<l;i++){
				 b=b+" "+spl_usertext[i]
				 
					 document.getElementById("hearth").style.borderColor="#02de82";
  voice.innerHTML="I will show you "+b
   var audio = document.getElementById('source');
        var source = document.getElementById('mp3Source');
        source.src='files/show.mp3';
        audio.load(); //call this to just preload the audio without playing
        audio.play(); //call this to play the song right away

  }
  }
   if((action2.indexOf(spl_usertext[i])!="-1")){
			 b=""
			  m=i+2
			  for (var i=m;i<l;i++){
				 b=b+" "+spl_usertext[i]
				 
					 document.getElementById("hearth").style.borderColor="#02de82";
  voice.innerHTML="I will remind you "+b
   var audio = document.getElementById('source');
        var source = document.getElementById('mp3Source');
        source.src='files/event.mp3';
        audio.load(); //call this to just preload the audio without playing
        audio.play(); //call this to play the song right away

  }
}
}
}