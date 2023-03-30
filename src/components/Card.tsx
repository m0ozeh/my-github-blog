import styled from "styled-components";

const Border = styled.div`
  border:1px solid #888888;
  border-radius: 30px;
  padding:1rem;
`

const Card = ({children}:any) => {
  return <Border>
    {children}
  </Border>
}

export default Card;