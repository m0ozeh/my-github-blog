import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Category, fetchCategory } from "../../ts/store/reducers/CategorySlice";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { useAppDispatch } from "../../ts/hooks";
import { Content } from "../../theme";
import "github-markdown-css/github-markdown-light.css"

const FETCH_LINK = "https://raw.githubusercontent.com/m0ozeh/my-github-blog/main/posts/";

/*
i need to fix typing component url parameters.
 */

const PostMain = () => {
  const {category, id}  = useParams();
  const [postBody, setPostBody ] = useState<string | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategory())
    .then((response) => {
      const allList = response.payload as Category[];
      for (let c of allList) {
        if(c.name != category) continue;
        fetchPostBody(FETCH_LINK + `${category}/${c.postTitle[Number(id)]}.md`).then((data:string) => {
          setPostBody(data);
          console.log(postBody);
        });
      }
    })
  }, [dispatch, postBody]);

  async function fetchPostBody (link:string):Promise<string> {
    return (await axios.get(link)).data;
  }
  
  return typeof postBody == typeof null ? <>Loading...</> :
  <Content className="markdown-body">
    <ReactMarkdown children={postBody!} />
  </Content>
}


export default PostMain