import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) setMobileMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header className="header">
      <div className="container">
        
        <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/services">Продукция</Link></li>
            <li><Link to="/events">Поддержка</Link></li>
            <li><Link to="/about">О компании</Link></li>
            <li><Link to="/contact">Личный кабинет</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header