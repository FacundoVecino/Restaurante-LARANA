import { Outlet } from "react-router-dom";
import AccessPanelNav from "../components/AccesPanelView/AccessPanelNav.jsx";

const AccessPanelView = () => {
  return (
    <section>
      <AccessPanelNav />
      <Outlet />
    </section>
  );
};
export default AccessPanelView;
