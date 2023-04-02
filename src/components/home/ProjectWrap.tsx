import styled from "styled-components";
import Project from "./Project";
import {FetchInstance} from "../../js/FetchInstance"

const Wrap = styled.div`
  width:400px;
  float:left;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const ProjectWrap = () => {
  new FetchInstance("https://github.com/m0ozeh", false);
  return <Wrap>
    <h2>Pinned Projects</h2>
    <Project />
  </Wrap>
}

export default ProjectWrap;