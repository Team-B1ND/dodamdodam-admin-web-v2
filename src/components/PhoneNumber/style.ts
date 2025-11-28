import { DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 40px;
`;

export const Text = styled.p`
  ${DodamTypography.Heading1.Medium};
  color: #000000ff;
`;