import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  padding: 16px 12px;
  background-color: ${({ theme }) => theme.backgroundNeutral};
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 12px 8px 70px;
  }
`;

export const Main = styled.div` 
  flex: 1;
  height: 88vh;           
  margin-left: 12px;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 20px;
  overflow: hidden;       
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 12px;
    padding: 16px;
    border-radius: 8px;
  }
`;
