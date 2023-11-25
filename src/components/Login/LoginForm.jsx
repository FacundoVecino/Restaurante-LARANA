import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import Swal from "sweetalert2";
import { toast } from "sonner";

import { useSession } from "../../stores/useSession";
import { postLoginFn } from "../../api/auth";

import Input from "../Input/Input";
import "./LoginForm.css";
import ButtonRegisterLogin from "../Register/ButtonRegisterLogin";

const LoginForm = () => {
  //ZUSTAND----------------------------------------------------------------

  const { login } = useSession();

  //RRD ----------------------------------------------------------------

  const navigate = useNavigate();

  //RHF  ----------------------------------------------------------------

  const {
    register,
    formState: { errors },
    handleSubmit: onSubmitRHF,
  } = useForm();

  // TQUERY----------------------------------------------------------------
  const { mutate: postLogin } = useMutation({
    mutationFn: postLoginFn,
    onSuccess: (data) => {
      //msj exito
      Swal.close();
      toast.success("Bienvenido");

      // Loguear al usuario
      login(data);
      
      // Navegar a inicio pero estando logueado
      navigate("/");
    },
    onError: (err) => {
      Swal.close();
      toast.error(err.message);
    },
  });

  // HANDLERS---------------------------------------------------------------

  const handleSubmit = (data) => {
    Swal.showLoading();
    postLogin(data);
  };

  // RENDER -----------------------------------------------------------

  return (
    <form onSubmit={onSubmitRHF(handleSubmit)} className="text-center formsRegisterLogin">
      <Input
        label="Email"
        placeholder="Ingrese su email"
        name="email"
        register={register}
        error={!!errors?.email}
        className="my-4"
        options={{
          minLength: 3,
          maxaLength: 25,
          required: true,
        }}
      />
      <Input
        label="Contraseña"
        type="password"
        placeholder="Ingrese su contraseña"
        name="password"
        className="my-4"
        register={register}
        error={!!errors?.password}
        options={{
          minLength: 8,
          maxaLength: 15,
          required: true,
        }}
      />
      <div className="my-4">
        <ButtonRegisterLogin />
      </div>
      <p className="my-4 text-center">
        Sos nuevo?<Link to="/register"> Ingresa </Link>
      </p>
    </form>
  );
};
export default LoginForm;
