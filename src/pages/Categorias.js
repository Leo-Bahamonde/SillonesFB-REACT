import React from 'react';
import Cards from '../Components/Cards'
import Footer from '../Components/Footer';
import Jsjumbotron from '../Components/Jumbotron';




const Categorias = () => {
    return ( 
   <div> 
      <div className="categorias"> 
        <h3>Nuestras categorias</h3>
          <div>
          <Jsjumbotron/>
          </div>
       <div className="container row CategoriasCentral">
            <div className="mt-3 cardStyle">
              <Cards/>
            </div>
            <div className="mt-3 cardStyle">
              <Cards/>
            </div>
            <div className="mt-3 cardStyle">
              <Cards/>
            </div>
            <div className="mt-3 cardStyle">
              <Cards/>
            </div>
            <div className="mt-3 cardStyle">
              <Cards/>
            </div>
            <div className="mt-3 cardStyle">
              <Cards/>
            </div>
            <div className="mt-3 cardStyle">
              <Cards/>
            </div>
            <div className="mt-3 cardStyle">
              <Cards/>
            </div>
        </div>
        
      </div>   
      <Footer/>         
   </div>
     );
}
 
export default Categorias;