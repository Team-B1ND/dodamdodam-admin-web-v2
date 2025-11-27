import { DodamTypography } from '@b1nd/dds-web';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  ${DodamTypography.Body1.Medium};
`;

export const Input = styled.input`
  width: 430px;
  padding: 16px;
  border: none;
  border-radius: 12px;
  outline: none;
  ${DodamTypography.Body1.Medium};
  color: ${({ theme }) => theme.labelAlternative};
  background-color: ${({ theme }) => theme.fillNormal};
`;

export const ImageInputWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

export const ImageInput = styled(Input)`
  flex: 1;
`;

export const ImageButton = styled.button`
  padding: 16px 24px;
  border: none;
  border-radius: 12px;
  ${DodamTypography.Body1.Medium};
  color: ${({ theme }) => theme.labelAlternative};
  background-color: ${({ theme }) => theme.fillNormal};
`;

export const SubmitButton = styled.div`
  width: 100%;
  margin-top: 20px;
`;

export const ImageName = styled.div`
  width: 300px;
  padding: 16px;
  border: none;
  border-radius: 12px;
  outline: none;
  ${DodamTypography.Body1.Medium};
  color: ${({ theme }) => theme.labelAlternative};
  background-color: ${({ theme }) => theme.fillNormal};
`;