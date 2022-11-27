import React from "react";
import './Listado.css'

const Listado = () => {


    return (
        <>
            <div onshow="cargarInfo();" class="container">
                <div class="row justify-content-center">
                        <div class="bandeja-container">
                                <div>
                                    <div class="p-5">
                                        <nav class="navbar navbar-light">
                                            <div class="container-fluid d-flex justify-content-between">
                                                <a class="navbar-brand" href="#">
                                                    <img src="https://cdn-icons-png.flaticon.com/512/3287/3287142.png" alt="" width="50" height="50" class="d-inline-block align-text-top"/>
                                                </a>
                                                <h4 class="text-white">Diomedes</h4>
                                                <h4 id="login_usuario" hidden class="text-whit"></h4>
                                                <a href={"#"} class="text-white font-weight-bold text-decoration-underline"> Salir</a>
                                            </div>
                                            
                                        </nav> 
                                        <hr size="5"/>
                                    <div class="text-center">
                                        <h1 class="h4 text-white mb-4">Gestión de paquetes - Listado de ordenes</h1>
                                    </div>
                                    <a class="logo">
                                        <img src="https://cdn-icons-png.flaticon.com/512/1554/1554572.png" alt="" height= "80" width="80" />
                                    </a>
                                    
                                    <div class="boton-container">
                                        <button type="submit" class="botonListado">Nueva Orden</button>
                                    </div>            

                                </div>
                                <h1></h1>
                                <h1></h1>
                        </div>  
                </div>
            </div>

                    <div>
                        <div class="card o-hidden border-1 my-1 mensajes-container">
                            <div class="card-body p-0">
                                <div class="p-3">
                                    <table id="usuarios2" class="table">
                                        <thead>
                                            <tr>
                                                <th>ID Servicio</th>
                                                <th>Fecha</th>
                                                <th>Ciudad</th>
                                                <th>Dirección</th>
                                                <th>Estado</th>
                                            </tr>
                                            <tr>
                                                <td>#IY-00001</td>
                                                <td>17-11-2022</td>
                                                <td>Barranquilla</td>
                                                <td>Cra 5 #100 - 34 Sur</td>
                                                <td>Cancelado</td>
                                            </tr>
                                            <tr>
                                                <td>#IY-00001</td>
                                                <td>17-11-2022</td>
                                                <td>Barranquilla</td>
                                                <td>Cra 5 #100 - 34 Sur</td>
                                                <td>Cancelado</td>
                                            </tr>
                                            <tr>
                                                <td>#IY-00001</td>
                                                <td>17-11-2022</td>
                                                <td>Barranquilla</td>
                                                <td>Cra 5 #100 - 34 Sur</td>
                                                <td>Cancelado</td>
                                            </tr>
                                            <tr>
                                                <td>#IY-00001</td>
                                                <td>17-11-2022</td>
                                                <td>Barranquilla</td>
                                                <td>Cra 5 #100 - 34 Sur</td>
                                                <td>Cancelado</td>
                                            </tr>
                                           
                                        </thead>
                                        <tbody class="mensajes" id="listado"></tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                        
            </div>
        </>
    )
};

export default Listado; 