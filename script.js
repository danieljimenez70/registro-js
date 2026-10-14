
const formulario = document.querySelector("#formulario");
const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const saludo = document.querySelector("#saludo");
const mensaje = document.querySelector("#mensaje");
const listaUsuarios = document.querySelector("#lista-usuarios");
const contador = document.querySelector("#contador");

const usuarios = [];

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nombreUsuario = nombre.value.trim();
    const emailUsuario = email.value.trim();
    const emailNormalizado = emailUsuario.toLowerCase();

    if (nombreUsuario === "" || emailUsuario === "") {
        mensaje.textContent = "Completa todos los campos.";
        return;
    }

    const existe = usuarios.some(function (usuario) {
        return usuario.email.toLowerCase() === emailNormalizado;
    });

    if (existe) {
        mensaje.textContent = "Este correo ya está registrado.";
        saludo.textContent = "";
        return;
    }

    const usuario = {
        nombre: nombreUsuario,
        email: emailUsuario
    };

    usuarios.push(usuario);

    const usuarioElemento = document.createElement("li");
    usuarioElemento.classList.add("usuario");

    const nombreElemento = document.createElement("span");
    nombreElemento.classList.add("nombre-usuario");
    nombreElemento.textContent = usuario.nombre;

    const emailElemento = document.createElement("span");
    emailElemento.classList.add("email-usuario");
    emailElemento.textContent = usuario.email;

    usuarioElemento.append(nombreElemento, emailElemento);

    const usuarioVacio = listaUsuarios.querySelector(".vacio");

    if (usuarioVacio) {
        usuarioVacio.remove();
    }

    listaUsuarios.appendChild(usuarioElemento);

    saludo.textContent = "¡Hola, " + usuario.nombre + "!";
    mensaje.textContent = "Usuario registrado correctamente.";

    contador.textContent = usuarios.length +
        (usuarios.length === 1 ? " usuario" : " usuarios");

    formulario.reset();
    nombre.focus();
});
