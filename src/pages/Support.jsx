import EventCard from '../components/EventCard'
import '../styles/pages/Support.css'

function Events() {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Турнир по CS:GO',
      date: '25.10.2023',
      time: '18:00',
      prize: '50 000 руб',
      game: 'CS:GO',
      registered: 12,
      maxPlayers: 16
    },
    {
      id: 2,
      title: 'VR чемпионат',
      date: '30.10.2023',
      time: '15:00',
      prize: '30 000 руб',
      game: 'Beat Saber',
      registered: 8,
      maxPlayers: 12
    },
    {
      id: 3,
      title: 'Фестиваль Dota 2',
      date: '05.11.2023',
      time: '12:00',
      prize: '100 000 руб',
      game: 'Dota 2',
      registered: 20,
      maxPlayers: 32
    }
  ]

  return (
    <div className="events-page">
      <section className="events-hero">
        <div className="container">
          <h1>Мероприятия</h1>
          <p>Примите участие в наших турнирах и событиях</p>
        </div>
      </section>

      <section className="calendar-section">
        <div className="container">
          <h2>Календарь событий</h2>
          <div className="events-grid">
            {upcomingEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      <section className="rules-section">
        <div className="container">
          <h2>Правила участия</h2>
          <div className="rules-content">
            <ol>
              <li>Регистрация на турнир обязательна</li>
              <li>Минимальный возраст участника - 14 лет</li>
              <li>Запрещается использование читов и запрещённого ПО</li>
              <li>Организаторы оставляют право изменять правила</li>
              <li>Призовой фонд выплачивается в течение 3 дней после турнира</li>
            </ol>
            <p>
              Для регистрации на мероприятие нажмите кнопку "Зарегистрироваться" на карточке события.
              После регистрации с вами свяжется наш администратор для подтверждения.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Events