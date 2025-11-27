import styled, { keyframes } from "styled-components";
import { DodamTypography } from "@b1nd/dds-web";

const shimmer = keyframes`
  0% { background-position: -468px 0; }
  100% { background-position: 468px 0; }
`;

const SkeletonBase = styled.div`
  background: ${({ theme }) => theme.fillNormal};
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.fillNormal} 0%,
    ${({ theme }) => theme.fillSub} 20%,
    ${({ theme }) => theme.fillNormal} 40%,
    ${({ theme }) => theme.fillNormal} 100%
  );
  background-repeat: no-repeat;
  background-size: 800px 104px;
  display: inline-block;
  position: relative;
  animation: ${shimmer} 1.2s linear infinite;
  border-radius: 4px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 140px 200px 250px 250px 300px 90px;
  align-items: center;
  padding: 12px 24px;
  background-color: ${({ theme }) => theme.backgroundNormal};
  margin: 0px 6px;
`;

export const ProfileSkeleton = styled(SkeletonBase)`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  margin: 0 auto;
`;

export const NameSkeleton = styled(SkeletonBase)`
  height: 20px;
  width: 60px; 
  ${DodamTypography.Label.Medium}
  padding-left: 30px;
  margin-left: 30px;
`;

export const ClassSkeleton = styled(SkeletonBase)`
  height: 20px;
  width: 80px;
  ${DodamTypography.Label.Medium}
  padding-left: 30px;
  margin-left: 30px;
`;

export const IdSkeleton = styled(SkeletonBase)`
  height: 20px;
  width: 100px; 
  ${DodamTypography.Label.Medium}
  padding-left: 30px;
  margin-left: 30px;
`;

export const EmailSkeleton = styled(SkeletonBase)`
  height: 20px;
  width: 180px; 
  ${DodamTypography.Label.Medium}
  padding-left: 30px;
  margin-left: 30px;
`;

export const ActionSkeleton = styled(SkeletonBase)`
  width: 80px;
  height: 32px;
  border-radius: 6px;
  margin: 0 auto;
`;
