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
            <li><Link to="/home">Главная</Link></li>
            <li><Link to="/Product">Продукция</Link></li>
            <li><Link to="/support">Поддержка</Link></li>
            <li><Link to="/about">О компании</Link></li>
            <li><Link to="/Lk">Личный кабинет</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header