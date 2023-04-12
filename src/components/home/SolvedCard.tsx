import styled from "styled-components";

const Img = styled.img`
  height:inherit;
`
const ImgWrap = styled.div`
  height:inherit;
  min-width:257.344px;
`

const SolvedCard = ():JSX.Element => {
  return <ImgWrap>
      <Img src="http://mazassumnida.wtf/api/v2/generate_badge?boj=blu3fishez"/>
    </ImgWrap>

}

export default SolvedCard;