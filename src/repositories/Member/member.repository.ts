import { dodamAxios } from "@/libs/Axios/customAxios";
import { activeStatus } from "@/types/Member/member.type";

class MemberRepository {
  public async getMemberList(): Promise<any[]> {
    const { data } = await dodamAxios.get("/member/all");
    return data.data;
  }

  public async changeMemberStatus(memberId: string, status: activeStatus): Promise<any> {
    const { data } = await dodamAxios.patch(`/member/status?memberId=${memberId}&status=${status}`);
    return data;
  }
}


export default new MemberRepository();