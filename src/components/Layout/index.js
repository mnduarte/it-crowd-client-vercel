import PropTypes from "prop-types";
import { HeaderContainer, Info, Container, MenuList, MenuItem } from "./styles";

export const Layout = ({ children }) => {
  return (
    <>
      <HeaderContainer>
        <h1>Challenge IT-CROWD</h1>
        <Info>
          <MenuList>
            <MenuItem to="/">Home</MenuItem>
            <MenuItem to="/favorites">Favorites</MenuItem>
          </MenuList>
        </Info>
      </HeaderContainer>
      <Container>{children}</Container>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
