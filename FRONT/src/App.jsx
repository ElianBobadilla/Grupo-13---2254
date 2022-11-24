import { useState } from 'react';
import{BrowserRouter,Route,Routes}from"react-router-dom";
import './App.css';
import Login from './Vistas/Login/Login';
import Registro_User from './Vistas/Registro/Registro_User';
import Listado from './Vistas/Listado/Listado';
import Crear_Orden from './Vistas/Orden/Crear';
import Editar_Orden from './Vistas/Orden/Editar';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/registro-user" element={<Registro_User/>} />
          <Route path="/listado" element={<Listado/>} />
          <Route path="/crear-orden" element={<Crear_Orden/>} />
          <Route path="/editar-orden" element={<Editar_Orden/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
