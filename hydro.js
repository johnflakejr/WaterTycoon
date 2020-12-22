var ounces = 0; 
function drinkOne() {
	ounces = ounces + 1;
	document.getElementById("oz_counter").innerHTML=ounces;
	update(); 
}

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

function update(){
	if(ounces == 12){
		document.getElementById("chug_button").style.display="block";
	}; 
}
