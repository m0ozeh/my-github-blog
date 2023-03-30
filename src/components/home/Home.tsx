import styled from "styled-components";
import Category from "./Category";
import Profile from "./Profile";
import ProjectWrap from "./ProjectWrap";
import SolvedCard from "./SolvedCard";

const HomeWrap = styled.div`
  * {
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
  }
  width: 1100px;
  margin: 3rem auto auto auto;
`

const ProfileWrap = styled.div`
  width:250px;
  margin-right:65px;
  display:flex;
  justify-content:space-between;
  flex-direction:column;
  float:left;
`

const MainWrap = styled.div`
  width:1100px;
`

const Home = (): JSX.Element => {
  return <HomeWrap className="font-bold">
    <h1>#Home</h1>
    <MainWrap>
      <ProfileWrap>
        <Profile />
        <Category />
      </ProfileWrap>
      <ProjectWrap />
      <SolvedCard />
    </MainWrap>
  </HomeWrap>
}

export default Home;