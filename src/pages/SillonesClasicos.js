import React from 'react';
import {  FormGroup, Label, Input} from 'reactstrap';




const SillonesClasicos = () => {
    return ( 
   <div> 
      <div className="text-center m-5">  
         <FormGroup>
            <Label for="exampleSelect"><h3 className="display-5 mb-5"><b>Sillon clasico</b></h3></Label>
               <Input type="select" name="select" id="exampleSelect">       
                  <option>1 cuerpo</option>
                  <option>2 cuerpos</option>
                  <option>3 cuerpos</option> 
                  <option>Todos</option>      
               </Input>
         </FormGroup>  
                     
      </div>            
   </div>
     );
}
 
export default SillonesClasicos;