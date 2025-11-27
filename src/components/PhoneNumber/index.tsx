import notFound from "@/assets/404.svg?react";
import * as s from "./style";

const PhoneNumber = () => {
  return (
    <s.Container>
      <s.notFoundStyle src={notFound} alt="Not Found" />
      <s.Text>이 기능은 지원 되지 않습니다.</s.Text>
    </s.Container>
  )
}

export default PhoneNumber;