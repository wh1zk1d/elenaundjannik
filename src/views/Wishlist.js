import styled from 'styled-components'
import { useState } from 'react'

const WishlistStyles = styled.ul`
  margin-top: 6rem;

  li {
    font-size: 2.4rem;
    list-style-type: none;
    margin: 6rem 0;
  }

  a {
    letter-spacing: 2px;

    &.checked,
    &.checked .link {
      color: #d6dde4;
      text-decoration: line-through;
    }
  }

  .link {
    color: var(--blue);
    font-size: 1.8rem;
    text-transform: none;
  }

  button {
    margin-top: 2rem;
  }
`

const Item = ({ link, title, example = false }) => {
  const [checked, setChecked] = useState(false)

  const handleClick = () => {
    if (window.confirm(`Möchtest du uns "${title}" schenken?`)) {
      setChecked(true)
    }
  }

  return (
    <li>
      <a href={link} target='_blank' rel='noreferrer' title={title} className={checked ? 'checked' : null}>
        {title}
        <br />
        <span className='link'>{example ? 'Zum Beispiel hier' : 'Hier klicken'}</span>
      </a>
      {!checked && (
        <div>
          <button onClick={handleClick}>Als geschenkt markieren</button>
        </div>
      )}
    </li>
  )
}

export default function Wishlist() {
  return (
    <div>
      <h2 className='page-title'>Unsere Wunschliste</h2>
      <div className='content'>
        <p>Wir sind jung und brauchen das Geld...</p>
        <p>
          Wenn ihr uns etwas schenken wollt, freuen wir uns natürlich sehr über <i>alle</i> Geschenke.
        </p>
        <p>Falls ihr noch Ideen sucht, haben wir hier eine Liste mit Sachen, über die wir uns freuen würden :)</p>
        <p>
          Über 'Hier klicken' kommt ihr zur Bestellseite. Überall wo 'Zum Beispiel' steht, könnt ihr uns auch gerne eine
          Alternative eurer Wahl zu unserem Vorschlag schenken.
        </p>
        <p>
          Wenn ihr uns einen dieser Wünsche erfüllen wollt, klickt einfach auf 'Als geschenkt markieren' unter dem
          Eintrag, dann sehen andere, dass das schon verschenkt wurde (durchgestrichen und grau).
        </p>
        <WishlistStyles>
          <Item
            link='https://www.olivenoelausitalien.com/extra-vergine-olivenoel/kanister/?q=Menge-1l'
            title='Olivenöl'
          />
          <Item
            link='https://www.everdrop.de/products/pure-waschmittel-starter-set?variant=36763943436456'
            title='Waschmittel'
          />
          <Item link='https://www.everdrop.de/products/kuechen-set' title='Küchenset' />
          <Item
            link='https://www.wmf.com/de/messer/kuechenmesser/messersets/messerset-2-teilig-schwarz-touch.html'
            title='Messerset'
            example={true}
          />
        </WishlistStyles>
      </div>
    </div>
  )
}
