import * as s from "./style";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import { Tabbar } from "../Tabbar/Tabbar";

export const Rootlayout = () => {
  return (
    <s.Container>
      <Header />
      <s.Content>
        <Tabbar />
        <s.Main>
          <Outlet />
        </s.Main>
      </s.Content>
    </s.Container>
  );
};