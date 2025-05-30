import { useState, useEffect } from 'react'
import Header from '../components/Header' // Убедитесь, что импортирован Header
import Footer from '../components/Footer'
import '../styles/pages/Lk.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Здесь будет логика отправки формы
    alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.')
    setFormData({
      name: '',
      email: '',
      message: ''
    })
  }

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1>Контакты</h1>
          <p>Свяжитесь с нами или посетите наш клуб</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="map-section">
              <h2>Мы находимся</h2>
              <div className="map-container">
                <iframe 
                  title="Клуб на карте"
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A1a2b3c4d5e6f7g8h9i0j&amp;source=constructor"
                  width="100%" 
                  height="400" 
                  frameBorder="0"
                ></iframe>
              </div>
              <div className="address-info">
                <p><strong>Адрес:</strong> г. Москва, ул. Геймерская, 1337</p>
                <p><strong>Телефон:</strong> +7 (800) 555-35-35</p>
                <p><strong>Email:</strong> info@cyberzone.ru</p>
              </div>
            </div>

            <div className="form-section">
  <h2 id="formObr">Форма обратной связи</h2>
  <form onSubmit={handleSubmit} className="form-table">
    <div className="form-row">
      <label htmlFor="name" className="form-label">Ваше имя:</label>
      <input
        type="text"
        id="name"
        name="name"
        className="form-input"
        value={formData.name}
        onChange={handleChange}
        required
      />
    </div>
    <div className="form-row">
      <label htmlFor="email" className="form-label">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        className="form-input"
        value={formData.email}
        onChange={handleChange}
        required
      />
    </div>
    <div className="form-row">
      <label htmlFor="message" className="form-label">Сообщение:</label>
      <textarea
        id="message"
        name="message"
        className="form-input"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>
    </div>
    <div className="form-row">
      <button type="submit" className="submit-btn">Отправить</button>
    </div>
  </form>
</div>
          </div>
        </div>
      </section>

      <section className="hours-section">
        <div className="container">
          <h2>Часы работы</h2>
          <div className="hours-table">
            <table>
              <tbody>
                <tr>
                  <td>Понедельник - Пятница</td>
                  <td>12:00 - 00:00</td>
                </tr>
                <tr>
                  <td>Суббота - Воскресенье</td>
                  <td>10:00 - 02:00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact