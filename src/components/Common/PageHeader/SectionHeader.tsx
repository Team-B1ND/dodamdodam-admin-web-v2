import { DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export interface SectionHeaderProps {
  title: string;
  description?: string;
}

const SectionHeader = ({ title, description }: SectionHeaderProps) => (
  <Wrapper>
    <Header>
      <Title>{title}</Title>
      {description && <Description>{description}</Description>}
    </Header>
    <Divider />
  </Wrapper>
);

export default SectionHeader;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 6px 6px;
`;

const Header = styled.div`
  display: flex;
  align-items: baseline;
  gap: 14px;
`;

const Title = styled.span`
  ${DodamTypography.Heading1.Bold};
  color: #000;
`;

const Description = styled.span`
  ${DodamTypography.Headline.Medium};
  color: #000;
`;

const Divider = styled.hr`
  border: 0;
  height: 1px;
  background-color: ${({ theme }) => theme.lineNormal};
`;
