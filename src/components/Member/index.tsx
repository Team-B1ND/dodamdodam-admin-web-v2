import SectionHeader from "../Common/PageHeader/SectionHeader";
import TableHeader from "../Common/TableHeader/TableHeader";
import MemberRow from "./MemberRow";
import { useEffect, useState } from "react";
import memberRepository from "@/repositories/Member/memer.repository";
import * as S from "./style";

const Member = () => {
  const [members, setMembers] = useState<any[]>([]);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await memberRepository.getMemberList();
        setMembers(data || []);
      } catch (e) {
        setMembers([]);
      }
    };
    load();
  }, []);

  return (
    <S.Container>
      <SectionHeader
        title="구성원"
        description="현재 가입한 구성원을 볼 수 있습니다"
      />

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
        {members.map((m) => {
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
              onToggleStatus={() => {
                console.log("toggle status for", m.id);
              }}
            />
          );
        })}
      </S.ScrollableContent>
    </S.Container>
  );
};

export default Member;