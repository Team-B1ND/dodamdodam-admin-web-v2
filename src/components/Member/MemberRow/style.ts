import styled from "styled-components";
import { DodamTypography } from "@b1nd/dds-web";

export const Row = styled.div`
  display: grid;
  grid-template-columns: 140px 200px 250px 250px 300px 90px;
  align-items: center;
  padding: 12px 24px;
  background-color: ${({ theme }) => theme.backgroundNormal};
  margin: 0px 6px;
`;

export const Profile = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const ProfilePlaceholder = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.fillNormal};
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 25px;
    height: 25px;
  }
`;

export const Name = styled.span`
  ${DodamTypography.Label.Medium};
  text-align: left;
  padding-left: 30px;
`;

export const ClassInfo = styled.span`
  ${DodamTypography.Label.Medium};
  text-align: left;
  padding-left: 30px;
`;

export const Text = styled.span`
  ${DodamTypography.Label.Medium};
  text-align: left;
  padding-left: 30px;
`;

export const Action = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  
  button {
    min-width: 80px;
    padding: 6px 12px;
  }
`;
