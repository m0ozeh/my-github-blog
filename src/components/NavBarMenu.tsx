import styled from "styled-components";
import Theme from "../assets/theme-icon.svg"
import Menu from "../assets/menu.svg";

const List = styled.ul`
  display: flex;
  flex-direction: row;
  width: 200px;
  justify-content: space-between;
  font-style: normal;
  font-weight: 700;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
`;

const Svg = styled.img`
  width:1rem;
  height:1rem;
`

const NavBarMenu = () : JSX.Element => {
  return <List>
    <Item>
      <a href="https://github.com/m0ozeh">
        Github
      </a>
    </Item>
    <Item>
      <Svg src={Theme}/>
    </Item>
    <Item>
      <Svg src={Menu} />
    </Item>
    
  </List>
}

export default NavBarMenu;