import hannling from '../assets/img/hannah.jpg'

export default function Hannah() {
  return (
    <div>
      <h2 className='page-title'>Unsere Festleiterin</h2>
      <div className='content'>
        <p>Hannah Madeleine Thom – unser Mädsche für alles.</p>
      </div>
      <img src={hannling} alt='Hannling' />
      <div className='content'>
        <a href='https://wa.me/4915789520157' target='_blank' rel='noreferrer' title='Hannah schreiben'>
          Hannah schreiben
        </a>
      </div>
    </div>
  )
}
