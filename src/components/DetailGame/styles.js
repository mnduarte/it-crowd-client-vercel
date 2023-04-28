import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px;
`;

export const Image = styled.img`
  width: 400px;
  height: auto;
  margin-bottom: 20px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 10px;
`;

export const Released = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const Rating = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;



export const Button = styled.button`
  background-color: ${(props) => (props.isFavorite ? "pink" : "grey")};
  color: white;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) =>
      props.isFavorite ? "hotpink" : "lightgrey"};
  }
`;
