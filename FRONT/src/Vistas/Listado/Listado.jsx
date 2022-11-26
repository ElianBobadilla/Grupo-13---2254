import React from "react";
import './Listado.css'

const Listado = () => {


    return (
        <>
            <div onshow="cargarInfo();" class="container">
                <div class="row justify-content-center">
                        <div class="bg-dark  card o-hidden border-2 my-1 bandeja-container">
                                <div>
                                    <div class="p-5">
                                        <nav class="navbar navbar-light">
                                            <div class="container-fluid d-flex justify-content-between">
                                                <a class="navbar-brand" href="#">
                                                    <img src="https://cdn-icons-png.flaticon.com/512/3287/3287142.png" alt="" width="50" height="50" class="d-inline-block align-text-top"/>
                                                </a>
                                                <h4 class="text-white"></h4>
                                                <h4 id="login_usuario" hidden class="text-whit"></h4>
                                                <a href={"#"} class="text-white font-weight-bold text-decoration-underline"> Salir</a>
                                            </div>
                                        </nav> 
                                    <div class="text-center">
                                        <h1 class="h4 text-white mb-4">Gestión de paquetes - Listado de ordenes</h1>
                                    </div>
                                    <div>
                                        <button type="submit" class="btn btn-outline-secondary text-dark font-weight-bold rounded-3">Nueva Orden</button>
                                    </div>            
                                    
                                </div>
                        </div>  
                </div>
            </div>

            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-10 col-lg-12 col-md-9">
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
                                        </thead>
                                        <tbody class="mensajes" id="listado"></tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
};

export default Listado; 