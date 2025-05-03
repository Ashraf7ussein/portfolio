import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <p>nav bar </p>
      <div id="main">
        <Outlet />
      </div>
      <p>footer </p>
    </>
  );
};

export default Layout;
