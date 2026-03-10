import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #1a1a1a;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background-color:  #53c687;

  width: 320px;
  min-height: 420px;

  border-radius: 12px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  padding: 4px;
  gap: 4px;

  width: 100%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  align-items: center;

  width: 100%;
`;