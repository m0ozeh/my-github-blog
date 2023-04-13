import styled from "styled-components";
import { SubTitle, Paragraph } from "../../../theme";
import { getAllPostList } from "../../../ts/Postdata";
import { Card } from "../../../theme";
import PlaceholderImg from "../../../assets/heading.png";
import { Link } from "react-router-dom";

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
          const postDateObj = new Date(post.ctime);

          const postMonth = postDateObj.getMonth();
          const postDay = postDateObj.getDay();
          const postYear = postDateObj.getFullYear();

          return <PostCard key={index}>
            <div>
              <PostThumb src={PlaceholderImg} />
              <PostTitle>
                {post.title}
              </PostTitle>
              <div>
                <PostCategory>
                  {'#' + post.category}
                </PostCategory>
                <PostDate>
                  {`${postMonth} 월 ${postDay} 일, ${postYear}년`}
                </PostDate>
              </div>
            </div>
            <PostDetail>
              <Link to={""}>자세히 보기</Link>
            </PostDetail>
          </PostCard>
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

const PostCard = styled(Card)`
  user-select:none;
  width:220px;
  height:300px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
`

const PostThumb = styled.img`
  -webkit-user-drag:none;
  width:100%;
  height:150px;
  object-fit:cover;
  border-radius:5px;
`

const PostTitle = styled.div`
  font-weight:var(--bold);
`

// Date는 나중에 Description 정보를 가져올 수 있다면 그걸로 바꾸도록하자.
const PostDate = styled.div`
  font-size:var(--font-small);
`

const PostCategory = styled.div`
  color:var(--comment-color);
`

const PostDetail = styled.div`
  * {
    text-decoration:none;
    color:var(--third-color);
  }
`

export default All;