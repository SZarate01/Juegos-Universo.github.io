function iniciarSesion() {
    var dialogBox = document.createElement("div");
    dialogBox.className = "dialog-box";
    var dialogOverlay = document.getElementById("dialog-overlay");
    dialogOverlay.style.display = "block";

    var content = document.createElement("div");
    content.innerHTML = `
        <h2>Ingresa tus datos de inicio de sesión</h2>
        <label>Usuario o correo:</label>
        <input type="text" id="usuarioCorreo">
        <label>Contraseña:</label>
        <input type="password" id="contrasena">
        <button type="button" onclick="autenticar()">Iniciar sesión</button>
    `;
    dialogBox.appendChild(content);

    document.body.appendChild(dialogBox);

    document.body.classList.add("blur");
}

function autenticar() {
    var usuarioCorreo = document.getElementById("usuarioCorreo").value;
    var contrasena = document.getElementById("contrasena").value;

    var dialogBox = document.querySelector(".dialog-box");
    dialogBox.parentNode.removeChild(dialogBox);

    document.body.classList.remove("blur");
}
