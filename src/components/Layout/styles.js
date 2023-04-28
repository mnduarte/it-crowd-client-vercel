import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 100px;
  box-shadow: 0 8px 200px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    padding: 15px;
  }
`;

export const Info = styled.div`
  margin-right: 20px;
  display: flex;
  align-items: center;
`;

export const MenuList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const MenuItem = styled(Link)`
  margin: 0 10px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;  
  color: #444654;

  &:hover {
    color: #fdb813;
  }
`;

export const Container = styled.div`
  margin: 0px 10px;

  @media (min-width: 768px) {
    margin: 0px 50px;
  }
`;
