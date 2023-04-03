import styled from "styled-components";
import userdata from "../../../crawler/data/userdata";

const Wrap = styled.div`
  display:flex;
  justify-content:space-between;
  flex-direction:column;
  gap:10px;
`
const Img = styled.img`
  width:125px;
  margin:10px 0;
  border-radius:50%;
`

const Name = styled.div`
  
`

const Desc = styled.p`
  color:var(--desc-color);
  margin-top:5px;
`

const Profile = () => {
  return <>
    <h2>Profile</h2>
    <Wrap>
      <Img src="https://avatars.githubusercontent.com/u/65532873?v=4" alt="Profile_Picture" />
      <div>
        <Name>m0ozeh</Name>
        <Desc>{userdata.bio}</Desc>
      </div>
    </Wrap>
  </>
}

export default Profile;