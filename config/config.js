function config(){
	var configdone= localStorage.getItem('configdone');
	if(configdone!="done"){
		document.getElementById("configwindow").style.visibility="visible";
		document.getElementById("towelconfig").style.visibility="visible";
	}
	if(configdone=="done"){
		configaction()
		var elem = document.getElementById("towelconfig");
		if(elem==null){
		}
		else{
        elem.parentNode.removeChild(elem);
        }
	}
}
function nextconfig(){
	var start= document.getElementById('configitems').offsetLeft;
	var limite= -1500
	var limite2= 0
	var limite3= -1000
	if(start>limite){
	var nstart= start-500
	document.getElementById("configitems").style.left=nstart+'px'
	}
	if(start===0){
		document.getElementById("buttonconfig").style.visibility="hidden"
		}
	if(start===limite2){
		document.getElementById("buttonconfigprevious").style.visibility="visible"
		document.getElementById("buttonconfig").style.visibility="visible"
		document.getElementById("beginconfig").style.visibility="hidden"
		document.getElementById("buttonconfig").innerHTML="Next"

		}
	if(start==limite3){
		document.getElementById("buttonconfig").innerHTML="Let's search"
		}
		if(start==limite){
			confignew()
		}
}
function previousconfig(){
	var start= document.getElementById('configitems').offsetLeft;
	var limite= 0
	if(start<limite){
	var nstart= start+500
	document.getElementById("configitems").style.left=nstart+'px'
	document.getElementById("buttonconfig").innerHTML="Next"
	}
	if(start===limite){
	document.getElementById("buttonconfigprevious").style.visibility="hidden"
	}
}

function confignew(){
	var configdone= localStorage.getItem('visit');
	var lg= document.getElementById("language").value;
	var name= document.getElementById("nameconfig").value;
	var surname= document.getElementById("surname").value;
	var parental= document.getElementById("parental").checked;
	if(parental==true){
			localStorage.setItem("parental", "true");
	}
	if(parental==false){
			localStorage.setItem("parental", "false");
	}
	if((configdone!="done")&&(lg!=undefined)&&(name!="")&&(surname!="")){
		localStorage.setItem("language", lg);
		localStorage.setItem("name", name);
		localStorage.setItem("surname", surname);
		localStorage.setItem("configdone", "done");
		document.getElementById("configwindow").style.opacity="0";
		document.getElementById("towelconfig").style.visibility="hidden"
setTimeout('document.getElementById("configwindow").style.visibility="hidden";document.getElementById("buttonconfig").style.visibility="hidden";document.getElementById("buttonconfigprevious").style.visibility="hidden";launch();',500)
}
	else{
		document.getElementById("endmsg").innerHTML="Please fill all items."
	}
}
function hob(x){
	localStorage.setItem("hob", x);
	nextconfig()
}
function configaction(){
	 var urldata= document.location.href
	 var urldata2= urldata.split("#")
	 if(urldata2[1]!=undefined){
      // rescuedataurl()
       }
     if(localStorage.getItem('language')=="french"){
	   var input = document.getElementById ("link-txt");
       input.placeholder = "Quelle est votre recherche "+localStorage.getItem('name')+"?";
        }
    if(localStorage.getItem('language')=="english"){
	   var input = document.getElementById ("link-txt");
            input.placeholder = "What are you looking for "+localStorage.getItem('name')+"?";
            }
document.getElementById("nameuser").innerHTML=localStorage.getItem('name')
document.getElementById("name").innerHTML=localStorage.getItem('name')
setTimeout('document.getElementById("lapp").style.opacity="0";document.getElementById("lapp").style.visibility="hidden";', 1)
}
function calendar(){
	month = new Array('January', 'Febuary', 'March', 'April', 'May', 'June', 'July', "August", "September", "October", "November", "November", "December");
	var cal= new Date()
	var rday= cal.getDate()
	var rmonth= month[cal.getMonth()]
	 h = cal.getHours();
	 m = cal.getMinutes();
if(m<10){
	m="0"+m
}
                document.getElementById("time").innerHTML=h+":"+m;
				setInterval("calendar()", 60000)
}
