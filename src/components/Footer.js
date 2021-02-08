import styled from 'styled-components'
import flowerpower from '../assets/img/flowerpower.png'

const FooterStyles = styled.footer`
  font-size: 1.6rem;
  padding-top: 8rem;
  text-align: center;

  @media screen and (max-width: 640px) {
    padding-top: 4rem;
  }
`

export default function Footer() {
  return (
    <FooterStyles>
      <img src={flowerpower} alt='Flowerpower' height='32' />
      <br />
      Wir freuen uns voll auf euch!
      <br />
      Herzlichst, Elena & Jannik
    </FooterStyles>
  )
}
