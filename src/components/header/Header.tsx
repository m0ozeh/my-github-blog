import styled from "styled-components";
import HomeLogo from "./HomeLogo";
import MenuList from "./MenuList";

const Content = styled.div`
  /* Header */
  * {
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
  }
  a {
    text-decoration:none;
    color:inherit;
  }
  width: 100%;
  height: 80px;
  box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const FlexBox = styled.div`
  margin:0 auto;
  width: var(--layout-width);
  height:100%;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  align-items: center;
`;

const Header = (): JSX.Element => {
  return <Content>
    <FlexBox>
      <HomeLogo />
      <MenuList/>
    </FlexBox>
  </Content>
}

export default Header;