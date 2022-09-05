import { useState } from "react";
import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const [burgerState, setBurgerState] = useState(false);
  
  return (
    <Container>
      <a href="/" >
        <img src="/images/logo.svg" alt="tesla"/>
      </a>
      <Menu>
        <a href="/">Modal S</a>
        <a href="/">Modal Y</a>
        <a href="/">Modal 3</a>
        <a href="/">Modal X</a>
      </Menu>
      <RightMenu>
        <a href="/">Shop</a>
        <a href="/">Tesla Account</a>
        <CustomMenu onClick={() => setBurgerState(true)} />
      </RightMenu>
 
      {/* {
        burgerState &&
        <BurgerNav>
          <CloseWrapper>
            <CustomClose onClick={() => setBurgerState(false)} />
          </CloseWrapper>
          <li><a href="/">Existing Inventory</a></li>
          <li><a href="/">Used Inventory</a></li>
          <li><a href="/">Trade-in</a></li>
          <li><a href="/">Cybertruck</a></li>
          <li><a href="/">Roadster</a></li>
        </BurgerNav>
      } */}
      <BurgerNav show={burgerState}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerState(false)} />
        </CloseWrapper>
        <li><a href="/">Existing Inventory</a></li>
        <li><a href="/">Used Inventory</a></li>
        <li><a href="/">Trade-in</a></li>
        <li><a href="/">Cybertruck</a></li>
        <li><a href="/">Roadster</a></li>
      </BurgerNav>

    </Container>
  )
}

export default Header;

const Container = styled.div`
  top: 0;
  left: 0;
  right: 0;
  padding: 20px;
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;  
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  // border: 1px solid black;

  flex: 1;

  a {
    padding: 0 10px;
    font-weight: 600;
    text-transform: uppercase;
    flex-wrap: nowrap;
  }

  @media(max-width: 768px) {
    display: none
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    margin: 10px;
    font-weight: 600;
    text-transform: uppercase;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  padding: 20px;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  list-style: none;

  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.2s;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);

    a {
      font-weight: 600;
    }
  }
`;

const CloseWrapper = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: flex-end;
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;
