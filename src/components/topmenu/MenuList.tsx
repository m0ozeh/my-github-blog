import styled from "styled-components";
import Theme from "../../assets/theme-icon.svg"
import Menu from "../../assets/menu.svg";
import { Link } from "react-router-dom";

const List = styled.ul`
  display: flex;
  flex-direction: row;
  width: 15rem;
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

const MenuList = () : JSX.Element => {
  return <List>
    <Item>
      <Link to="./all">
        All
      </Link>
    </Item>
    <Item>
      <a href="https://github.com/m0ozeh">
        Github
      </a>
    </Item>
    <Item>
      <Svg src={Menu} />
    </Item>
    <Item>
      <Svg src={Theme}/>
    </Item>
  </List>
}

export default MenuList;