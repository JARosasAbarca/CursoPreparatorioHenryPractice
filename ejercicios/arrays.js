var listaDeCompras =[];
listaDeCompras[3] = 'Tomates';
listaDeCompras[1] = 'Lechuga';

console.log(listaDeCompras.length);
//listaDeCompras[1];
//let elementoDelArray = listaDeCompras[1];
//console.log(elementoDelArray);

// Lenght
var nombres = ['Matias', 'Maria', 'Diego', 'Rosa'];
console.log(nombres[1]);

//metodos
var colores = ['amarillo', 'azul'];
colores.push('rojo');
colores.unshift('verde')
colores.pop();
colores.shift();
console.log(colores);

//metodo includes 
let pintores = ['Picasso', 'Velazquez', 'Van Gogh', 'Dali'];
let incluyeDali = pintores.includes('Monet');
console.log(incluyeDali);

// metodo every
//let numeros = [ 10, 6, 8, 9];
var cumplenCondicion = numeros.every((num) => {
    return num > 5;
}); 
console.log(cumplenCondicion); 

// join y push 
var palabra ='Henri'; 
var palabraSeparada = palabra.split('');
palabraSeparada.pop();
palabraSeparada.push('y');
//console.log(palabraSeparada);
var palabraArreglada = palabraSeparada.join('');
console.log(palabraArreglada);

// metodo forEach 
var numeros = [1, 2, 3, 4];
//numeros.forEach((num) => console.log(num));
//numeros.forEach((num) => {
  //  if (num === 3 ) { console.log(num);
  //  }
//});

// metodo map
var masUno = numeros.map((num) =>{
    return num + 1;
});
console.log(masUno);
