import "./Contact.css";

import Input from "../Input/Input";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    formState: { errors },
    handleSubmit: onSubmitRHF,
  } = useForm();

  return (
    <>
      <section className="contactSec">
        <h2>Contact Us</h2>
        <article className="formContact">
          <p className="titleForm">We are interested in your opinion</p>
          <form onSubmit={onSubmitRHF()} id="contactForm">
            <Input
              label="Nombre"
              name="firstname"
              register={register}
              error={!!errors?.firstname}
              className="my-2"
              options={{
                minLength: 3,
                maxLength: 25,
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
                maxLength: 25,
                required: true,
              }}
            />
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
                maxLength: 25,
                required: true,
              }}
            />
            <textarea
              className="areaContact"
              name="textarea"
              placeholder="Tu consulta!"
            ></textarea>
            <button type="submit" onClick={onSubmitRHF()}>
              Envia!
            </button>
          </form>
        </article>
      </section>
    </>
  );
};
export default Contact;
