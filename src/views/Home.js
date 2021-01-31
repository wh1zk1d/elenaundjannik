import couple from '../assets/img/couple.jpg'

export default function Home() {
  return (
    <div>
      <h2 className='page-title'>Unsere Hochzeit</h2>
      <div className='content'>
        <p>
          Am <span className='pink'>05.06.2021</span> isses soweit – wir heiraten! Ob wir dann feiern können lässt sich
          leider noch nicht so richtig sagen.
        </p>
        <p>Falls es mit der Feier nicht klappen sollte, findet ihr hier dann die Zoom-ID.</p>
      </div>
      <img src={couple} alt='Die 2 Sahneschnittchen' />
    </div>
  )
}
