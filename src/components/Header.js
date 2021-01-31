import styled from 'styled-components'
import logo from '../assets/img/logo.png'

const HeaderStyles = styled.header`
  padding: 4rem 0;
  text-align: center;

  @media screen and (max-width: 640px) {
    padding-top: 0;

    img {
      width: 280px;
    }
  }
`

const Header = () => (
  <HeaderStyles>
    <img src={logo} alt='Logo Elena & Jannik' />
  </HeaderStyles>
)

export default Header
