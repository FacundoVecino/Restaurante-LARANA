import LoginForm from "../components/Login/LoginForm";
import logo from "../assets/Logo.png";

const LoginView = () => {
  return (
    <>
      <section className="text-center container-fluid">
      <div className="imgRegister">
        <div>
          <img src={logo} alt="Logo" className="logo mt-4" />
        </div>
        <h2 className="my-2">Ingresa</h2>
        <div className="container d-flex justify-content-center">
        <LoginForm />
        </div>
      </div></section>
    </>
  );
};
export default LoginView;
