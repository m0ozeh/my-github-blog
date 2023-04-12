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
  </Content>
}

const Content = styled.div`
  width:var(--content-width);
  margin:0 auto;
`

export default Home;