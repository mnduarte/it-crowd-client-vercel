import styled from "styled-components";
import arrowIcon from "../../assets/svg/arror-right.svg";

export const SearchContainer = styled.div`
  position: relative;
`;

export const SearchInput = styled.input`
  width: 350px;
  padding: 10px 40px 10px 10px;
  font-size: 0.9rem;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color: #0077ff;
    box-shadow: 0 0 0 2px rgba(0, 119, 255, 0.2);
  }
`;

export const ArrowIcon = styled.span`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 15px;
  background: url(${arrowIcon}) no-repeat center center;
`;
