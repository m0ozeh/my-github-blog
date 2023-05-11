import styled from "styled-components";
import { SubTitle, Paragraph } from "../../theme";
import PostCard from "./PostCard";
import { useDispatch, useSelector } from "react-redux";
import { Category, fetchCategory } from "../../ts/store/reducers/CategorySlice";
import { AppDispatch, RootState } from "../../ts/store";
import { useEffect } from "react";

interface PostGridProp {
  posts:Category[]
}

export default function PostGrid ({posts}:PostGridProp): JSX.Element {
  

  function renderPostCards(posts:Category[]):JSX.Element[] {
    let idx = 0;
    let allPostComponents:JSX.Element[] = [];
    posts.map((category) => {
      category.postTitle.map((postName, id) => {
        allPostComponents.push(
          <PostCard key={idx++} id={id} postTitle={postName} category={category.name} />
        )
      });
    });
    return allPostComponents;
  }

  return <div>
    <SubTitle>#2 My Posts</SubTitle>
    <Paragraph>
      Try m0ozeh's Github Open Source Projects or contribute to my be-loved projects!
    </Paragraph>
    <PostWrap>
      {
        posts.length == 0 ? <>Loading...</> : renderPostCards(posts)
      }
    </PostWrap>
  </div>
}

const PostWrap = styled.div`
  display:flex;
  gap:20px;
  flex-wrap:wrap;
`