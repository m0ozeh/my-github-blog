import styled from "styled-components";

const Wrap = styled.div`
  width:300px;
  float:right;
`
const Img = styled.img`
  width:inherit;
`

const SolvedCard = ():JSX.Element => {
  return <Wrap>
    <h2>Solved.ac</h2>
    <Img src="http://mazassumnida.wtf/api/v2/generate_badge?boj=blu3fishez"></Img>
  </Wrap>
}

export default SolvedCard;