// AdminUsers.jsx

// import { useQuery } from "@tanstack/react-query";
// import { getUserFn } from "../../../api/users";
// import CardUser from "./CardUsers/CardUser";
// import { useSession, useUser } from "../../../stores/useSession";
// import { useEffect } from "react";

const AdminUsers = () => {
  // const { user } = useSession()
  // const { setUserToEdit, userCurrent } = useUser()
  // console.log(users)

  // const { data: users } = useQuery({
  //   queryKey: ["users"],
  //   queryFn: getUserFn,
  // });
  // console.log("Users Data:", users);

  // useEffect(() => {
  //   setUserToEdit(userCurrent);
  // }, [userCurrent, setUserToEdit]);

  return (
    <div className="products-table d-flex flex-wrap justify-content-center">
      {/* {users.map((user) => (
        <CardUser user={user} key={user.id} />
      ))} */}
    </div>
  );
};

export default AdminUsers;
