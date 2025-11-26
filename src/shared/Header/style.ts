import styled from "styled-components";
import { DodamTypography } from "@b1nd/dds-web";

export const Header = styled.header`
  width: 100%;
  height: 85px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    height: 60px;
    padding: 0 16px;
    position: sticky;
    top: 0;
    z-index: 100;
  }
`;

export const Logo = styled.img`
  height: 40px;
  object-fit: contain;
  cursor: pointer;

  @media (max-width: 768px) {
    height: 28px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

export const UserName = styled.span`
  color: ${({ theme }) => theme.gray800};
  ${DodamTypography.Headline.Medium};

  @media (max-width: 768px) {
    ${DodamTypography.Body2.Medium};
  }
`;

export const LoginButton = styled.button`
  background-color: ${({ theme }) => theme.primaryNormal};
  color: #fff;
  border: none;
  padding: 8px 20px;
  border-radius: 10px;
  ${DodamTypography.Body1.Bold};
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    padding: 6px 12px;
    border-radius: 8px;
    ${DodamTypography.Body2.Bold};
  }
`;
