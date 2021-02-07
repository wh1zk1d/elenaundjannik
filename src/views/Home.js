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
          isses soweit – wir heiraten! Ob wir dann feiern können lässt sich leider noch nicht so richtig sagen.
        </p>
        <p>Falls es mit der Feier nicht klappen sollte, findet ihr hier dann die Zoom-ID.</p>
      </div>
      <img src={couple} alt='Die 2 Sahneschnittchen' />
    </div>
  )
}
