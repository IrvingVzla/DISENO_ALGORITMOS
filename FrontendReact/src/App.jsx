// src/App.jsx
import React from 'react';
import { Routes, Route } from "react-router-dom";
import LoginForm from './components/LoginForm';
import FormularioRegistro from './components/FormularioRegistro/FormularioRegistro';
import PaginaPrincipal from './components/PaginaPrincipal/PaginaPrincipal';
import RegistroMaterias from './components/RegistroMaterias/RegistroMaterias';
import Perfil from './components/Perfil/Perfil';
import PrivateRoute from './components/PrivateRoute';
import LandingPage from './components/LandingPage';
import ParamUsuarios from './components/Parametrizacion/ParamUsuarios/ParamUsuarios';
import ParamTiposDoc from './components/Parametrizacion/ParamTiposDoc/ParamTiposDoc';
import ParamCiudades from './components/Parametrizacion/ParamCiudades/ParamCiudades';

const App = () => {
    return (
        <Routes>
            {/* Rutas publicas */}
            <Route path="/LoginForm" element={<LoginForm />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/FormularioRegistro" element={<FormularioRegistro />} />


            <Route path="/PaginaPrincipal" element={<PaginaPrincipal />} />
            <Route path="/ParamUsuarios" element={<ParamUsuarios />} />
            <Route path="/ParamTiposDoc" element={<ParamTiposDoc />} />
            <Route path="/ParamCiudades" element={<ParamCiudades />} />


            {/* Rutas protegidas */}
            {/*<Route path="/PaginaPrincipal"  element={<PrivateRoute> <PaginaPrincipal /> </PrivateRoute>} />*/}
            <Route path="/RegistroMaterias" element={<PrivateRoute> <RegistroMaterias /> </PrivateRoute>} />
            <Route path="/Perfil"           element={<PrivateRoute> <Perfil /> </PrivateRoute>} />
        </Routes>
    );
};

export default App;
