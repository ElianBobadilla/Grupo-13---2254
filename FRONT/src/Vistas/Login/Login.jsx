import React from "react";
import './Login.css'

const Login = () => {
    return (
        <>
            <div class="box-login">
                <form class="form-login" autocomplete="off">
                    <h2>Bienvenido a InstaYA</h2>
                    <a class= "logo" href="http://192.168.1.6:5173" >
                        <img src="https://cdn-icons-png.flaticon.com/512/3287/3287142.png" alt="Logo InstaYA" height= "100" width="100"/>
                    </a>
                    <div class="inputBox">
                        <input type="text" required="required" name="Usuario" placeholder="Usuario"/>
                        <i></i>
                    </div>
                    <div class="inputBox">
                        <input type="password" required="required" name="Contraseña" placeholder="Contraseña"/>
                        <i></i>
                    </div>
                    <div class="links">
                        <a href="#">¡Olvidé mi contraseña!</a>
                    </div>
                    <h1></h1>
                    <h1></h1>
                    <div>
                        <button type="submit" class="boton">Iniciar Sesión</button>
                    </div>
                </form>
            </div>
        </>
    )
};

export default Login; 