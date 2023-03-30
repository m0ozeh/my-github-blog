import styled from "styled-components";

const LogoSpan = styled.span`
  cursor:pointer;
  font-style: normal;
  font-size: var(--size-large);
  line-height: 52px;
`

const LogoStrong = styled.span`
  background: linear-gradient(90.92deg, #0058A9 0%, #020006 100%);
  background-clip:text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
`

const HomeLogo = () => {
  return <LogoSpan>
    <a href="./">
      <LogoStrong>
        m0ozeh
      </LogoStrong>
      .github.io
    </a>
  </LogoSpan>
}

export default HomeLogo;