import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Rootlayout } from "@/shared/Layout/Rootlayout";
import { MainPage } from "@/pages/MainPage";
import { BannerPage } from "@/pages/BannerPage";
import { PhoneNumberPage } from "@/pages/PhoneNumberPage";
import { JoinApprovalPage } from "@/pages/JoinApprovalPage";
import { AuthorityPage } from "@/pages/AuthorityPage";
import AuthPage from "@/pages/Auth/authPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign" element={<AuthPage />} />
        <Route path="/" element={<Rootlayout />}>
          <Route index element={<MainPage />} />
          <Route path="/banner" element={<BannerPage/>} />
          <Route path="/phone" element={<PhoneNumberPage/>} />
          <Route path="/joinApproval" element={<JoinApprovalPage/>} />
          <Route path="/authority" element={<AuthorityPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
