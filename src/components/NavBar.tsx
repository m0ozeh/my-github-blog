import styled from "styled-components";
import NavBarMenu from "./NavBarMenu";
import { Link } from "react-router-dom";

const TopMenu = () => {
  return (
    <Content>
      <FlexBox>
        <NavBarLogo>
          <Link to="/">
            <LogoStrong>m0ozeh</LogoStrong>
            .github.io
          </Link>
        </NavBarLogo>
        <NavBarMenu />
      </FlexBox>
    </Content>
  );
};

const Content = styled.div`
  /* Header */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  * {
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  width: 100%;
  height: 80px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const FlexBox = styled.div`
  margin: 0 auto;
  width: var(--layout-width);
  height: 100%;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  align-items: center;
`;

const NavBarLogo = styled.span`
  cursor: pointer;
  font-style: normal;
  font-size: 1.2rem;
  line-height: 52px;
`;

const LogoStrong = styled.span`
  background: linear-gradient(90.92deg, #0058a9 0%, #020006 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
`;

export default TopMenu;
