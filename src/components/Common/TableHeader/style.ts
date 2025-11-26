import styled from "styled-components";
import { DodamTypography } from "@b1nd/dds-web";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const HeaderRow = styled.div`
  display: grid;
  grid-template-columns: 140px 200px 250px 250px 300px 90px;
  align-items: center;
  padding: 12px 24px;
  background-color: ${({ theme }) => theme.backgroundElevated};
  border-top: 1px solid ${({ theme }) => theme.lineNormal};
  border-bottom: 1px solid ${({ theme }) => theme.lineNormal};
  margin: 0px 6px;
`;

export const HeaderCell = styled.span`
  ${DodamTypography.Label.Medium};
  color: ${({ theme }) => theme.labelAlternative};
  text-align: left;
  padding-left: 30px;
`;

export const HeaderCellCenter = styled.span`
  ${DodamTypography.Label.Medium};
  color: ${({ theme }) => theme.labelAlternative};
  text-align: center;
  width: 100%;
`;