import styled from "styled-components";

const Wrap = styled.div`
  display:flex;
  flex-direction:column;
`

const Title = styled.h2`
  border-bottom:1px solid var(--secondary-color);
  padding-bottom:0.5rem;
  max-width:300px;
`

const CatList = styled.ul`
  list-style-type: none;
  border-left: 6px solid;
  padding-left: 10px;
  margin:0;
  margin-inline-start: 20px;
`

const CatTitle = styled.div`
  font-weight:500;
  padding-bottom:5px;
`

const Category = () => {
  return <Wrap>
    <Title>Category</Title>
    <div>
      <div>
        
        <CatTitle>Programming</CatTitle>
        <CatList>
          <li>Javascript</li>
          <li>Python</li>
        </CatList>

        <CatTitle>Test1</CatTitle>
        <CatList>
          <li>Test1-1</li>
          <li>Test1-1</li>
        </CatList>

      </div>
    </div>
  </Wrap>
}

export default Category;