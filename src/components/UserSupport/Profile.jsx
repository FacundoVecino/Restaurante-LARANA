import { TiEdit } from "react-icons/ti";
import { useSession, useUser } from "../../stores/useSession";

import { toast } from "sonner";
import Swal from "sweetalert2";
import { MdLogout } from "react-icons/md";
import { putUserFn } from "../../api/users";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import Input from "../Input/Input";
import { useEffect, useState } from "react";


const Profile = () => {
  //-----------------------Zustand----------------------------------------------
  const { user, isLoggedIn, logout } = useSession();
  const { clearUser } = useUser();

  //-----------------------RHF----------------------------------------------
  const {
    register,
    handleSubmit: onSubmitRHF,
    formState: { errors },
    setValue,
    //reset,
  } = useForm();

  const [editingFields, setEditingFields] = useState({});

  useEffect(() => {
    if (user) {
      setValue("firstname", user.firstname);
      setValue("lastname", user.lastname);
      setValue("username", user.username);
      setValue("email", user.email);
    }
  }, [user, setValue]);



  //-----------------------TQUERY----------------------------------------------
  const queryClient = useQueryClient();

  const { mutate: putUser } = useMutation({
    mutationFn: putUserFn,
    onSuccess: () => {
      // mensaje de exito
      Swal.close();
      toast.success("Usuario actualizado");
      //limpiar estado global
      clearUser();
      //indicar que la tabla se tiene que recargar
      queryClient.invalidateQueries("users");
      setEditingFields({});
    },
    onError: () => {
      Swal.close();
      toast.error("Ocurrió un error al guardar el usuario");
    },
  });
  //-----------------------HANDLERS----------------------------------------------

  //edición
  const handleEditField = (fieldName) => {
    setEditingFields((prevFields) => ({
      ...prevFields,
      [fieldName]: !prevFields[fieldName],
    }));
  };

  // Submit
  const handleSubmit = (data) => {
    Swal.showLoading();
    const newData = {
      firstname: data.firstname,
      lastname: data.lastname,
      username: data.username,
      email: data.email,
      password: user.password,
      isAdmin: user.isAdmin,
      id: user.id,
    };

    putUser(newData);

    return;
  };
  //Logout
  const handleLogout = () => {
    Swal.fire({
      title: "Atención",
      text: "Estás por cerrar tu sesión",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, salir",
      cancelButtonText: "Canselar",
    }).then((res) => {
      if (res.isConfirmed) {
        toast.success("Sesión cerrada. ¡Hasta luego!");
        logout();
      }
    });
  };

  return (
    <section className="container">
      <div className="text-center mt-5">
        <form onSubmit={onSubmitRHF(handleSubmit)}>
          <div className="d-flex">
            <Input
              name="firstname"
              register={register}
              error={!!errors?.firstname}
              className="my-2"
              options={{
                minLength: 3,
                maxLength: 25,
                required: true,
              }}
              readOnly={!editingFields.firstname}
            />
            <button
              type="button"
              className="buttonEditUser"
              onClick={() => handleEditField("firstname")}
            >
              <TiEdit />
            </button>
          </div>
          <div className="d-flex">
            <Input
              name="lastname"
              register={register}
              error={!!errors?.lastname}
              className="my-2"
              options={{
                minLength: 3,
                maxLength: 25,
                required: true,
              }}
              readOnly={!editingFields.lastname}
            />
            <button
              type="button"
              className="buttonEditUser"
              onClick={() => handleEditField("lastname")}
            >
              <TiEdit />
            </button>
          </div>
          <div className="d-flex">
            <Input
              name="username"
              register={register}
              error={!!errors?.username}
              className="my-2"
              options={{
                minLength: 3,
                maxLength: 25,
                required: true,
              }}
              readOnly={!editingFields.username}
            />
            <button
              type="button"
              className="buttonEditUser"
              onClick={() => handleEditField("username")}
            >
              <TiEdit />
            </button>
          </div>
          <div className="d-flex">
            <Input
              type="email"
              name="email"
              register={register}
              error={!!errors?.email}
              className="my-2"
              options={{
                minLength: 3,
                maxLength: 25,
                required: true,
              }}
              readOnly={!editingFields.email}
            />
            <button
              type="button"
              className="buttonEditUser"
              onClick={() => handleEditField("email")}
            >
              <TiEdit />
            </button>
          </div>
          <div className="mt-3">
            <button type="submit" className="buttonSave">Save</button>
          </div>
        </form>
        {isLoggedIn && (
          <button
            type="button"
            className="btnLogout my-3"
            onClick={handleLogout}
          >
            <MdLogout /> Sign off
          </button>
        )}
      </div>
    </section>
  );
};

export default Profile;
