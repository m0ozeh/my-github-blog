import styled from "styled-components";
import { Paragraph, Title } from "../theme";

const NotFound = () => {
  return <NotFoundWrap>
    <Title>404 Not Found</Title>
    <Paragraph>
      Sorry, there is no page that you want.
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