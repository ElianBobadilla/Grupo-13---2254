import React from "react";
import './Login.css'

const Login = () => {


    return (
        <>
            <div class="global-container">
                <div class="bienvenida col-lg-5 d-flex  justify-content-evenly">
                    <div class="align-self-center w-100 px-lg-5 py-lg-4 p-4">
                        <div class="logo">
                            <h1 class="font-weight-bold mb-4"> Bienvenido a InstaYA</h1>
                            <a href="http://192.168.1.6:5173/login" >
                                <img src="https://cdn-icons-png.flaticon.com/512/3287/3287142.png" alt="Mensajeria Pechy" height= "200" width="200"/>
                            </a>
                        </div>
                    </div>      
                </div>
                <div class="login-container col-lg-5 bg-dark d-flex  justify-content-evenly">
                    <div class="align-self-center w-100 px-lg-5 py-lg-4 p-4">
                        <form action="/verificar" method="POST">
                            <div class="mb-4">
                                <label class="form-label font-weight-bold">Usuario</label>
                                <input type="text" class="form-control" name="Usuario" placeholder="example"/>
                            </div>
                            <div class="mb-4">
                                <label class="form-label font-weight-bold">Contraseña</label>
                                <input type="password" class="form-control" name="Contraseña" placeholder="********"/>
                            </div>
                            <a href={"#"}  class="textfor">¿Has olvidado tu contraseña?</a>
                            <div>
                                <button type="submit" class="btn btn-outline-secondary text-dark font-weight-bold rounded-3">Iniciar Sesión</button>
                            </div>
                        </form>
                        <div class="Crear-cuenta text-center ">
                            <p class="d-inline-block mb-0">¿Todavia no tienes una cuenta? </p> 
                            <a href={"#"} class="text-light font-weight-bold text-decoration-underline"> ¡Registrate aquí!</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Login; 