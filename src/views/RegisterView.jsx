import RegisterForm from "../components/Register/RegisterForm";
import logo from "../assets/Logo.png";
const RegiterView = () => {
  const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

console.log(`Ancho de la pantalla: ${screenWidth}px`);
console.log(`Altura de la pantalla: ${screenHeight}px`);
  return (
    <>
      <section className="text-center">
        <div className="imgRegister">
          <div>
            <img src={logo} className="logoRegister" alt="Logo"  />
          </div>
          <div className="d-flex container justify-content-center ">
            <RegisterForm />
          </div>
        </div>
      </section>
    </>
  );
};
export default RegiterView;
