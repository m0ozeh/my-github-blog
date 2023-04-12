import styled from "styled-components";
import Project from "./Project";
import { Paragraph, SubTitle } from "../../theme";

const PinnedProject = () => {
  return <div>
    <SubTitle>#1 Pinned Projects</SubTitle>
    <Paragraph>
      Try m0ozeh's Github Open Source Projects or contribute to my be-loved projects!
    </Paragraph>
    <ProjectWrap>
      <Project />
    </ProjectWrap>
  </div>
}

const ProjectWrap = styled.div`
  display:block;
  height:150px;
  overflow:hidden;
`

export default PinnedProject;