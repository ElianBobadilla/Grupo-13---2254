import React from "react";
import './Registro_User.css'

const Registro_User = () => {


    return (
        <>
            <div class="global-container">
                <div class="registro-container col-lg-5 bg-dark d-flex  justify-content-evenly">
                    <div class="align-self-center w-100 px-lg-5 py-lg-4 p-4">
                        <h1 class="font-weight-bold mb-4"> Registro</h1>
                        <form class="row g-3" action="/addregistro" method="POST">
                            <div class="col-md-12">
                                <label for="inputName1" class="form-label">Nombre</label>
                                <input type="text" class="form-control" id="inputName1" name="Nombre" placeholder="example"/>
                            </div>
                            <div class="col-md-12">
                                <label for="inputName1" class="form-label">Usuario</label>
                                <input type="text" class="form-control" id="inputName1" name="Usuario" placeholder="example"/>
                            </div>
                            <div class="col-md-12">
                                <label for="inputEmail" class="form-label">Correo</label>
                                <input type="email" class="form-control" id="inputEmail" name="Email" placeholder="example@inditex.com"/>
                            </div>
                            <div class="col-md-12">
                                <label for="inputPassword1" class="form-label">Contraseña</label>
                                <input type="password" class="form-control" id="inputPassword1" name="Contraseña" placeholder="********"/>
                            </div>
                            <div class="col-12">
                                <label>
                                Al hacer clic en "Crear cuenta", estas aceptando nuestras <a href="{{url_for('politicas')}}" class="text-light font-weight-bold text-decoration-none">Políticas de privacidad</a>
                                </label>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-outline-secondary text-dark font-weight-bold rounded-3">Crear cuenta</button>
                            </div>
                        </form>       
                    </div> 
                </div>
            </div>
        </>
    )
};

export default Registro_User;        