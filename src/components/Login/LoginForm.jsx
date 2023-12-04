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
import { useState } from "react";

const LoginForm = () => {
  //ZUSTAND----------------------------------------------------------------
 
  const { login } = useSession();

  //RRD ----------------------------------------------------------------

  const navigate = useNavigate();

  //RHF  ----------------------------------------------------------------
const[showPwd, setShowPwd]= useState(false)
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
      navigate("/user");
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
    <form onSubmit={onSubmitRHF(handleSubmit)} className="text-center formsLogin py-4">
     <h4>Welcome to LARANA</h4>
      <Input
        type="email"
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
      <div className="d-flex ">
      <Input
        label="Contraseña"
        type={showPwd ? "text" : "password"}
        placeholder="Ingrese su contraseña"
        name="password"
        className="p-2 w-100"
        register={register}
        error={!!errors?.password}
        options={{
          minLength: 8,
          maxaLength: 15,
          required: true,
          message: "UAU"
        }}
      />
       <div className="eyePasword" onClick={() => setShowPwd(!showPwd)}>
            {showPwd ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height={"1.5rem"}>
              <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
              <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
            </svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height={"1.5rem"}>
              <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
              <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
              <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
            </svg>}
          </div>
          </div>
      <div className="mb-3">
        <ButtonRegisterLogin text="log in"/>
      </div>
      <p className="text-center">
      Dont have an account?<Link to="/register"> Sign Up </Link>
      </p>
      <p className="text-center">
      Forgot Password? Get in<Link to="/register"> Ingresa </Link>
      </p>
    </form>
  );
};
export default LoginForm;
