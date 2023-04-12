import styled from "styled-components";

const Title = styled.div`
  margin-top:25px;
  margin-bottom:20px;
  font-weight:var(--bold);
  font-size:var(--font-large);
`

const SubTitle = styled(Title)`
  font-weight:var(--medium);
`

const Paragraph = styled.div`
  display:block;
  margin-left:20px;
  margin-top:25px;
  margin-bottom:20px;
`

const Content = styled.div`
  * {
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
  }
  width: var(--layout-width);
  margin: 3rem auto auto auto;
`

const Card = styled.div`
  border:1px solid var(--comment-color);
  border-radius: 20px;
  padding:15px;
`

export { Title, SubTitle, Content, Paragraph, Card };