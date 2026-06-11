

// var x = 15;

let nombre = "Eric";

console.log("Mi nombre es:"+nombre);

let alumnos = ["jose","claudio","javier","sergio","juan"];

console.log(alumnos);

for(let i = 0; i < alumnos.length;i++){
console.log(alumnos[i]);
}

// Ejercicio de validacion

let edad = Number(prompt("Ingresa tu edad"));

if (edad >=18){
    console.log("Puedes Entrar");
}else {
    console.log("Acceso denegado");
}