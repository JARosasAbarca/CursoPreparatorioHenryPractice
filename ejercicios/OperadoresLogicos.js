// operador and &&
function mayorYMenor(num) { 
    if(num >5 && num < 10 && num % 2===0 )  console.log(true);
    else console.log(false);
};
mayorYMenor(2);
mayorYMenor(7);
mayorYMenor(8);

// Operador OR ||

function operadorOr(str){ 
    if(str === 'Henry' || str.length<2 ) console.log(true)
    else console.log(false)
};

operadorOr("Henry");
operadorOr("javascript");
operadorOr("i");

// operador not  ! 

function negacion(permiso){
    if(permiso !== true) console.log("Tiene Permiso");
};

negacion(false);

// operadores juntos 

function condicionCompleja(num){
    if(num > 9 && num % 2 === 0 || num === 3) console.log(true);
    else console.log(false);
};

condicionCompleja(10);
condicionCompleja(6);
condicionCompleja(3);
condicionCompleja(5);
