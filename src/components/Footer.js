import styled from 'styled-components'

const FooterStyles = styled.footer`
  font-size: 1.6rem;
  padding-top: 8rem;
  text-align: center;
`

export default function Footer() {
  return (
    <FooterStyles>
      Wir freuen uns voll auf euch!
      <br />
      Herzlichst, Elena & Jannik
    </FooterStyles>
  )
}
