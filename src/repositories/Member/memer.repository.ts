import { dodamAxios } from "@/libs/Axios/customAxios";

class MemberRepository {
  public async getMemberList(): Promise<any[]> {
    const { data } = await dodamAxios.get("/member/all");
    return data.data;
  }
}

export default new MemberRepository();