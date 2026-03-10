import styled, { keyframes } from 'styled-components';

const resultAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.9);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 85px;
  background-color: #53c687;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  font-size: 24px;
  font-family: "JetBrains Mono", monospace;

  input {
    width: 100%;
    height: 70px;
    background-color: #53c687;
    border: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 0 10px;
    font-size: 24px;
    font-family: "JetBrains Mono", monospace;
    color: #0f172a;
    animation: ${resultAnimation} 0.3s ease;
  }
`;

export const Container = styled.div`
  animation: ${resultAnimation} 0.3s ease;
`;