import SectionHeader from "../Common/PageHeader/SectionHeader";
import TableHeader from "../Common/TableHeader/TableHeader";
import MemberRow from "./MemberRow";
import * as S from "./style";
import Select from "../Common/Select";
import SearchBar from "../Common/SearchBar";
import { useMembers } from "@/hooks/Member/useMembers";
import MemberRowSkeleton from "./Shimmer";

const Member = () => {
  const {
    members,
    classification,
    setClassification,
    keyword,
    setKeyword,
    handleToggleStatus,
    loading,
  } = useMembers();

  return (
    <S.Container>
      <SectionHeader
        title="구성원"
        description="현재 가입한 구성원을 볼 수 있습니다"
      />

      <S.ContentWrapper>
        <Select
          items={["전체보기", "1학년", "2학년", "3학년", "선생님"]}
          value={classification}
          onChange={setClassification}
          zIndex={2}
        />

        <SearchBar onChange={setKeyword} value={keyword} />
      </S.ContentWrapper>

      <TableHeader
        columns={[
          { label: "사진", align: "center" },
          { label: "이름" },
          { label: "반" },
          { label: "아이디" },
          { label: "이메일" },
          { label: "계정정지", align: "center" },
        ]}
      />

      <S.ScrollableContent>
        {loading
          ? Array(50)
              .fill(null)
              .map((_, idx) => <MemberRowSkeleton key={idx} />)
          : members.map((m) => {
              const student = m.student ?? null;
              const grade = student?.grade ?? 0;
              const classNum = student?.room ?? 0;
              const studentNum = student?.number ?? 0;
              const id = m.id ?? "";
              const email = m.email ?? "";
              const isActive = String(m.status).toUpperCase() === "ACTIVE";

              return (
                <MemberRow
                  key={m.id}
                  profile={m.profileImage ?? undefined}
                  name={m.name}
                  grade={grade}
                  classNum={classNum}
                  studentNum={studentNum}
                  id={id}
                  email={email}
                  isActive={isActive}
                  onToggleStatus={() => handleToggleStatus(m.id)}
                />
              );
            })}
      </S.ScrollableContent>
    </S.Container>
  );
};

export default Member;
