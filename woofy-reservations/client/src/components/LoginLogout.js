import React from "react";
import { Menu } from "semantic-ui-react";
import { useAuth0 } from "../react-auth0-spa.js";

const LoginLogout = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
        //what to do when logged in
        <Menu.Item name="logout" onClick={() => logout()}>
          Logout {user.name}
        </Menu.Item>
      ) : (
        //what to do when not logged in
        <Menu.Item name="login" onClick={() => loginWithRedirect({})} />
      )}
    </div>
  );
};

export default LoginLogout;