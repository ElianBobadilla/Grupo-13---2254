import React from "react";
import './Registro_User.css'

const Registro_User = () => {
    return (
        <>
            <div class="box-registro ">
                <form class="form-login" autocomplete="off">
                    <h2>Registro</h2>
                    <a class= "logo">
                        <img src="https://cdn-icons-png.flaticon.com/512/747/747834.png" alt="Registro Usuario" height= "70" width="70"/>
                    </a>
                    <div class="inputBox">
                        <input type="text" required="required" name="Nombre" placeholder="Nombre"/>
                        <i></i>
                    </div>
                    <div class="inputBox">
                        <input type="text" required="required" name="Usuario" placeholder="Usuario"/>
                        <i></i>
                    </div>
                    <div class="inputBox">
                        <input type="email" required="required" name="Correo" placeholder="Correo"/>
                        <i></i>
                    </div>
                    <div class="inputBox">
                        <input type="password" required="required" name="Contraseña" placeholder="Contraseña"/>
                        <i></i>
                    </div>
                    <h1></h1>
                    <h1></h1>
                    <h1></h1>
                    <h1></h1>
                    <h1></h1>
                    <div>
                        <button type="submit" class="boton">Registrarme</button>
                    </div>
                </form>
                    
            </div>

        </>
    )
};

export default Registro_User;        