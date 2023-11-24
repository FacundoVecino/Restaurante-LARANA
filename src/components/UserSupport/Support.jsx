import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
const Support = () => {
  return (
      <section>
      <div className="text-center container-support">
      <h1 className="mt-2">Comunicate por:</h1>
      <h3 className="mt-4">
        {<FaWhatsapp />} 385-493 1838 
      </h3>
      <h3 className="mt-4"><FaPhoneAlt /> +54 11 1234-5678</h3>
      <h3 className="mt-4"> <MdOutlineEmail /> larana@gmail.com</h3>
      </div>
      <div className="mt-5 container">
        <button>Sign off</button>
      </div>
      </section>
    
    
    );
};
export default Support;
