import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { toast } from "sonner";
import Swal from "sweetalert2";
import { useSession } from "../../stores/useSession";
import { MdLogout } from "react-icons/md";
const Support = () => {
const {logout, isLoggedIn}= useSession()

  const handleLogout = () =>{
    Swal.fire({
     title: "Atención",
     text: "Estás por cerrar tu sesión",
     icon: "warning",
     showCancelButton: true,
     confirmButtonText: "Si, salir",
     cancelButtonText: "Canselar"
    }).then((res)=>{
     if(res.isConfirmed){
       toast.success("Sesión cerrada. ¡Hasta luego!")
       logout();
     }
    })
   }
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
      <div className="mt-5 container text-center">
      {isLoggedIn && (<button type="button" className="btnLogout mt-5" onClick={handleLogout}><MdLogout /> Sign off</button>
      )}
      </div>
      </section>
    
    
    );
};
export default Support;
