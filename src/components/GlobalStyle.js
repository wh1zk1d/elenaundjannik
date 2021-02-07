import { createGlobalStyle } from 'styled-components'
import '@fontsource/spicy-rice'
import '@fontsource/josefin-sans'

import beachBg from '../assets/img/beach_bg.jpg'

const GlobalStyle = createGlobalStyle`
  :root {
    --pink: #FFC0CB;
    --blue: #091A52;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: url(${beachBg}) no-repeat center center / cover;
    background-attachment: fixed;
    color: #1a2a3a;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 1.8rem;
    line-height: 1.4;
    min-height: 100vh;
  }

  h1, h2, h3 {
    font-family: 'Spicy Rice', cursive;
    color: var(--pink);
    line-height: 1.2;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    max-width: 100%;
  }

  .page-title {
    color: var(--blue);
    font-size: 4.2rem;
    letter-spacing: 2px;
    margin-bottom: 4rem;
  }

  .content + img + .content {
    margin-top: 4rem;
  }

  .content {
    margin-bottom: 4rem;

    p {
      max-width: 65ch;
      margin: 0 auto;
    }

    a {
      color: var(--pink);
      text-transform: uppercase;
    }

    p + p {
      margin-top: 2rem;
    }
  }

  .pink, i {
    color: var(--pink);
    font-style: italic;
  }

  .audio-title {
    font-size: 1.6rem;
    padding-top: 1rem;
  }

  form {
    margin: 6rem 0 8rem 0;
  }

  input, textarea {
    border: 3px solid var(--blue);
    color: var(--blue);
    font-family: 'Josefin Sans', sans-serif;
    font-size: 1.8rem;
    display: block;
    margin: 2rem auto;
    line-height: 1;
    padding: 16px 10px;
    width: 42ch;
    max-width: 100%;
    transition: border 0.2s ease;

    &:focus {
      border-color: var(--pink);
      outline: 0 none;
    }
  }

  button {
    appearance: none;
    background: none;
    border: 4px solid var(--blue);
    color: var(--blue);
    font-family: 'Josefin Sans';
    font-size: 1.6rem;
    font-weight: bold;
    text-transform: uppercase;
    padding: 1.5rem 2rem;

    &:hover {
      background: var(--blue);
      color: var(--pink);
      cursor: pointer;
    }

    &:disabled {
      opacity: 0.6;
    }
  }

  @media screen and (max-width: 640px) {
    body {
      background: salmon;
      font-size: 1.6rem;
    }

    .page-title {
      font-size: 3.6rem;
    }
  }
`

export default GlobalStyle
