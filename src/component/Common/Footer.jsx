import './Footer.css'; 
import icono from '../assets/Logo.png'
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <section className='container'>   
        <div className='row'>
          <div className='col-sm-12 col-md-4 text-center'>
            <img className='w2 h2' src={icono} alt="icono restaurante" />
          </div>
          <div className='col-sm-12 col-md-4 my-3 text-center'>
            <div className='my-3'>
              <a href="#">Home</a>
            </div>
            <div className='my-3'>
              <a href="#">About us</a>
            </div>
            <div className='my-3'>
              <a href="#">Contact us</a>
            </div>
            <div className='my-3'>
              <a href="#">Cookies policy</a>
            </div>
            <div className='my-3'>
              <a href="#">Privacy policy</a>
            </div>
          </div>
          <div className='col-sm-12 col-md-4 text-center my-3'>
            <h3 className='my-3'>Follow in</h3>
            <a href="https://www.instagram.com/" className='mx-3'><FaInstagram /></a>
            <a href="https://www.facebook.com/"><FaFacebook /></a>
            <a href="https://www.twitter.com/" className='mx-3'><FaTwitter /></a>
          </div>
        </div>
        <div className='my-3'>
        <p className= "fs-2 py-3 text-center">&copy; Todos los derechos reservados</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
