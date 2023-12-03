import { Outlet } from "react-router-dom";
import AccessPanelNav from "../components/AccesPanelView/AccessPanelNav";

const AccessPanelView = () => {
  return (
    <section>
      <AccessPanelNav />
      <Outlet />
    </section>
  );
};
export default AccessPanelView;
