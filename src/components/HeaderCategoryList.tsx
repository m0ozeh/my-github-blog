import styled from "styled-components";
// import { getCategoryTitle } from "../ts/Postdata";

const CategoryList = () => {
  // const categories = getCategoryTitle();
  return <Wrap>
    <CatList>
      {/* {categories.map((value, idx) => {
        return <li key={idx}>
          {`${value.title} (${value.postCount})`}
        </li>
      })} */}
    </CatList>
  </Wrap>
}

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
export default CategoryList;