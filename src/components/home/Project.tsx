import styled from "styled-components";
import Card from "../Card";

const Wrap = styled.div`
  display:flex;
  flex-direction:column;
  gap:10px;
  * {
    font-size:14px;
  }
  a {
    text-decoration:none;
    color:inherit;
  }
  p {
    margin-top:0;
    color:var(--desc-color);
  }
`

const Lang = styled.div`
  /* Used Project Language */
  margin-top:10px;
  color:var(--comment-color);
`

const Head = styled.div`
  font-weight:600;
`
// 리스트를 iteration 하여 보내주고싶다면 컴포넌트의 리스트를 return해야한다.
const Project = ({ projects }: any) => {
  console.log(projects);
  return <Wrap>{projects.map((project: any, index: number) => {
    return <a href={`https://github.com/m0ozeh/${project.repoTitle}`}>
      <Card key={index}>
        <Head>{project.repoTitle}</Head>
        <p>{project.repoDesc}</p>
        <Lang>
          {project.repoLang}
        </Lang>
      </Card>
    </a>
  })}</Wrap>
}

export default Project;