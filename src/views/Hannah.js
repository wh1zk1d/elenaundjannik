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
        <a href='tel:015789520157' title='Hannah anrufen'>
          Hannah anrufen
        </a>
      </div>
    </div>
  )
}
