import hannling from '../assets/img/hannah.jpg'

export default function Hannah() {
  return (
    <div>
      <div className='content'>
        <p>Hannah Madeleine Thom – unser Mädsche für alles.</p>
      </div>
      <img src={hannling} alt='Hannling' />
      <div className='content'>
        <p>Ablauf, Programm, Geschenke oder allgemeine Fragen des Lebens...</p>
        <p>
          <a href='https://wa.me/4915789520157' target='_blank' rel='noreferrer' title='Hannah schreiben'>
            Hannah schreiben
          </a>
        </p>
      </div>
    </div>
  )
}
