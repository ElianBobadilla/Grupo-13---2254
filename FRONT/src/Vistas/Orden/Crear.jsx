import React from "react";
import './Crear.css'

const Crear_Orden = () => {
    return (
        <>
            <div class="box-registro-orden">
                <form class="form-login" autocomplete="off">
                    <h2>Gestión de paquetes - Registro ordenes</h2>
                    <a class= "logo">
                        <img src="https://cdn-icons-png.flaticon.com/512/1554/1554548.png" alt="Registro Usuario" height= "80" width="80"/>
                    </a>
                    <div class="columnas">
                        <div class="inputBox">
                            <input type="date" required="required" name="Date" placeholder="Fecha"/>
                            <i></i>
                        </div>
                        <div class="inputBox">
                            <input type="time" required="required" name="Date" placeholder="Hora"/>
                            <i></i>
                        </div>
                    </div>
                    
                    <div class="columnas">
                        <div class="inputBox">
                            <input type="number" required="required" name="Largo" placeholder="Largo(cm)" min="0" max="250"/>
                            <i></i>
                        </div>
                        <div class="inputBox">
                            <input type="number" required="required" name="Ancho" placeholder="Ancho(cm)" min="0" max="250"/>
                            <i></i>
                        </div>
                        <div class="inputBox">
                            <input type="number" required="required" name="Alto" placeholder="Alto(cm)" min="0" max="250"/>
                            <i></i>
                        </div>
                        <div class="inputBox">
                            <input type="number" required="required" name="Peso" placeholder="Peso(Kg)" min="0" max="100"/>
                            <i></i>
                        </div>
                    </div>

                    <div class="columnas">
                        <div class="inputBox">
                            <input type="text" required="required" name="direccionrecogida" placeholder="Dirección recogida"/>
                            <i></i>
                        </div>
                        <div class="inputBox">
                            <input type="text" required="required" name="ciudadrecogida" placeholder="Ciudad recogida"/>
                            <i></i>
                        </div>
                    </div>

                    <div class="columnas">
                        <div class="inputBox">
                            <input type="text" required="required" name="destinatario" placeholder="Nombre destinatario"/>
                            <i></i>
                        </div>
                        <div class="inputBox">
                            <input type="text" required="required" name="cedula" placeholder="Cédula/NIT destinatario"/>
                            <i></i>
                        </div>
                    </div>

                    <div class="columnas">
                        <div class="inputBox">
                            <input type="text" required="required" name="direccionentrega" placeholder="Dirección entrega"/>
                            <i></i>
                        </div>
                        <div class="inputBox">
                            <input type="text" required="required" name="ciudadentrega" placeholder="Ciudad entrega"/>
                            <i></i>
                        </div>
                    </div>
                    
                    <h1></h1>
                    <h1></h1>
                    <h1></h1>
                    <div>
                        <button type="submit" class="boton">Crear orden</button>
                    </div>
                </form>        
            </div>

        </>
    )
};

export default Crear_Orden;        