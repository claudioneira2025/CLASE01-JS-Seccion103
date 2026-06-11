// let boton = document.getElementById("btnIngresar");

// boton.addEventListener("click",function(){
//     console.log("Hisiste cick en el boton");
// })

// Validacion
let boton = document.getElementById("btnIngresar");
boton.addEventListener("click", function(){
    let usuario =document.getElementById("usuario").value;
    let clave = document.getElementById("clave").value;
    let mensaje = document.getElementById("mensaje");

    let usuarioCorrecto = "admin";
    let claveCorrecta = "1234";

    if(usuario)==="" || clave ===""){
        mensaje.textContent= "Debes completar todos los campos";
    }else if(usuario === usuarioCorrecto && clave === claveCorrecta){
        mensaje.textContent = "Acceso Permitido";
        mensaje.style.color="green";
        
        setTimeout(function(){
            window.location.href = "index.html";
        },3000);

    }else {
        mensaje.textContent = "Usuario y Contraseñas Incorrectos";
        mensaje.style.color="red";
    }

    }
});