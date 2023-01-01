import styled from '@emotion/styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';
import { useState } from 'react';

const Nav = styled.header({
  width: '90%',
  margin: '0 auto',
  padding: '2rem 0',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const Navigation = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  listStyle: 'none',
});

const NavItem = styled.li`
  
  padding: 0 5rem;
  font-size: 1.5rem;
  font-weight: 500;

  &:hover {
    color: #DB0816;
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`
const Logo = styled.p({
  color: 'transparent',
});

const MobileMenu = styled.div`
  display: none;

  @media only screen and (max-width: 768px) {
    display: block;
  }
`

const MobileMenuList = styled.div`
  /* display: none;
  background-color: #ffffff;
  width: 50%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  -webkit-box-shadow: -9px 11px 15px -1px #e0e0e0; 
  box-shadow: -9px 11px 15px -1px #e0e0e0;
  transition: all linear .3s;
  padding: 5rem 4rem; */

`
const MobileMenuItem = styled.li`
  list-style: none;
  margin: 2rem 0;
  &:hover {
    color: #DB0816;
  }
`

const showMenu = styled.div`
  width: 376px;
  height: 500px;
  position: absolute;
  left: 0px;
  transition: 1s;
  `
  
  const hideMenu = styled.div`
  width: 376px;
  height: 500px;
  position: absolute;
  left: -376px;
  transition: 1s;
  `

export default function Header() {

  const [isOpen, setMenu] = useState(false);  // 메뉴의 초기값을 false로 설정
  
  const toggleMenu = () => {
    setMenu(isOpen => !isOpen); // on,off 개념 boolean
  }

  return (
    <Nav>
      <div>
        <Link to="/">
          <Logo>Eat-go</Logo>
          <img src="../../img/logo.png" alt="eatGo-logo" />
        </Link>
      </div>
      <Navigation>
        <NavItem><Link to="/about">About</Link></NavItem>
        <NavItem><Link to="/restaurants">Restaurants</Link></NavItem>
        <NavItem><Link to="/login">Log in</Link></NavItem>
      </Navigation>
      <MobileMenu>
        <FontAwesomeIcon icon={faBars}  onClick={()=>toggleMenu()}/>
        <div className={isOpen ? "showMenu" : "hideMenu"}>
          <FontAwesomeIcon icon={faXmark}/>
          <MobileMenuItem><Link to="/about">About</Link></MobileMenuItem>
          <MobileMenuItem><Link to="/restaurants">Restaurants</Link></MobileMenuItem>
          <MobileMenuItem><Link to="/login">Log in</Link></MobileMenuItem>
        </div>
      </MobileMenu>
    </Nav>
  );
}
