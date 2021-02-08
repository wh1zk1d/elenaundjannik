import couple from '../assets/img/couple.jpg'
import iCal from '../assets/event.ics'

export default function Home() {
  return (
    <div>
      <div className='content'>
        <p>
          Am{' '}
          <span className='pink'>
            <a href={iCal} target='_blank' rel='noreferrer' title='Kalendereintrag erstellen'>
              05.06.2021
            </a>
          </span>{' '}
          ist es soweit. Wir heiraten.
        </p>
        <p>
          Unsere Ansprache findet um 16Uhr statt. Seid am besten 10-15 Minuten vorher am Start. Wählt euch ein und habt
          ne gute Zeit mit uns.
        </p>
        <p>
          <a
            href='https://zoom.us/j/847445419?pwd=aERQUHhUWjBCdjg5eUE4SUZtdk4zZz09'
            target='_blank'
            rel='noreferrer'
            title='Ab zu Zoom'>
            Hier gehts direkt zu Zoom
          </a>
        </p>
      </div>
      <img src={couple} alt='Die 2 Sahneschnittchen' />
    </div>
  )
}
