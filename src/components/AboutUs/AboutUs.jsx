import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="contSection">
      <section >
        <div className="titleIinfo text-center mb-4">
          <h2>About Us</h2>
        </div>
        <div className="containerCardsInfo">
        <article className="infoCard mt-3">
          <h5>Welcome to LARANA: Where Elegance Meets Flavor</h5>
          <p>
            In the heart of culinary excellence emerges LARANA, a gastronomic
            haven where each dish is a masterpiece of refined flavors and
            culinary creativity. In our gourmet restaurant, we take pride in
            presenting a unique experience that blends culinary tradition with
            contemporary innovation.
          </p>
        </article>
        <article className="infoCard mt-3">
          <h5>Our Story</h5>
          <p>
            LARANA is more than just a restaurant; it is the culmination of a
            shared passion for great food and exceptional hospitality. Founded
            by a team of passionate chefs and gastronomy enthusiasts, LARANA was
            born with the vision of offering an unparalleled culinary experience
            in every detail.
          </p>
        </article>
        <article className="infoCard mt-3">
          <h5>Exceptional Hospitality</h5>
          <p>
            At LARANA, the customer experience is our top priority. Our team is
            dedicated to providing exceptional service in a welcoming and
            elegant atmosphere. Each visit to our restaurant is an opportunity
            to delight your senses and create unforgettable memories.
          </p>
        </article>
        <article className="infoCard mt-3">
          <h5>Join Us at LARANA</h5>
          <p>
            We invite you to immerse yourself in the charm of LARANA and
            discover a world where gastronomy becomes a celebration of the
            senses. Whether its a special occasion or just a night to indulge,
            at LARANA, every meal is a unique experience.
          </p>
        </article>
        </div>
      </section>
      <section className="mt-4">
        <div className="titleIinfo mb-4">
          <h2>Founders</h2>
        </div>
        <article className="profileCard d-flex mb-3">
          <img
            src="https://c0.klipartz.com/pngpicture/980/886/gratis-png-avatar-de-retrato-masculino-icono-de-computadora-icono-avatar-de-diseno-icono-de-cara-plana-thumbnail.png"
            alt=""
          />
          <div className="founderInfo">
            <h6>Enzo Iñigo</h6>
            <p>FullStack</p>
            <p>Developer</p>
          </div>
        </article>
        <article className="profileCard d-flex mb-3">
          <img
            src="https://c0.klipartz.com/pngpicture/980/886/gratis-png-avatar-de-retrato-masculino-icono-de-computadora-icono-avatar-de-diseno-icono-de-cara-plana-thumbnail.png"
            alt=""
          />
          <div className="founderInfo">
            <h6>Alexis Gunsett</h6>
            <p>FullStack</p>
            <p>Developer</p>
          </div>
        </article>
        <article className="profileCard d-flex mb-3">
          <img
            src="https://c0.klipartz.com/pngpicture/980/886/gratis-png-avatar-de-retrato-masculino-icono-de-computadora-icono-avatar-de-diseno-icono-de-cara-plana-thumbnail.png"
            alt=""
          />
          <div className="founderInfo">
            <h6>Fabri Canepa</h6>
            <p>FullStack</p>
            <p>Developer</p>
          </div>
        </article>
        <article className="profileCard d-flex mb-3">
          <img
            src="https://c0.klipartz.com/pngpicture/980/886/gratis-png-avatar-de-retrato-masculino-icono-de-computadora-icono-avatar-de-diseno-icono-de-cara-plana-thumbnail.png"
            alt=""
          />
          <div className="founderInfo">
            <h6>Facu Vecino</h6>
            <p>FullStack</p>
            <p>Developer</p>
          </div>
        </article>
      </section>
    </div>
  );
};
export default AboutUs;
