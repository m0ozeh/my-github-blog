import styled from "styled-components";
import { Paragraph, Title } from "../theme";

const NotFound = () => {
  return <NotFoundWrap>
    <Title>엇?!</Title>
    <Paragraph>
      죄송합니다, 찾으시는 페이지가 없는 것 같습니다.
    </Paragraph>
  </NotFoundWrap>
}

const NotFoundWrap = styled.div`
  display:flex;
  flex-direction:column;
  font-size:var(--font-large);
  align-items:center;
`

export default NotFound;