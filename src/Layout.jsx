import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import BountyCard from "./components/BountyCard";

function Layout({ children }) {


  const data = {
    "bounty_id": 56,
    "repoLink": "https://github.com/user1/repo1",
    "issueDescription": "Fix issue #123",
    "isApproved": 0,
    "user_id": "user1",
    "bounty_amount": 50,
    "approved_claim_id": 4
  };


  return (
    <div className="layout">
      <Navbar />
      <BountyCard data={data} />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout;