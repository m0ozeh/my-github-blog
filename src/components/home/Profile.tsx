import styled from "styled-components";
import UserBio from "../../../crawler/data/UserBio";
import { Title } from "../../theme";
import SolvedCard from "./SolvedCard";

const Profile = () => {
  return <div>
    <Title>Profile</Title>
    <Wrap>
      <Img src="https://avatars.githubusercontent.com/u/65532873?v=4" alt="Profile_Picture" />
      <Paragraph>
        <div>
          <Name>m0ozeh</Name>
          <UnderLine></UnderLine>
          <Tags>#Front-End_Developer #WebGL_User #Studying_DeepLearning</Tags>
        </div>
        <Desc>{UserBio.bio}</Desc>
      </Paragraph>
      <SolvedCard />
    </Wrap>
  </div>
}


const Wrap = styled.div`
  * {
    font-weight:var(--regular);
  }
  display:flex;
  height:125px;
  gap:30px;
  flex-direction:row;
  margin:0 auto;
  justify-content:center;
  align-items:center;
`
const Img = styled.img`
  height:inherit;
  border-radius:50%;
`

const Name = styled.div`
  font-weight:var(--medium);
`

const Paragraph = styled.div`
  width:500px;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  height:inherit;
`

const UnderLine = styled.div`
  background-color:var(--comment-color);
  height:1px;
  width:100%;
`
const Tags = styled.div`
  color:var(--comment-color);
`
const Desc = styled.p`
  color:var(--secondary-color);
  margin-top:5px;
`

export default Profile;