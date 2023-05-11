import styled from "styled-components";
import Profile from "./Profile";
import PinnedProject from "./PinnedProject";
import PostGrid from "../all/PostGrid";
import { useAppDispatch } from "../../ts/hooks";
import { useSelector } from "react-redux";
import { RootState } from "../../ts/store";
import { Category, fetchCategory } from "../../ts/store/reducers/CategorySlice";
import { useEffect } from "react";

const Home = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const data:Category[] = useSelector((state:RootState) => (state.category));
  
  useEffect(() => {
    if(data.length != 0) return;
    dispatch(fetchCategory());
  }, [dispatch]);
  
  return <Content>
    <Profile />
    <PinnedProject />
    <PostGrid posts={data}/>
    <Footer/>
  </Content>
}

const Content = styled.div`
  width:var(--content-width);
  margin:0 auto;
`

const Footer = styled.div`
  height:20px;
`

export default Home;