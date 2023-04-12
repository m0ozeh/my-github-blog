import styled from "styled-components";
import { SubTitle, Content, Paragraph } from "../../../theme";
import {getAllPostList} from "../../../ts/Postdata";
import { Card } from "../../../theme";

const All = () => {
  console.log(getAllPostList());
  return <div>
    <SubTitle>#2 My Posts</SubTitle>
    <Paragraph>
      Try m0ozeh's Github Open Source Projects or contribute to my be-loved projects!
    </Paragraph>
    <div>
      
    </div>
  </div>
}

export default All;