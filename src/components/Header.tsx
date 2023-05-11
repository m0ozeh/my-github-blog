import styled from "styled-components";
import HeaderCategoryList from "./HeaderCategory";
import BackgroundImg from "../assets/heading.png";

const Header = () => {
  return <Wrap>
    <div>
      <Content>
        <Title>Welcome To My Github Blog!</Title>
        <div>
          <div>Watch My Posts</div>
          <HeaderCategoryList />
        </div>
      </Content>
    </div>
  </Wrap>
}

const Wrap = styled.div`
  width:100%;
  height:280px;
  background:url(${BackgroundImg});
  background-position: center;
  background-position: 50% 25%;
  * {
    font-size:var(--regular);
    user-select:none;
  }

  > div {
    position:relative;
    height:200px;
    top:80px;
  }
`

const Title = styled.div`
  font-weight:var(--bold);
`

const Content = styled.div`
  position:relative;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;
  height:120px;
  top: 50%;
  transform: translateY(-50%);
  
  > div:nth-child(2) {
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:10px;
    > div:first-child {
      font-size:var(--font-large); 
    }
  }
`

export default Header;