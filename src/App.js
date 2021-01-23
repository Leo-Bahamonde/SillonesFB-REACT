import React from "react";
import './App.css'
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Switch,Route} from 
'react-router-dom';
import Inicio from './pages/Inicio';
import Contactos from './pages/Contactos'
import Categorias from './pages/Categorias'
import Register from './pages/Register'



function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Inicio}/> 
        <Route path="/categorias" component={Categorias}/> 
        <Route path="/contactos" component={Contactos}/> 
        <Route path="/registrarse" component={Register}/> 
      </Switch>   
    </Router>
  );
}
export default App;