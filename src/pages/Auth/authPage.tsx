import * as S from "./style";
import AuthLogo from "@/assets/auth_logo.svg?react";
import SignIn from "@/components/Auth/Signin";

const AuthPage = () => {

  return (
    <S.Main>
      <S.SignBox>
        <S.Logo src={AuthLogo} alt="auth" />
        <SignIn />
      </S.SignBox>
    </S.Main>
  );
};
export default AuthPage;
