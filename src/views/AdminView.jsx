import { Outlet } from "react-router-dom";
import AdminNav from "../components/Admin/AdminNav/AdminNav.jsx";
import AdminTitle from "../components/Admin/AdminTitle/AdminTitle.jsx";

const AdminView = () => {
  return (
    <>
      <AdminTitle />
      <AdminNav />
      <Outlet />
    </>
  );
};

export default AdminView;
