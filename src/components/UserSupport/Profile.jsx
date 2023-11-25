// import { TiEdit } from "react-icons/ti";
import { useSession } from "../../stores/useSession";

import { toast } from "sonner";
import Swal from "sweetalert2";
import { MdLogout } from "react-icons/md";
import { putUserFn } from "../../api/users";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import Input from "../Input/Input";
import { useEffect } from "react";

const Profile = () => {
  const { user, isLoggedIn, logout } = useSession();
  // REACT HUK FROM------------------------------------------
  const {
    register,
    handleSubmit: onSubmitRHF,
    formState: { errors },
    setValue,
    reset,
  } = useForm();

  useEffect(() => {
    if (user) {
      setValue("firstname", user.firstname);
      setValue("lastname", user.lastname);
      setValue("username", user.username);
      setValue("email", user.email);
      setValue("password", user.password);
    }
  }, [user, setValue]);

  // const isEditing = !!user;

  const queryClient = useQueryClient();

  const { mutate: putUser } = useMutation({
    mutationFn: putUserFn,
    onSuccess: () => {
      // mensaje de exito
      Swal.close();
      toast.success("usuario actualizado correctamente");

      // reseter el formulario
      reset();

      //limpiar estado global
      // clearUser()

      //indicar que la tabla se tiene que recargar
      queryClient.invalidateQueries("users");
    },
    onError: () => {
      Swal.close();
      toast.error("Ocurrió un error al guardar el usuario");
    },
  });

  const handleSubmit = (data) => {
    Swal.showLoading();
    console.log(data);
    
      putUser({ ...data, id: user.id });
    
    console.log(data);
    return;
  };

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
                maxaLength: 25,
                required: true,
              }}
            />
          </div>
          <div className="d-flex">
            <Input
              name="lastname"
              register={register}
              error={!!errors?.lastname}
              className="my-2"
              options={{
                minLength: 3,
                maxaLength: 25,
                required: true,
              }}
            />
          </div>
          <div className="d-flex">
            <Input
              name="username"
              register={register}
              error={!!errors?.username}
              className="my-2"
              options={{
                minLength: 3,
                maxaLength: 25,
                required: true,
              }}
            />
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
                maxaLength: 25,
                required: true,
              }}
            />
          </div>
          <div className="mt-3">
            <button type="submit">Guardar</button>
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
