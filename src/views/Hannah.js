import hannling from '../assets/img/hannah.jpeg'

export default function Hannah() {
  return (
    <div>
      <h2 className='page-title'>Unsere Festleiterin</h2>
      <div className='content'>
        <p>Hannah Madelaine Thom – unser Mädsche für alles.</p>
      </div>
      <img src={hannling} alt='Hannling' />
      <div className='content'>
        <a href='tel:015789520157' title='Ruf die alde an'>
          Willste kennenlernen? Hier klicken
        </a>
      </div>
    </div>
  )
}
