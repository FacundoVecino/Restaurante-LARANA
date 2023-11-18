import CardModal from "../components/Main/Menu/CardModal.jsx";

const MainView = () => {
  return (
    <section className="sec-main">
      <h1 className="text-center mb-5">Cuál es tu comida para esta noche?</h1>
      <CardModal />
      <CardModal />
    </section>
  );
};
export default MainView;
