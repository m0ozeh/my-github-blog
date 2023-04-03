import styled from "styled-components";
import Category from "./Category";
import Profile from "./Profile";
import ProjectWrap from "./ProjectWrap";
import SolvedCard from "./SolvedCard";

import { Title } from "../../theme";

const Content = styled.div`
  * {
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
  }
  width: var(--layout-width);
  margin: 3rem auto auto auto;
`

const LayoutLeft = styled.div`
  width:var(--layout-left-width);
  display:flex;
  justify-content:space-between;
  flex-direction:column;
  float:left;
`

const LayoutRight = styled.div`
  width:var(--layout-right-width);
`

const MainWrap = styled.div`
  display:flex;
  justify-content:space-between;
`

const Home = (): JSX.Element => {
  return <Content>
    <Title>#Home</Title>
    <MainWrap>

      <LayoutLeft>
        <Profile />
        <Category />
      </LayoutLeft>
      
      <LayoutRight>
        <ProjectWrap />
        <SolvedCard />
      </LayoutRight>

    </MainWrap>
  </Content>
}

export default Home;