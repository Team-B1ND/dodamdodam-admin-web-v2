import { DodamColor } from "@b1nd/dds-web";
import SectionHeader from "../Common/PageHeader/SectionHeader";
import SaveBox from "./SaveBox";

const Banner = () => {
  const handleChangeDate = (e: Date, scope: "start" | "end") => {
    console.log(`Date changed: ${e}, scope: ${scope}`);
  };

  return (
    <>
      <SectionHeader
        title="배너"
        description="배너 등록 및 수정을 할 수 있습니다"
      />

      <div style={{ flex: 1, flexDirection: "row", display: "flex", gap: 20 }}>
        <div style={{ width: 800, height: 583, background: DodamColor.blue10 }}>
          dfd
        </div>
        <SaveBox handleChangeDate={handleChangeDate} />
      </div>
    </>
  );
};

export default Banner;
