import React from 'react';
import Carrusel from '../Components/Carrusel';
import imagen1 from '../images/MATERAS/23a468c587b7.jpg';
import imagen2 from '../images/2.jpg';
import imagen3 from '../images/bg-1.jpg';
import Footer from '../Components/Footer';

const Inicio = () => {
    return ( 
        <div> 
          <div className="container">      
             <Carrusel/>  

                <div className="text-center m-5">
                    <h3 className="display-4">Sofás personalizados a tu medida</h3>
                    <p>Nuestros diseños estan pensados paraexigentes, los que saben lo que quieren y cómo lo quieren.</p>
                    <img src={imagen1} className="ImagenInicio" alt="imagen ilustrativa"/>
               </div>  

               <div className="text-center m-5">
                    <h3 className="display-4">Innovamos tu ambiente</h3>
                    <p>Tu ambiente es único. Por eso, te ofrecemos productos totalmente personalizados, para que compres exactamente lo que buscás.</p>
                    <img src={imagen2} className="ImagenInicio" alt="imagen ilustrativa"/>
                </div> 

               <div className="text-center m-5">
                    <h3 className="display-4">Estructuras metálicas</h3>
                    <p>Materiales desmontables y de primera calidad</p>
                    <img src={imagen3} className="ImagenInicio" alt="imagen ilustrativa"/>
               </div> 

               </div>
                     <Footer/>
               </div> 
     );
}
 
export default Inicio;