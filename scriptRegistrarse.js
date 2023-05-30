function registrarse() {
    var dialogBox = document.createElement("div");
    dialogBox.className = "dialog-box";
    var dialogOverlay = document.getElementById("dialog-overlay");
    dialogOverlay.style.display = "block";

    var content = document.createElement("div");
    content.innerHTML = `
        <h2>Ingresa tus datos de registro</h2>
        <label>Nombre:</label>
        <input type="text" id="nombre">
        <label>Correo:</label>
        <input type="email" id="correo">
        <label>Contraseña:</label>
        <input type="password" id="contrasena">
        <label>Ciudad:</label>
        <input type="text" id="ciudad">
        <button type="button" onclick="guardarRegistro()">Registrarse</button>
    `;
    dialogBox.appendChild(content);

    document.body.appendChild(dialogBox);

    document.body.classList.add("blur");
}

function guardarRegistro() {
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var contrasena = document.getElementById("contrasena").value;
    var ciudad = document.getElementById("ciudad").value;

    var dialogBox = document.querySelector(".dialog-box");
    dialogBox.parentNode.removeChild(dialogBox);

    document.body.classList.remove("blur");
}
