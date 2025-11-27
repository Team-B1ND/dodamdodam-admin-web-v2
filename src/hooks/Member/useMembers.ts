import { useEffect, useState, useCallback } from "react";
import memberRepository from "@/repositories/Member/member.repository";

export interface Member {
  id: string;
  name: string;
  email: string;
  status: string;
  profileImage?: string;
  student?: {
    grade: number;
    room: number;
    number: number;
  } | null;
}

export const useMembers = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [classification, setClassification] = useState<string>("전체보기");
  const [keyword, setKeyword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const loadMembers = useCallback(async () => {
    setLoading(true);
    try {
      const data = await memberRepository.getMemberList();
      setMembers(data || []);
    } catch (e) {
      console.error(e);
      setMembers([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadMembers();
  }, [loadMembers]);

  const handleToggleStatus = useCallback(
    async (memberId: string) => {
      try {
        await memberRepository.changeMemberStatus(memberId, "DEACTIVATED");
        await loadMembers();
      } catch (e) {
        console.error(e);
      }
    },
    [loadMembers]
  );

  const filteredMembers = members.filter((member) => {
    if (classification !== "전체보기") {
      if (classification === "선생님" && member.student) return false;
      const gradeMap: Record<string, number> = {
        "1학년": 1,
        "2학년": 2,
        "3학년": 3,
      };
      if (member.student?.grade !== gradeMap[classification]) return false;
    }

    if (keyword) {
      const searchFields = [member.name, member.id, member.email]
        .filter(Boolean)
        .map((field) => field.toLowerCase());

      if (!searchFields.some((field) => field.includes(keyword.toLowerCase())))
        return false;
    }

    return true;
  });

  return {
    members: filteredMembers,
    classification,
    setClassification,
    keyword,
    setKeyword,
    handleToggleStatus,
    loading,
  };
};
