import styled from "styled-components";

export const ContainerBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerList = styled.div`
  padding-top: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 60px;
`;
