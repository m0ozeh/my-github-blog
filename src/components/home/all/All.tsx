import styled from "styled-components";
import { SubTitle, Paragraph } from "../../../theme";
import { getAllPostList } from "../../../ts/Postdata";
import PostCard from "./PostCard";

const All = () => {
  const postTitleData = getAllPostList();
  console.log(postTitleData);

  return <div>
    <SubTitle>#2 My Posts</SubTitle>
    <Paragraph>
      Try m0ozeh's Github Open Source Projects or contribute to my be-loved projects!
    </Paragraph>
    <PostWrap>
      {
        postTitleData.map((post, index) => {
          return <PostCard post={post} index={index}/>
        })
      }
    </PostWrap>
  </div>
}

const PostWrap = styled.div`
  display:flex;
  gap:20px;
  flex-wrap:wrap;
`


export default All;