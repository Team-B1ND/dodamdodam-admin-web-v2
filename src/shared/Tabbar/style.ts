import { DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const Container = styled.div`
  width: 195px;
  height: 88vh;
  background-color: #fff;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px 0;
  
  @media (max-width: 768px) {
    width: 100%;
    height: 60px;
    border-radius: 0;
    padding: 8px 12px;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 100;
    box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
  }
`;

export const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 0;
    justify-content: space-around;
    padding: 0;
    margin: 0;
  }
`;

export const MenuButton = styled.button<{ $active: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  margin: 0 10px;
  border: none;
  border-radius: 12px;
  background: ${({ $active, theme }) => ($active ? theme.primaryNormal : "transparent")};
  color: ${({ $active }) => ($active ? "#fff" : "#333")};
  ${DodamTypography.Body1.Medium};
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;

  @media (max-width: 768px) {
    flex: 1;
    flex-direction: column;
    padding: 8px;
    align-items: center;
    border-radius: 12px;
    background: ${({ $active, theme }) => ($active ? theme.primaryNormal : "transparent")};
    color: ${({ $active }) => ($active ? "#fff" : "#666")};
    transition: all 0.2s ease;

    span {
      display: none;
    }
  }
`;

export const Footer = styled.div`
  text-align: center;
  color: #999;
  font-size: 12px;
  line-height: 1.4;
  padding-bottom: 12px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const PhoneIcon = styled.img<{ $active: boolean }>`
  width: 24px;
  height: 24px;
  filter: ${({ $active }) => ($active ? "invert(1)" : "invert(0)")};
  transition: filter 0.2s ease;

  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
    filter: ${({ $active }) => ($active ? "invert(1)" : "invert(0)")};
    transition: filter 0.2s ease;
  }
`;
