import { Route, Routes } from "react-router-dom";
import PanelLayout from "../layout/panel";
import Dashboard from "../pages/dashboard";
import NFTMarketplace from "../pages/nftMarketplace";
import Tables from "../pages/tables";
import Kanban from "../pages/kanban";
import Profile from "../pages/profile";
import SignIn from "../pages/signIn";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PanelLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="nft-marketplace" element={<NFTMarketplace />} />
        <Route path="tables" element={<Tables />} />
        <Route path="kanban" element={<Kanban />} />
        <Route path="profile" element={<Profile />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
