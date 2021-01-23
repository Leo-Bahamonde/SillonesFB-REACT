import React from 'react';

import { FaFacebookF} from "@react-icons/all-files/fa/FaFacebookF";
import { FaInstagram } from 'react-icons/fa'
import { FaWhatsapp} from '@react-icons/all-files/fa/FaWhatsapp'




function Footer() {
  return (
    <div>
          <a href="https://api.whatsapp.com/send?phone=+54 9 11 3817-0024" target="__Blanck" class="whatsapp">
            <i class="fa fa-whatsapp whatsapp-icon"><FaWhatsapp/></i>
          </a>
      <div className="container-footer">
        <footer>
          <div className="">
          <div>
            <p>LogoDeLaEmpresa</p>
          </div>
            <hr/>
            <div className="redes-footer">
              <a  href="https://wwww.facebook.com" target="__Blanck">
                <i className="fa-facebook-f icon-redes-footer"><FaFacebookF /></i>  
              </a>
              
              <a href="https://www.instagram.com/sillones.fb/" target="__Blanck">
                <i className="fa-instagram icon-redes-footer"> <FaInstagram/></i>
              </a>
            </div>

            <h5>© 2021 Sillones Conford FB - Todos los Derechos Reservados </h5>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
