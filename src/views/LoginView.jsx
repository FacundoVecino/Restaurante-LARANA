import LoginForm from "../components/Login/LoginForm";

const LoginView = () => {
  return (
    <>
      <section className="text-center">
        <div className="imgRegister">
          <div className="d-flex justify-content-center">
            <LoginForm />
          </div>
        </div>
      </section>
    </>
  );
};
export default LoginView;
