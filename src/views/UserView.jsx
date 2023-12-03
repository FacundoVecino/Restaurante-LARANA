import { Outlet } from "react-router-dom";

import UserSupportNav from "../components/UserSupport/UserSupportNav/UserSupportNav";

const UserView = () => {
  return (
    <section>
      <UserSupportNav />
      <Outlet />
    </section>
  );
};
export default UserView;
