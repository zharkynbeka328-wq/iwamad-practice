import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <Header
        title="Akmaral Zharkynbek"
        subtitle="IT Management Student and Aspiring Web Developer"
      />

      <Outlet />

      <Footer
        year={2026}
        name="Akmaral Zharkynbek"
      />
    </>
  );
}

export default Layout;