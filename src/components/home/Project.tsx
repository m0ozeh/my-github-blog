import styled from "styled-components";
import PinnedProject from "../../../crawler/data/PinnedProject";
import { Card } from "../../theme";
import { useEffect, useState } from "react";

type ClickDir = "left" | "right" | "center";

const ANIMATE_TIME = 1000;

// 리스트를 iteration 하여 보내주고싶다면 컴포넌트의 리스트를 return해야한다.
const Project = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [doAnimation, setAnimation] = useState<ClickDir>("center");

  useEffect(() => {
    const arr: any[] = [...PinnedProject];

    for (let i = 0; arr.length < 5; ++i) {
      arr.push(arr[i]);
    }

    setProjects(arr.slice(0, 5));
  }, []);

  // console.log(projects);

  const scrollMove = (delayTime: number, dir: ClickDir, callback: Function) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (dir != "center") {
      setAnimation(dir);
      setTimeout(() => callback.apply(this, [e, dir]), delayTime);
    }
    else callback.apply(this, [e, dir]);
  }

  function handleMoveClick(e: React.MouseEvent<HTMLAnchorElement>, dir: ClickDir) {
    const movedArray: any[] = [...projects];
    switch (dir) {
      case "left":
        movedArray.unshift(movedArray.pop());
        break;

      case "right":
        movedArray.push(movedArray.shift());
        break;

      case "center":
        window.open(projects[2].repoLink, "_blank");
        break;
    }
    setAnimation("center");
    setProjects(movedArray);
  }

  const eventHandlers = [
    (e: React.MouseEvent<HTMLAnchorElement>) => { },
    scrollMove(ANIMATE_TIME, "left", handleMoveClick),
    scrollMove(0, "center", handleMoveClick),
    scrollMove(ANIMATE_TIME, "right", handleMoveClick),
    (e: React.MouseEvent<HTMLAnchorElement>) => { }
  ];

  function setTransition() {
    return "move" + doAnimation;
  }

  return <Wrap className={setTransition()}>{
    projects.map((project, index: number) => {
      return <a key={index} onClick={eventHandlers[index]}>
        <ProjectCard>
          <div>
            <Head>{project.repoTitle}</Head>
            <Desc>{project.repoDesc}</Desc>
          </div>
          <Lang>
            {project.repoLang}
          </Lang>
        </ProjectCard>
      </a>
    })}</Wrap>
}


const Wrap = styled.div`
  display:flex;
  position:relative;
  height:150px;
  flex-direction:row;
  justify-content:center;
  gap:10px;
  left:0px;

  a {
    text-decoration:none;
    color:inherit;
    &:not(:nth-child(3)) {
      filter:opacity(0.7);
    }
    &:nth-child(3) {
      display:flex;
      flex-direction:column;
      justify-content:flex-start;

    }
  }

  &.moveleft {
    transition:${ANIMATE_TIME}ms ease-in-out;
    left:442px;
  }

  &.moveright {
    transition:${ANIMATE_TIME}ms ease-in-out;
    left:-442px;
  }
`

const Lang = styled.div`
  /* Used Project Language */
  color:var(--comment-color);
`

const Head = styled.div`
  font-weight:var(--medium);
`

const Desc = styled.div`
  font-weight:var(--regular);
  color:var(--third-color);
`

const ProjectCard = styled(Card)`
  position:relative;
  overflow:hidden;
  display:flex;
  flex-direction:column;
  justify-content:space-between;

  height:calc(120px - 2px);
  width:calc(400px);
`

export default Project;