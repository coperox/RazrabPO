import ServiceCard from '../components/ServiceCard'
import '../styles/pages/Product.css'

function Services() {
  const services = [
    {
      id: 1,
      title: 'Игровые ПК',
      description: 'Мощные компьютеры с топовыми видеокартами и процессорами',
      price: '500 руб/час',
      image: '/images/pc-zone.jpg'
    },
    {
      id: 2,
      title: 'VR-зона',
      description: 'Полное погружение в виртуальную реальность',
      price: '800 руб/час',
      image: '/images/vr-zone.jpg'
    },
    {
      id: 3,
      title: 'Турниры',
      description: 'Участие в киберспортивных соревнованиях',
      price: 'Бесплатно (с абонементом)',
      image: '/images/tournament.jpg'
    }
  ]

  const subscriptions = [
    { name: 'Стандарт', price: '5000 руб', hours: 15, discount: '10%' },
    { name: 'Продвинутый', price: '8000 руб', hours: 30, discount: '15%' },
    { name: 'Профессионал', price: '12000 руб', hours: 50, discount: '20%' }
  ]

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container">
          <h1>Наши услуги</h1>
          <p>Выберите то, что подходит именно вам</p>
        </div>
      </section>

      <section className="services-list">
        <div className="container">
          <h2>Основные услуги</h2>
          <div className="services-grid">
            {services.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="pricing-section">
        <div className="container">
          <h2>Тарифы и абонементы</h2>
          <div className="pricing-table">
            <table>
              <thead>
                <tr>
                  <th>Название</th>
                  <th>Цена</th>
                  <th>Часы</th>
                  <th>Скидка</th>
                </tr>
              </thead>
              <tbody>
                {subscriptions.map((sub, index) => (
                  <tr key={index}>
                    <td>{sub.name}</td>
                    <td>{sub.price}</td>
                    <td>{sub.hours}</td>
                    <td>{sub.discount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container">
          <h2>Наше оборудование</h2>
          <div className="gallery-grid">
            <img src="/images/equipment1.jpg" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services