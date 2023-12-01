import LoginForm from "../components/Login/LoginForm";
import logo from "../assets/Logo.png";

const LoginView = () => {
  return (
    <>
      <section className="text-center">
      <div className="imgRegister">
        <div>
          <img src={logo} alt="Logo" className="logo mt-4" />
        </div>
        <div className="d-flex justify-content-center">
        <LoginForm />
        </div>
      </div></section>
    </>
  );
};
export default LoginView;
