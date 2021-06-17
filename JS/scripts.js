$(document).ready(function(){
    $(".S").click(function(){ 
    $(".S").text("0");
                            });
});

$(document).ready(function(){
    $(".E").click(function(){ 
    $(".E").text("0");
                            });
});

$(document).ready(function(){
    $(".N").click(function(){ 
    $(".N").text("0");
                            });
});

$(document).ready(function(){
    $(".D").click(function(){ 
    $(".D").text("0");
                            });
});

$(document).ready(function(){
    $(".M").click(function(){ 
    $(".M").text("0");
                            });
});

$(document).ready(function(){
    $(".O").click(function(){ 
    $(".O").text("0");
                            });
});

$(document).ready(function(){
    $(".R").click(function(){ 
    $(".R").text("0");
                            });
});

$(document).ready(function(){
    $(".Y").click(function(){ 
    $(".Y").text("0");
                            });
});

/*
Ez volt az első teszt sor...
Most viszont jó elválasztóvonal az utolsó betű ID-ig :D

$(document).ready(function(){
    $(".S").click(function(){ 
    $("#E").css("background-color", "yellow");
                            });
});


$(document).ready(function(){
    $("#0").click(function(){ 
    $(".0").int("1");
                            });
});

$(document).ready(function(){
    $("#1").click(function(){ 
    $(".1").text("2");
                            });
});

$(document).ready(function(){
    $("#2").click(function(){ 
    $(".2").text("3");
                            });
});

$(document).ready(function(){
    $("#3").click(function(){ 
    $(".4").text("4");
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

*/
let x = 0;
parseInt(x)
const add = (function () {
    let counter = -1;
    return function () {counter += 1; return counter;}
})();
  function szamlalo(){
    document.getElementById("S").innerHTML = add();
}

/*

  const add = (function () {
  let counter = 0;
  return function () {counter += 1; return counter;}
})();

function myFunction(){
  document.getElementById("demo").innerHTML = add();
}

*/
