import styled from "styled-components";
import Card from "../Card";

const Lang = styled.div`
  /* Used Project Language */
  margin-top:10px;
  color:var(--comment-color);
`

const Head = styled.div`
  font-weight:500;
`

const Project = () => {
  return <>
  <Card>
    <Head>boj-ranker</Head>
    <p>백준 랭작을 해봅시다.</p>
    <Lang>
      C++
    </Lang>
  </Card>
  <Card>
    <Head>meal-db</Head>
    <p>Javascript React Context API Project</p>
    <Lang>
      Javascript
    </Lang>
  </Card>
  </>
}

export default Project;