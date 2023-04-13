import styled from "styled-components";
import Profile from "./Profile";
import PinnedProject from "./PinnedProject";
import SolvedCard from "./SolvedCard";
import All from "./all/All";

const Home = (): JSX.Element => {
  return <Content>
    <Profile />
    <PinnedProject />
    <All />
    <Footer/>
  </Content>
}

const Content = styled.div`
  width:var(--content-width);
  margin:0 auto;
`

const Footer = styled.div`
  height:20px;
`

export default Home;