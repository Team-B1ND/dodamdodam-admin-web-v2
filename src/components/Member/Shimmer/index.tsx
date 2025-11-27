import * as S from "./style";

const MemberRowSkeleton = () => {
  return (
    <S.Row>
      <S.ProfileSkeleton />
      <S.NameSkeleton />
      <S.ClassSkeleton />
      <S.IdSkeleton />
      <S.EmailSkeleton />
      <S.ActionSkeleton />
    </S.Row>
  );
};

export default MemberRowSkeleton;
