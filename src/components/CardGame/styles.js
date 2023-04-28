import styled from "styled-components";

export const CardWrapper = styled.div`
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 16px;
`;

export const CardTitle = styled.h3`
  margin: 0 0 8px 0;
  font-size: 24px;
  font-weight: bold;
`;

export const CardRating = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: bold;
`;

export const CardReleased = styled.p`
  margin: 8px 0 0 0;
  font-size: 16px;
`;