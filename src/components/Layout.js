import GlobalStyle from './GlobalStyle'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import Header from './Header'
import Container from './Container'
import Footer from './Footer'
import Player from './Player'

const Wrapper = styled.div`
  background: #fff;
  box-shadow: 10px 10px 0px var(--blue);
  width: 90%;
  max-width: 1100px;
  margin: 150px auto;
  padding: 45px 15px;

  @media screen and (max-width: 640px) {
    margin: 50px auto 150px auto;
    padding: 30px 15px;
    width: 92%;
  }
`

const Nav = styled.nav`
  font-family: 'Spicy Rice', cursive;
  margin-bottom: 4rem;

  ul {
    display: flex;
    justify-content: center;
  }

  ul li {
    display: inline-block;
    margin: 0 10px;
  }

  ul li a {
    color: var(--pink);
    font-size: 2rem;

    &:hover,
    &.active {
      color: var(--blue);
    }
  }

  @media screen and (max-width: 640px) {
    ul li {
      margin: 0 6px;
    }
  }
`

const Layout = ({ children }) => (
  <div>
    <GlobalStyle />
    <Wrapper>
      <Header />
      <Nav>
        <ul>
          <li>
            <NavLink exact to='/'>
              Hochzeit
            </NavLink>
          </li>
          <li>
            <NavLink to='/wunschliste'>Wunschliste</NavLink>
          </li>
          <li>
            <NavLink to='/gästebuch'>Gästebuch</NavLink>
          </li>
          <li>
            <NavLink to='/festleiterin'>Festleiterin</NavLink>
          </li>
        </ul>
      </Nav>
      <Container>{children}</Container>
      <Footer />
    </Wrapper>
    <Player />
  </div>
)

export default Layout
