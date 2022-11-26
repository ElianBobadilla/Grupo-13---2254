import React from "react";
import './Editar.css'

const Editar_Orden = () => {
    return (
        <>
            <div class="box-editar-orden">
                <form class="form-login" autocomplete="off">
                    <h2>Gestión de paquetes - Actualización de ordenes</h2>
                    <a class= "logo">
                        <img src="https://cdn-icons-png.flaticon.com/512/1554/1554560.png" alt="Registro Usuario" height= "70" width="70"/>
                    </a>
                    <div class="columnas">
                        <div class="inputBox">
                            <input type="date" required="required" name="Date" placeholder="Fecha"/>
                            <i></i>
                        </div>
                        <div class="inputBox">
                            <input type="time" required="required" name="Time" placeholder="Hora"/>
                            <i></i>
                        </div>
                    </div>

                    <div class="desplegable">
                        <select class="desplegable" name="estados" id="estados">
                                <option>Guardado</option>
                                <option>Cancelado</option>
                                 <option>Cumplido</option>
                        </select>
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
                            <input type="number" required="required" name="Peso" placeholder="Peso(cm)" min="0" max="100"/>
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
                        <button type="submit" class="boton">Actualizar orden</button>
                    </div>
                </form>        
            </div>

        </>
    )
};

export default Editar_Orden;        