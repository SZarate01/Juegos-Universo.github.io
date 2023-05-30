import sqlite3

# Conecta a la base de datos o crea una nueva si no existe
conn = sqlite3.connect('basedatos.db')

# Crea una tabla "usuarios" si no existe
conn.execute('CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT)')

# Función para crear una cuenta de usuario
def crear_cuenta(username, password):
    conn.execute('INSERT INTO usuarios (username, password) VALUES (?, ?)', (username, password))
    conn.commit()
    print("Cuenta creada exitosamente.")

# Función para iniciar sesión
def iniciar_sesion(username, password):
    cursor = conn.execute('SELECT * FROM usuarios WHERE username=? AND password=?', (username, password))
    if cursor.fetchone() is not None:
        print("Inicio de sesión exitoso.")
    else:
        print("Usuario o contraseña incorrectos.")

# Ejemplo de uso
crear_cuenta("usuario1", "contraseña123")
iniciar_sesion("usuario1", "contraseña123")
