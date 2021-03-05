/*
    Initialize ounces to 0. 
    In the future, if cookies are included, get ounce value from this. 
*/
var ounces = 0; 

/*
    First button - drink one ounce. 
*/
function drinkOne() {
	ounces = ounces + 1;
	document.getElementById("oz_counter").innerHTML=ounces;
	update(); 
}

/*
    Second button - drink 12 ounces. 
*/
function chugOne() {
	document.getElementById("chug_button").innerHTML="Chugging!";
	ounces = ounces + 12;
	document.getElementById("oz_counter").innerHTML=ounces;
	document.getElementById("chug_button").disabled=true; 
	setTimeout(function(){
		document.getElementById("chug_button").disabled = false;
		document.getElementById("chug_button").innerHTML="Chug a 12 oz can of water!"; 
	},1200);
	update(); 
}

function slurp() {
	document.getElementById("slurp_button").innerHTML="Slurping 64 OZ!";
	ounces = ounces + 64;
	document.getElementById("oz_counter").innerHTML=ounces;
	document.getElementById("slurp_button").disabled=true; 
	setTimeout(function(){
		document.getElementById("slurp_button").disabled = false;
		document.getElementById("slurp_button").innerHTML="SLURP!"; 
	},1200);
	update(); 
}

function hydrate() {
	document.getElementById("hydrate_button").innerHTML="H-Y-D-R-A-T-E!";
	ounces = ounces + 300;
	document.getElementById("oz_counter").innerHTML=ounces;
	document.getElementById("hydrate_button").disabled=true; 
	setTimeout(function(){
		document.getElementById("hydrate_button").disabled = false;
		document.getElementById("hydrate_button").innerHTML="H - Y - D - R - A - T - E"; 
	},10000);
	update(); 
}

function update(){
	if(ounces >= 12){
		document.getElementById("chug_button").style.display="block";
	}; 

    if(ounces >= 200){
		document.getElementById("slurp_button").style.display="block";
	};

    if(ounces >= 1000){
		document.getElementById("message_box").innerHTML="u thirsty?";
		document.getElementById("hydrate_button").style.display="block";
	};

}
