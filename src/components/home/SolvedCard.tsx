import styled from "styled-components";

const Wrap = styled.div`
  width:45%;
  float:right;
`
const Img = styled.img`
  width:100%;
`

const SolvedCard = ():JSX.Element => {
  return <Wrap>
    <h2>Solved.ac</h2>
    <Img src="http://mazassumnida.wtf/api/v2/generate_badge?boj=blu3fishez"></Img>
  </Wrap>
}

export default SolvedCard;