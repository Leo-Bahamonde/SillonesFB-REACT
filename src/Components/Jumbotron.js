import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import imagenJumbotron from '../images/Jumbotron.png'
const Jsjumbotron = (props) => {
  return (
    <div contenedorJumbotron>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Tu espacio,tu lugar</h1>
          <p className="lead">Encuntra eso que tanto buscas</p>
          <img src={imagenJumbotron} alt="Imagen en Jumbotron" className="imagenJumbotron"/>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Jsjumbotron;