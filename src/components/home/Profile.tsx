import styled from "styled-components";

const Wrap = styled.div`
  width:250px;
  margin-right:50px;
  margin-bottom:30px;
  display:flex;
  justify-content:space-between;
  flex-direction:column;
  float:left;
`
const Img = styled.img`
  width:125px;
  margin:10px 0;
  border-radius:50%;
`

const GappedP = styled.p`
  margin-top:10px;
`

const Profile = () => {
  return <Wrap>
    <h2>Profile</h2>
    <Img src="https://avatars.githubusercontent.com/u/65532873?v=4" alt="Profile_Picture" />
    <div>
      <h3>m0ozeh</h3>
      <GappedP>너무 심심한 하루이다.</GappedP>
    </div>
    
  </Wrap>
}

export default Profile;