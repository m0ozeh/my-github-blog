import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Category, fetchCategory } from "../ts/store/reducers/CategorySlice";
import { AppDispatch, RootState } from "../ts/store";
import { useEffect } from "react";
// import { getCategoryTitle } from "../ts/Postdata";

const CategoryList = () => {
  const dispatch = useDispatch<AppDispatch>();
  
  const data:Category[] = useSelector((state:RootState) => state.category);
  
  useEffect(() => {
    if(data.length != 0) return;
    dispatch(fetchCategory());
  }, [dispatch]);

  return <Wrap>
    <CatList>
    {
      data.length == 0 ? <li>Loading ...</li> :
      data.map((value, idx) => {
        return <li key={idx}>{ `${value.name}(${value.postTitle.length})`}</li>
      })
      
    }
    </CatList>
  </Wrap>
}

export default CategoryList;


const Wrap = styled.div`
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  justify-content:center;
`
const CatList = styled.ul`
  display:block;
  list-style-type:none;
  margin:0;
  padding:0;

  li {
    display:block;
    color:var(--secondary-color);
    background:rgba(255,255,255,0.7);
    padding:5px;
    border-radius:20px;
    float:left;
    margin-left:10px;
    line-height:100%;
  }
`