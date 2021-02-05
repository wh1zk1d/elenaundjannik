import styled from 'styled-components'
import { useState, useEffect } from 'react'

const WishlistStyles = styled.div`
  margin-top: 6rem;

  .examples-notice {
    border-top: 1px dashed var(--blue);
    padding: 8rem 0 4rem 0;
  }
`

const ItemStyles = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-column-gap: 40px;
  justify-content: space-between;
  align-items: center;

  margin: 4rem 0;
  padding-top: 4rem;
  border-top: 1px dashed var(--blue);
  text-align: left;

  h2 {
    font-family: 'Josefin Sans', sans-serif;
    margin-bottom: 1rem;
  }

  span:not(.example-link) {
    color: var(--pink);
  }

  a {
    color: var(--blue) !important;
  }

  .example-link .example {
    color: var(--blue);
    font-style: italic;
  }

  &.checked {
    cursor: not-allowed;
    opacity: 0.2;
    filter: grayscale(100%);

    h2 {
      color: var(--blue);
    }
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-row-gap: 30px;
  }
`

const LoadingStyles = styled.div`
  color: var(--pink);
  text-transform: uppercase;
  margin-top: 6rem;
`

const Item = ({ link, title, example, isChecked, id }) => {
  const [checked, setChecked] = useState(isChecked)
  const [isArray] = useState(typeof link === 'object')

  const handleClick = () => {
    if (window.confirm(`Möchtest du uns "${title}" schenken?`)) {
      setChecked(true)
    }
  }

  return (
    <ItemStyles className={checked ? 'checked' : null}>
      <div>
        {checked ? (
          <>
            <h2>{title} (schon weg)</h2>
            <a href={link} target='_blank' rel='noreferrer'>
              Zum Artikel
            </a>
          </>
        ) : (
          <div>
            <h2>{title}</h2>
            {isArray ? (
              link.map((url, i) => (
                <span key={url}>
                  <a href={url} title={title} target='_blank' rel='noreferrer'>
                    Hier
                  </a>
                  {i !== link.length - 1 ? ' oder ' : null}
                </span>
              ))
            ) : (
              <a href={link} title={title} target='_blank' rel='noreferrer'>
                {example ? (
                  <span className='example-link'>
                    Zum <span className='example'>Beispiel</span> hier
                  </span>
                ) : (
                  'Zum Artikel'
                )}
              </a>
            )}
          </div>
        )}
      </div>
      {!checked && (
        <div>
          <button onClick={handleClick} data-ref={id}>
            Als geschenkt markieren
          </button>
        </div>
      )}
    </ItemStyles>
  )
}

const Loading = () => <LoadingStyles>Momentchen, die Liste lädt grad noch...</LoadingStyles>

export default function Wishlist() {
  const [isLoading, setLoading] = useState(false)
  const [items, setItems] = useState(null)
  const [exampleItems, setExampleItems] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true)
      try {
        const res = await fetch('/.netlify/functions/wishlist')

        if (!res.ok) throw new Error('smth went wrong')

        const { data } = await res.json()

        setExampleItems(data.filter(item => item.data.isExample))
        setItems(data.filter(item => !item.data.isExample))
      } catch (error) {
        setError(true)
      }
      setLoading(false)
    }

    fetchItems()
  }, [])

  return (
    <div>
      <h2 className='page-title'>Unsere Wunschliste</h2>
      <div className='content'>
        <p>Wir sind jung und brauchen das Geld...</p>
        <p>
          Wenn ihr uns etwas schenken wollt, freuen wir uns natürlich sehr über <i>alle</i> Geschenke. Falls ihr noch
          Ideen sucht, haben wir hier eine Liste mit Sachen, über die wir uns freuen würden :)
        </p>
        <p>
          Wenn ihr uns einen dieser Wünsche erfüllen möchtet, klickt einfach auf 'Als geschenkt markieren'. Auf 'Zum
          Artikel' kommt ihr auf die jeweilige Bestellseite.
        </p>
        {isLoading ? <Loading /> : null}
        {error ? 'Mist, da ist was schiefgelaufen. Probiers später nochmal.' : null}
        {items && (
          <WishlistStyles>
            {items.map(item => (
              <Item
                key={item.ref['@ref'].id}
                title={item.data.name}
                link={item.data.link}
                example={item.data.isExample}
                isChecked={item.data.checked}
                id={item.ref['@ref'].id}
              />
            ))}
            <div className='examples-notice'>
              Ab hier sind unsere Ideen nur Vorschläge – bestellt gerne alternative Artikel, die euch besser gefallen.
            </div>
            {exampleItems.map(item => (
              <Item
                key={item.ref['@ref'].id}
                title={item.data.name}
                link={item.data.link}
                example={item.data.isExample}
                isChecked={item.data.checked}
                id={item.ref['@ref'].id}
              />
            ))}
          </WishlistStyles>
        )}
      </div>
    </div>
  )
}
