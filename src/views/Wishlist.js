import { useState } from 'react'
import { useQuery } from 'react-query'
import styled from 'styled-components'

const WishlistStyles = styled.div`
  margin-top: 6rem;

  .examples-notice {
    border-top: 1px dashed var(--blue);
    padding: 8rem 0 4rem 0;

    h2 {
      color: var(--blue);
      font-family: 'Josefin Sans', sans-serif;
    }
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

  a {
    color: var(--blue) !important;
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

const ErrorStyles = styled.div`
  color: var(--pink);
  text-transform: uppercase;
  margin-top: 6rem;
`

const Item = ({ link, title, example, isChecked, id }) => {
  const [checked, setChecked] = useState(isChecked)
  const [submitting, setSubmitting] = useState(false)

  const hasMultipleLinks = typeof link === 'object'

  const handleClick = async () => {
    if (window.confirm(`Möchtest du uns "${title}" schenken?`)) {
      setSubmitting(true)
      try {
        const res = await fetch(`/.netlify/functions/updateWishlist?ref=${id}`)
        if (!res.ok) throw new Error()
        setChecked(true)
      } catch (error) {
        alert('Mist, da ist was schiefgelaufen. Probiers bitte später nochmal.')
      }
      setSubmitting(false)
    }
  }

  return (
    <ItemStyles className={checked ? 'checked' : null}>
      <div>
        {checked ? (
          <>
            <h2>{title} (schon weg)</h2>
            <a href={link} target='_blank' rel='noreferrer'>
              {example ? 'Zum Beispiel hier' : 'Zum Artikel'}
            </a>
          </>
        ) : (
          <div>
            <h2>{title}</h2>
            {hasMultipleLinks ? (
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
                {example ? 'Zum Beispiel hier' : 'Zum Artikel'}
              </a>
            )}
          </div>
        )}
      </div>
      {!checked && (
        <div>
          <button onClick={handleClick} disabled={submitting}>
            {submitting ? 'Senden...' : 'Als geschenkt markieren'}
          </button>
        </div>
      )}
    </ItemStyles>
  )
}

export default function Wishlist() {
  const { isLoading, error, data } = useQuery('wishlistData', async () => {
    const res = await fetch('/.netlify/functions/getWishlist')
    const data = await res.json()
    return data
  })

  return (
    <div>
      <div className='content'>
        <h1 className='page-title'>Erstmal: Vielen Dank!</h1>
        <p>Wir sind jung und brauchen das Geld...</p>
        <p>
          Wenn ihr uns etwas schenken wollt, freuen wir uns natürlich sehr über <i>alle</i> Geschenke. Falls ihr noch
          Ideen sucht, haben wir hier eine Liste mit Sachen, über die wir uns freuen würden :)
        </p>
        <p>
          Wenn ihr uns einen dieser Wünsche erfüllen möchtet, klickt einfach auf 'Als geschenkt markieren'. Auf 'Zum
          Artikel' kommt ihr auf die jeweilige Bestellseite.
        </p>
        {isLoading ? <LoadingStyles>Momentchen, die Liste lädt grad noch...</LoadingStyles> : null}
        {error ? <ErrorStyles>Mist, da ist was schiefgelaufen. Probiers später nochmal.</ErrorStyles> : null}
        {data && (
          <WishlistStyles>
            {data
              .filter(item => !item.isExample && !item.checked)
              .map(item => (
                <Item
                  key={item.link}
                  title={item.name}
                  link={item.link}
                  example={item.isExample}
                  isChecked={item.checked}
                  id={item.ref['@ref'].id}
                />
              ))}

            <div className='examples-notice'>
              Ab hier sind unsere Ideen nur Vorschläge – bestellt gerne alternative Artikel, die euch besser gefallen.
            </div>

            {data
              .filter(item => item.isExample && !item.checked)
              .map(item => (
                <Item
                  key={item.link}
                  title={item.name}
                  link={item.link}
                  example={item.isExample}
                  isChecked={item.checked}
                  id={item.ref['@ref'].id}
                />
              ))}

            <div className='examples-notice'>
              <h2>Bereits geschenkt</h2>
            </div>
            {data
              .filter(item => item.checked)
              .map(item => (
                <Item
                  key={item.link}
                  title={item.name}
                  link={item.link}
                  example={item.isExample}
                  isChecked={item.checked}
                  id={item.ref['@ref'].id}
                />
              ))}
          </WishlistStyles>
        )}
      </div>
    </div>
  )
}
