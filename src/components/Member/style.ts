import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;

export const ScrollableContent = styled.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  height: 40px;
  margin: 16px;
`;