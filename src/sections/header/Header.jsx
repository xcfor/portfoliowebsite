import { useEffect } from 'react'
import data from './data'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './header.css'

const Header = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  return (
    <header id="header">
      <div className="container header__container">
        <h2  data-aos="fade-up" className='nameTitle'>Chris Forbes</h2>
        <h3 className='jobTitle'>Software Developer</h3>
        <p  data-aos="fade-up">
        I'm a software developer just finishing a masters degree in software development. Looking forward to working with you building awesome things.
        </p>
        <div className="header__cta"  data-aos="fade-up">
          <a href="#contact" className='btn primary'>Let's Talk</a>
          <a href="#portfolio" className='btn light'>My Portfolio</a>
        </div>
        <div className="header__socials">
          {
            data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header