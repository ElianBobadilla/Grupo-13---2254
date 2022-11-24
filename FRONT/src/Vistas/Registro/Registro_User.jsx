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
                    <div>
                        <button type="submit" class="boton">Registrarme</button>
                    </div>
                </form>











                    <div class="align-self-center w-100 px-lg-5 py-lg-4 p-4">
                        <h2> Registro</h2>
                        <form class="row g-3">
                            <div class="col-md-12">

                                <input type="text" class="form-control" id="inputName1" name="Nombre" placeholder="example"/>
                            </div>
                            <div class="col-md-12">

                                <input type="text" class="form-control" id="inputName1" name="Usuario" placeholder="example"/>
                            </div>
                            <div class="col-md-12">

                                <input type="email" class="form-control" id="inputEmail" name="Email" placeholder="example@inditex.com"/>
                            </div>
                            <div class="col-md-12">

                                <input type="password" class="form-control" id="inputPassword1" name="Contraseña" placeholder="********"/>
                            </div>

                            <div class="col-12">
                                <button type="submit" class="btn btn-outline-secondary text-dark font-weight-bold rounded-3">Crear cuenta</button>
                            </div>
                        </form>       
                    </div> 
                </div>

        </>
    )
};

export default Registro_User;        