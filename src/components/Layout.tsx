import { NavLink, Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <Header
        title="Akmaral Zharkynbek"
        subtitle="IT Management Student and Aspiring Web Developer"
      />

      <nav>
  <NavLink
    to="/"
    className={({ isActive }) => (isActive ? "active-link" : "")}
  >
    Home
  </NavLink>

  {" | "}

  <NavLink
    to="/skills"
    className={({ isActive }) => (isActive ? "active-link" : "")}
  >
    Skills
  </NavLink>

  {" | "}

  <NavLink
    to="/contact"
    className={({ isActive }) => (isActive ? "active-link" : "")}
  >
    Contact
  </NavLink>
</nav>

      <Outlet />

      <Footer
        year={2026}
        name="Akmaral Zharkynbek"
      />
    </>
  );
}

export default Layout;