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
  width: 95%;
  max-width: 1100px;
  margin: 150px auto;
  padding: 45px 15px;
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
    line-height: 2;

    &:hover,
    &.active {
      color: var(--blue);
    }

    /* &.active:before {
      content: '✨';
      display: inline-block;
      margin-right: 4px;
    } */
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
