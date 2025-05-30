function EventCard({ event }) {
  const handleRegister = () => {
    alert(`Вы зарегистрированы на "${event.title}"! Мы свяжемся с вами для подтверждения.`)
  }

  return (
    <div className="event-card">
      <div className="event-header">
        <h3>{event.title}</h3>
        <span className="event-game">{event.game}</span>
      </div>
      <div className="event-details">
        <p><strong>Дата:</strong> {event.date}</p>
        <p><strong>Время:</strong> {event.time}</p>
        <p><strong>Призовой фонд:</strong> {event.prize}</p>
        <p><strong>Участники:</strong> {event.registered}/{event.maxPlayers}</p>
      </div>
      <button onClick={handleRegister} className="register-btn">
        Зарегистрироваться
      </button>
    </div>
  )
}

export default EventCard