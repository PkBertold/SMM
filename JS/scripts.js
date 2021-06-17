var value = 0;
parseInt(value)
console.log(value)
console.log(typeof value)

function add() {
    if(value>=9){
      value = 0;
    } else {
    value++;
    }
    document.getElementById("E").innerHTML = value;
}



function szamlaloS(){
    document.getElementById("S").innerHTML = add();    
}

function szamlaloE(){
    document.getElementById("E").innerHTML = add();
}

function szamlaloN(){
    document.getElementById("N").innerHTML = add();
}

function szamlaloD(){
    document.getElementById("D").innerHTML = add();
}

function szamlaloM(){
    document.getElementById("M").innerHTML = add();
}

function szamlaloO(){
    document.getElementById("O").innerHTML = add();
}

function szamlaloR(){
    document.getElementById("R").innerHTML = add();
}

function szamlaloY(){
    document.getElementById("Y").innerHTML = add();
}


/*
var value = 0;

if(value>9){
    value = 0;
    document.getElementById("field").innerHTML = value;
}


function add_checked() { 
    if (value < 10) {  // handle cases 0-9
        value++; 
    } else {
        value = 0;  // handle case 10
    }
};

function add_limited() { value = (value + 1) % 11; };



Ez volt az első teszt sor...
Most viszont jó elválasztóvonal az utolsó betű ID-ig :D

$(document).ready(function(){
    $(".S").click(function(){ 
    $("#E").css("background-color", "yellow");
                            });
});


let x = 0;
parseInt(x)
x = Number(String(x).replace(/[^0-9]/g, ''));
document.getElementById(id).onclick=function(){code}



$(document).ready(function(){
    $("#szamlalo").click(function(){ 
        var number = document.getElementById("#S");
        var szamlalo = 0;
            number.innerHTML = szamlalo;
            number.onclick = function() {
                szamlalo += 1;          };
                            });
});

const add = (function () {
  let counter = 0;
  return function () {counter += 1; return counter;}
})();

function myFunction(){
  document.getElementById("demo").innerHTML = add();
}

// This seems good

$("szamlalo").click(function() {

    count -= 1;
    if (count > 9) {
        return false;
    }
    else if (count == 0) {
    }
    else {
 //   document.getElementById("szamlalo").innerHTML = "0";
    }
    counter();
});​


   var reset= function(){
    a = 0;
    document.getElementById('Value').innerHTML = a;
    }





var reset = function() {
    a = 0;
    document.getElementById('Value').innerHTML = 0;
    var resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function() {
    reset();
})
}

*/
