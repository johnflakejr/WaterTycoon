/*
  Watertycoon - an incremental game about water. 
  by @jfljr
*/

/*
  Initialize ounces to 0. 
  In the future, if cookies are included, get ounce value from this. 
*/

var ounces = 0; 
var helpers = 0;
var helper_price = 100;

function helper_drink() {
  ounces = ounces + helpers;
  document.getElementById("oz_counter").innerHTML = ounces;
}

/*
  Every 5 seconds, helpers drink: 
*/
setInterval(function(){ 
    helper_drink();
    update();
}, 5000);




/*
  Buy a lil' helper to drink more water
*/
function buy_helper() {

  if (ounces >= helper_price) {
    helpers = helpers + 1;
    ounces = ounces - helper_price; 
    helper_price = helper_price + helper_price;
  }
  else{
    document.getElementById("water_helper").innerHTML="Need more OZ!";
  }

  document.getElementById("helpers_counter").innerHTML=helpers;
  document.getElementById("oz_counter").innerHTML = ounces;
  document.getElementById("water_helper").innerHTML="Buy a helper! Cost: " + helper_price + " OZ"; 

  update();
}


/*
  First button - drink one ounce. 
*/
function drinkOne() {
  ounces = ounces + 1;

  document.getElementById("oz_counter").innerHTML = ounces;

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
  }, 1200);
  update(); 
}

/*
  S L U R P
*/
function slurp() {
  document.getElementById("slurp_button").innerHTML="Slurping 64 OZ!";

  ounces = ounces + 64;

  document.getElementById("oz_counter").innerHTML=ounces;
  document.getElementById("slurp_button").disabled=true; 

  setTimeout(function(){
    document.getElementById("slurp_button").disabled = false;
    document.getElementById("slurp_button").innerHTML="SLURP!"; 
  }, 1200);

  update(); 
}


/*
  H Y D R A T E 
*/
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

/*
  Magic happens here.
*/
function update(){

  if(helpers == 1)
  {
    document.getElementById("helpers_title").style.display="block";
    document.getElementById("helpers_counter").style.display="block";
  }

  if(ounces >= 12){
    document.getElementById("chug_button").style.display="block";
  } 

  if(ounces >= 200){
    document.getElementById("slurp_button").style.display="block";

    //Store opens at 200
    document.getElementById("water_helper").style.display="block";
  }

  if(ounces >= 1000){
    document.getElementById("message_box").innerHTML="u thirsty?";
    document.getElementById("hydrate_button").style.display="block";
  }
}

//End of file

