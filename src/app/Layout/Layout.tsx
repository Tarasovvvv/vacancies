import { Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";

function Layout() {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
