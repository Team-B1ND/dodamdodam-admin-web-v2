import * as S from "./style";
import { DodamFilledButton } from "@b1nd/dds-web";

interface MemberRowProps {
  profile?: string;
  name: string;
  grade: number;
  classNum: number;
  studentNum: number;
  id: string;
  email: string;
  isActive: boolean;
  onToggleStatus?: () => void;
}

// 일단 더미
const MemberRow = ({
  profile,
  name,
  grade,
  classNum,
  studentNum,
  id,
  email,
  isActive,
  onToggleStatus,
}: MemberRowProps) => {
  return (
    <S.Row>
      <S.Profile>
        {profile ? <img src={profile} alt={name} /> : <S.ProfilePlaceholder />}
      </S.Profile>
      <S.Name>{name}</S.Name>
      <S.ClassInfo>{`${grade}학년 ${classNum}반 ${studentNum}번`}</S.ClassInfo>
      <S.Text>{id}</S.Text>
      <S.Text>{email}</S.Text>
      <S.Action>
        <DodamFilledButton
          size="Small"
          textTheme="staticWhite"
          enabled
          onClick={onToggleStatus}
          style={{ margin: 0 }}
        >
          {isActive ? "비활성화" : "활성화"}
        </DodamFilledButton>
      </S.Action>
    </S.Row>
  );
};

export default MemberRow;
