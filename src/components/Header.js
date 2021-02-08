import styled from 'styled-components'
import logo from '../assets/img/logo.png'

import { Link } from 'react-router-dom'

const HeaderStyles = styled.header`
  padding: 4rem 0;
  text-align: center;

  @media screen and (max-width: 640px) {
    padding-top: 0;
    padding-bottom: 2rem;

    img {
      height: 45px;
    }
  }
`

const Header = () => (
  <HeaderStyles>
    <Link to='/'>
      <img src={logo} height='96' alt='Logo Elena & Jannik' />
    </Link>
  </HeaderStyles>
)

export default Header
