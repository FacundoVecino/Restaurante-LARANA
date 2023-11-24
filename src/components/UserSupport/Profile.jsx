import { TiEdit } from "react-icons/ti";
import { useSession } from "../../stores/useSession";
import { useState } from "react";
import { toast } from "sonner";
import Swal from "sweetalert2";
import { MdLogout } from "react-icons/md";
import { postUserFn, putUserFn } from "../../api/users";


const Profile = () => {
  const { user, loadUser, isLoggedIn, logout } = useSession();
  console.log(user);
  const [editingField, setEditingField] = useState(null);

  const handleEdit = (fieldName) => {
    setEditingField(fieldName);
  };

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


  const handleChange = (e) => {
    loadUser({ ...user, [e.target.name]: e.target.value });
    console.log(user)
    
    
  };

  const handleSave = () => {
    // Guarda los cambios, podrías enviar una solicitud al servidor aquí 
putUserFn();
    setEditingField(null);
   
  };

  return (
    <section className="container">
      <div className="text-center mt-5">
        <div className="d-flex">
          <input
            type="text"
            name="firstname"
            value={
              editingField === "firstname" ? user.firstname : user.firstname
            }
            onChange={handleChange}
            readOnly={editingField !== "firstname"}
          />
          {editingField === "firstname" ? (
            <button type="button" className="buttonEditUser" onClick={handleSave}>
              Guardar
            </button>
          ) : (
            <button
              type="button"
              className="buttonEditUser"
              onClick={() => handleEdit("firstname")}
            >
              <TiEdit />
            </button>
          )}
        </div>
        <div className="d-flex">
          <input
            type="text"
            name="lastname"
            value={editingField === "lastname" ? user.lastname : user.lastname}
            onChange={handleChange}
            readOnly={editingField !== "lastname"}
          />
          {editingField === "lastname" ? (
            <button type="button" className="buttonEditUser" onClick={handleSave}>
              Guardar
            </button>
          ) : (
            <button
              type="button"
              className="buttonEditUser"
              onClick={() => handleEdit("lastname")}
            >
              <TiEdit />
            </button>
          )}
        </div>
        <div className="d-flex">
          <input
            type="text"
            name="username"
            value={editingField === "username" ? user.username : user.username}
            onChange={handleChange}
            readOnly={editingField !== "username"}
          />
          {editingField === "username" ? (
            <button type="button" className="buttonEditUser" onClick={handleSave}>
              Guardar
            </button>
          ) : (
            <button
              type="button"
              className="buttonEditUser"
              onClick={() => handleEdit("username")}
            >
              <TiEdit />
            </button>
          )}
        </div>
        <div className="d-flex">
          <input
            type="email"
            name="email"
            value={editingField === "email" ? user.email : user.email}
            onChange={handleChange}
            readOnly={editingField !== "email"}
          />
          {editingField === "email" ? (
            <button type="button" className="buttonEditUser" onClick={handleSave}>
              Guardar
            </button>
          ) : (
            <button
              type="button"
              className="buttonEditUser"
              onClick={() => handleEdit("email")}
            >
              <TiEdit />
            </button>
          )}
        </div>
        <div className="d-flex">
          <input
            type="password"
            name="password"
            value={editingField === "password" ? user.password : user.password}
            onChange={handleChange}
            readOnly={editingField !== "password"}
          />
          {editingField === "password" ? (
            <button type="button" className="buttonEditUser" onClick={handleSave}>
              Guardar
            </button>
          ) : (
            <button
              type="button"
              className="buttonEditUser"
              onClick={() => handleEdit("password")}
            >
              <TiEdit />
            </button>
          )}
        </div>
        
        {isLoggedIn && (<button type="button" className="btnLogout mt-5" onClick={handleLogout}><MdLogout /> Sing off</button>
      )}
      </div>
      
    </section>
  );
};

export default Profile;
