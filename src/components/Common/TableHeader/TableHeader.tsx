import * as S from "./style";

interface ColumnConfig {
  label: string;
  align?: "left" | "center";
}

interface TableHeaderProps {
  columns: ColumnConfig[];
}

const TableHeader = ({ columns }: TableHeaderProps) => {
  return (
    <S.Wrapper>
      <S.HeaderRow>
        {columns.map((col, idx) =>
          col.align === "center" ? (
            <S.HeaderCellCenter key={idx}>{col.label}</S.HeaderCellCenter>
          ) : (
            <S.HeaderCell key={idx}>{col.label}</S.HeaderCell>
          )
        )}
      </S.HeaderRow>
    </S.Wrapper>
  );
};

export default TableHeader;