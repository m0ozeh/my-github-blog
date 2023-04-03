import styled from "styled-components";
import Project from "./Project";
import PINNED_PROJECT_DATA from "../../../crawler/data/PINNED_PROJECT_DATA";

const Wrap = styled.div`
  width:50%;
  float:left;
  display: flex;
  flex-direction: column;
`

const ProjectWrap = () => {
  
  return <Wrap>
    <h2>Pinned Projects</h2>
    <Project projects={PINNED_PROJECT_DATA}/>
  </Wrap>
}

export default ProjectWrap;