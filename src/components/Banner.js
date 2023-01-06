import '../styles/Banner.css'
import logo from '../assets/logo.png'

function Banner() {
  return (
    <div className="banner">
      <img src={logo} alt='logo kasa' className='logo' />
      <div className='banner-links'>
        <a href="/">Accueil</a>
        <a href="/">A propos</a>
      </div>
    </div>
  )
}

export default Banner
