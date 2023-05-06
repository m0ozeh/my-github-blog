import styled from "styled-components"
import {Link} from "react-router-dom"

const NavBarLogo = () => {
  return <Span>
    <Link to="/">
      <Strong>
        m0ozeh
      </Strong>
      .github.io
    </Link>
  </Span>
}

export default NavBarLogo;

const Span = styled.span`
  cursor:pointer;
  font-style: normal;
  font-size: 1.2rem;
  line-height: 52px;
`

const Strong = styled.span`
  background: linear-gradient(90.92deg, #0058A9 0%, #020006 100%);
  background-clip:text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
`
