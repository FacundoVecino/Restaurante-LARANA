import RegisterForm from "../components/Register/RegisterForm";
import logo from "../assets/Logo.png";
const LoginView = () => {
  return (
    <>
      <section className="text-center container-fluid">
        <div className="imgRegister">
          <div>
            <img src={logo} alt="Logo" className="logo" />
          </div>
          <h2>Regístrate</h2>
          <div className="container d-flex justify-content-center">
          <div className="text-center">
            <RegisterForm />
          </div></div>
        </div>
      </section>
    </>
  );
};
export default LoginView;
