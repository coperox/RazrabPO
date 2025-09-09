import { useState, useEffect } from 'react'
import '../styles/pages/Support.css'

function support() {
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
          <h1>FAQ</h1>
          <h2>1. Какие услуги предоставляет InnoTech?</h2><p>Мы разрабатываем программное обеспечение под ключ.</p>
          <h2>2. С какими технологиями вы работаете?</h2><p>Используем современные стеки: Python, Java, JavaScript (React, Node.js), .NET, Golang, а также Docker, Kubernetes, PostgreSQL, MongoDB и др.</p>
          <h2>3. Как оценивается стоимость проекта?</h2><p>После анализа требований мы предоставляем прозрачную смету с фиксированной ценой или почасовой ставкой, в зависимости от сложности.</p>
          <h2>4. Какие гарантии вы даете?</h2><p>Исправляем баги бесплатно в течение гарантийного срока (обычно 3–6 месяцев) и оказываем поддержку после сдачи проекта.</p>
          <h2>5. Как происходит процесс разработки?</h2><p>Работаем по Agile: согласовываем этапы, предоставляем демо-версии, вносим правки по ходу работы.</p>
          <h2>6. Можно ли доработать существующий продукт?</h2><p>Да, проводим аудит чужого кода, оптимизируем и масштабируем ПО.</p>
          <h2>7. Вы работаете с стартапами?</h2><p>Да, помогаем с MVP, подбираем технологии под бюджет и даем советы по развитию продукта.</p>
          <h2>8. Как обеспечивается безопасность данных?</h2><p>Шифрование, регулярные аудиты, соблюдение GDPR и других стандартов.</p>
          <h2>9. Есть ли у вас готовые решения? </h2> <p>Да, предлагаем типовые системы для малого бизнеса с возможностью кастомизации.</p>
          <h2>10. Как с вами связаться?</h2><p>Через email или по телефону.</p>
        </div>
      </section>
        <div className="container">
          <div className="contact-grid">
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
  )
}

export default support