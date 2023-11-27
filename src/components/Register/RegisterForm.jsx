import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import { toast } from "sonner";

import { postUserFn } from "../../api/users";
 import { useSession } from "../../stores/useSession";

import Input from "../Input/Input";
import ButtonRegisterLogin from "./ButtonRegisterLogin";


const RegisterForm = () => {
  //ZUSTAND----------------------------------------------------------------

   const {login} = useSession();

  //RRD ----------------------------------------------------------------

  const navigate = useNavigate();

  //RHF  ----------------------------------------------------------------
  const {
    register,
    formState: { errors },
    handleSubmit: onSubmitRHF,
  } = useForm();

  // TQUERY----------------------------------------------------------------
  const { mutate: postUser } = useMutation({
    mutationFn: postUserFn,
    onSuccess: (data) => {
      //msj exito
      Swal.close();
      toast.success("Bienvenido");

      // Loguear al usuario
       login({...data})

      // Navegar a inicio pero estando logueado
      navigate("/");
    },
    onError: () => {
      Swal.close();
      toast.error("Ocurrio un error al registrar un usuario",);
    },
  });

  // HANDLERS---------------------------------------------------------------
  const handleSubmit = (data) => {
    Swal.showLoading();
    postUser({ ...data, isAdmin: false });
  };
  // RENDER --------------------------------------------------------------
  return (
    <div>
    <form onSubmit={onSubmitRHF(handleSubmit)} className="formsRegisterLogin py-4">
      <Input
        label="Nombre"
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
        

      <Input
        label="Apellido"
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

      <Input
        label="Nombre de usuario"
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
      <Input
        label="Email"
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
      <Input
        label="Contraseña"
        type="password"
        name="password"
        register={register}
        error={!!errors?.password}
        className="mb-4"
        options={{
          minLength: 8,
          maxaLength: 15,
          pattern: /^(?=.*[a-z])(?=.*[A-Z]).{8,15}$/,
          required: true,
        }}
      />
      <ButtonRegisterLogin/>
    </form>
    </div>
  );
};
export default RegisterForm;
