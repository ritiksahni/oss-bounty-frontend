import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout;