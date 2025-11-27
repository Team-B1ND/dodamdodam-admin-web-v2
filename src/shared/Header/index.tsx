import * as s from "./style";
import DodminLogo from "@/assets/dodmin.svg?react";
import { useThemes } from "@/hooks/Theme/useThemes";
import { ETheme } from "@b1nd/dds-web";
import { useNavigate } from "react-router-dom";
import token from "@/libs/Token/token";
import { ACCESS_TOKEN_KEY } from "@/constants/Token/token.constant";
import useLogout from "@/hooks/Auth/useLogout";
const Header = () => {
  const { themeColor, handleTheme } = useThemes();
  const navigate = useNavigate();
  const { logOut } = useLogout();

  const isLoggedIn = Boolean(token.getToken(ACCESS_TOKEN_KEY));

  const handleAuthClick = () => {
    if (isLoggedIn) {
      logOut();
      return;
    }
    navigate("/sign");
  };

  return (
    <s.Header>
      <DodminLogo width={120} height={40} fill={themeColor === ETheme.DARK ? "#FFFFFF" : "#000000"} />
      <s.ButtonGroup>
        <s.UserName>관리자님</s.UserName>
            <s.LoginButton onClick={handleAuthClick}>
          {isLoggedIn ? "로그아웃" : "로그인"}
        </s.LoginButton>
      </s.ButtonGroup>
    </s.Header>
  );
};

export default Header;
