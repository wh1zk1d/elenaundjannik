import styled from 'styled-components'
import logo from '../assets/img/logo.png'

const HeaderStyles = styled.header`
  padding: 4rem 0;
  text-align: center;
`

const Header = () => (
  <HeaderStyles>
    <img src={logo} alt='Logo Elena & Jannik' />
  </HeaderStyles>
)

export default Header
