import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout;