import { useQuery } from 'react-query'
import { useState } from 'react'
import styled from 'styled-components'

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

const Comment = styled.div`
  border: 2px dashed #dcdcdc;
  font-size: 2rem;
  padding: 20px 16px 16px 16px;
  max-width: 65ch;
  margin: 4rem auto;
  text-align: left;

  strong {
    color: var(--pink);
  }
`

const TextBox = () => {
  const [text, setText] = useState('')
  const [name, setName] = useState('')
  const [isLoading, setLoading] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target

    if (name === 'name') {
      setName(value)
    } else {
      setText(value)
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()

    setLoading(true)
    try {
      const res = await fetch(`/.netlify/functions/addMessage?name=${name}&message=${text}`)
      if (!res.ok) throw new Error()
      setName('')
      setText('')
      alert('Danke für deine Nachricht!')
    } catch {
      alert("Sorry, da hat was nicht geklappt. Magst du's später nochmal probieren?")
    }
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Schreib uns was Liebes</h2>
      <input type='text' value={name} name='name' placeholder='Dein Name' onChange={handleChange} required />
      <textarea name='message' value={text} rows='6' placeholder='Deine Nachricht' onChange={handleChange}></textarea>
      <button type='submit' disabled={isLoading}>
        {isLoading ? 'Senden...' : 'Abschicken'}
      </button>
    </form>
  )
}

export default function Guestbook() {
  const { isLoading, error, data } = useQuery('messages', async () => {
    const res = await fetch('/.netlify/functions/getMessages')
    const data = await res.json()
    return data
  })

  return (
    <div>
      <div className='content'>
        <p>Hier könnt ihr uns ne kleine Nachricht schreiben</p>
        <TextBox />
        {isLoading ? <LoadingStyles>Momentchen, das Gästebuch lädt grad noch...</LoadingStyles> : null}
        {error ? <ErrorStyles>Mist, da ist was schiefgelaufen. Probiers später nochmal.</ErrorStyles> : null}
        {data &&
          data.map((comment, i) => (
            <Comment key={i}>
              <strong>{comment.name}:</strong> "{comment.message}"
            </Comment>
          ))}
      </div>
    </div>
  )
}
