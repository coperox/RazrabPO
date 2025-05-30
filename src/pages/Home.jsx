import { useState, useEffect } from 'react'
import NewsBanner from '../components/NewsBanner'
import '../styles/pages/home.css'

function Home() {
  const [activeSlide, setActiveSlide] = useState(0)

  const slides = [
  ]

  const news = [
    
  ]

  const stats = [

  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="home-page">
      {/* Hero Slider */}
      <section className="hero-slider">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`slide ${index === activeSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.bgImage})` }}
          >
            <div className="slide-content">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
              <button className="cta-button">{slide.ctaText}</button>
            </div>
          </div>
        ))}
        <div className="slider-dots">
          {slides.map((_, index) => (
            <button 
              key={index}
              className={index === activeSlide ? 'active' : ''}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>
      </section>

      <section className="stats-bar">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-club">

      </section>

      <section className="news-section">
       
      </section>

      <section className="social-proof">
       
      </section>

      <section className="cta-section">
       
      </section>
    </div>
  )
}

export default Home