import { useState } from "react";
import { DodamDatePicker, DodamFilledButton } from "@b1nd/dds-web";
import * as S from "./style";

interface Props {
  handleChangeDate: (e: Date, scope: "start" | "end") => void;
}

const SaveBox = ({ handleChangeDate }: Props) => {
  const [endDate, setEndDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );

  return (
    <S.Container>
      <S.FormField>
        <S.Label>제목</S.Label>
        <S.Input type="text" placeholder="배너 제목을 입력해주세요" />
      </S.FormField>

      <S.FormField>
        <S.Label>보관 기간</S.Label>
        <DodamDatePicker
          itemKey="startDate"
          title="보관 기간"
          color="primaryNormal"
          type="entire"
          dateType="MonthDay"
          value={endDate}
          customStyle={{ border: "none" }}
          onChange={(date: Date) => {
            const formatted = date.toISOString().split("T")[0];
            setEndDate(formatted);
            handleChangeDate(date, "end");
          }}
        />
      </S.FormField>

      <S.FormField>
        <S.Label>링크</S.Label>
        <S.Input type="text" placeholder="이동할 링크를 입력해주세요" />
      </S.FormField>

      <S.FormField>
        <S.Label>이미지</S.Label>
        <S.ImageInputWrapper>
          <S.ImageName>banner_image.png</S.ImageName>
          <S.ImageButton>이미지 선택</S.ImageButton>
        </S.ImageInputWrapper>
      </S.FormField>

      <S.SubmitButton>
        <DodamFilledButton size="Large" textTheme="staticWhite" enabled>
          등록
        </DodamFilledButton>
      </S.SubmitButton>
    </S.Container>
  );
};

export default SaveBox;
