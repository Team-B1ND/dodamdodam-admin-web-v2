import * as S from "./style";
import { DodamFilledButton } from "@b1nd/dds-web";
// import Person from "@/assets/person.svg?react";
import Person from "@/assets/person.svg?react";

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
        {profile ? (
          <img src={profile} alt={name} />
        ) : (
          <S.ProfilePlaceholder>
            <Person width={25} height={25} />
          </S.ProfilePlaceholder>
        )}
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
