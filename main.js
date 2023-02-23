let nombreCliente = prompt("Ingrese su nombre: ");
function saludarCliente(nombre) {
    alert("Hola " + nombre + " , Bienvenido a American Blinds, a continuacion le pediremos sus datos par iniciar sesion.")
}
saludarCliente(nombreCliente);

const userAutorizado = "Luttzhe";
const passwordAutorizado = 4321;

for (let i = 0; i < 3; i++) {
    let usuario = prompt("Ingrese su Usuario");
    let contraseña = parseInt(prompt("Ingrese su Contraseña"));

    if (contraseña === passwordAutorizado && usuario === userAutorizado) {
        alert("Bienvenido " + userAutorizado);
        break;

    } else {
        alert("Usuario o contraseña incorrecta, Intentelo nuevamente.");
    }

    
}