import React from "react";
import './Crear.css'

const Editar_Orden = () => {


    return (
        <>
            <div class="global-container">
                <div class="registro-container col-lg-5 bg-dark d-flex  justify-content-evenly">
                    <div class="align-self-center w-100 px-lg-5 py-lg-4 p-4">
                        <h1 class="font-weight-bold mb-4"> Gestión de Paquetes - Actualización de ordenes</h1>    
                        <form class="row g-3" action="/addregistro" method="POST">
                            <div class="row">
                                <div class="form-group col">
                                    <label for="inputFecha" class="form-label">Fecha</label>
                                    <input  type="date" class="form-control" id="inputFecha" name="date"/> 
                                </div>
                                <div class="form-group col">
                                    <label for="inputHora" class="form-label">Hora</label>
                                    <input type="time" class="form-control" id="inputHora" name="time"/>
                                </div>   
                            </div>
                            
                            <div class="form-group col">
                                <label for="inputEstado" class="form-label">Estado</label>
                                <select class="estilo-desplegable" name="estados" id="estados">
                                    <option>Guardado</option>
                                    <option>Cancelado</option>
                                    <option>Cumplido</option>
                                </select>
                            </div>
                            <h1></h1>
                            <div class="row">
                                <div class="form-group col">
                                    <label for="inputLargo" class="form-label">Largo(cm)</label>
                                    <input type="number" class="form-control" id="inputLargo" name="num1" min="0" max="250"/>
                                </div>
                                <div class="form-group col">
                                    <label for="inputAncho" class="form-label">Ancho(cm)</label>
                                    <input type="number" class="form-control" id="inputAncho" name="num2" min="0" max="250"/>
                                </div>
                                <div class="form-group col">
                                    <label for="inputAlto" class="form-label">Alto (cm)</label>
                                    <input type="number" class="form-control" id="inputAlto" name="num3" min="0" max="250"/>
                                </div>
                                <div class="form-group col">
                                    <label for="inputPeso" class="form-label">Peso (Kg)</label>
                                    <input type="number" class="form-control" id="inputPeso" name="num4" min="0" max="100"/>
                                </div>
                            </div>
                            <h1></h1>
                            
                            <div class="row">
                                <div class="form-group col">
                                    <label for="inputName1" class="form-label">Dirección recogida</label>
                                    <input type="text" class="form-control" id="inputName1" name="Usuario" placeholder="Cra26a #39"/>
                                </div>
                                <div class="form-group col">
                                    <label for="inputName1" class="form-label">Ciudad recogida</label>
                                    <input type="text" class="form-control" id="inputName1" name="Usuario" placeholder="Barranquilla"/>
                                </div>
                            </div>
                            <h1></h1>
                            <div class="row">
                                <div class="form-group col">
                                    <label for="inputName1" class="form-label">Nombre destinatario</label>
                                    <input type="text" class="form-control" id="inputName1" name="Usuario" placeholder="Diomedes Diaz"/>
                                </div>
                                <div class="form-group col">
                                    <label for="inputName1" class="form-label">Cédula</label>
                                    <input type="text" class="form-control" id="inputName1" name="Usuario" placeholder="1043592330"/>
                                </div>
                            </div>
                            <h1></h1>
                            <div class="row">
                                <div class="form-group col">
                                    <label for="inputName1" class="form-label">Dirección entrega</label>
                                    <input type="text" class="form-control" id="inputName1" name="Usuario" placeholder="Cra 47A #89-100"/>
                                </div>
                                <div class="form-group col">
                                    <label for="inputName1" class="form-label">Ciudad entrega</label>
                                    <input type="text" class="form-control" id="inputName1" name="Usuario" placeholder="Bogotá"/>
                                </div>
                            </div>

                            <div class="col-12">
                                <button type="submit" class="btn btn-outline-secondary text-dark font-weight-bold rounded-3">Actualizar orden</button>
                            </div>
                        </form>       
                    </div>  
                </div>
            </div>
        </>
    )
};

export default Editar_Orden; 