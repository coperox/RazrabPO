function NewsBanner({ news }) {
  return (
    <div className="news-banner">
      <h3>{news.title}</h3>
      <p>{news.description}</p>
      <span className="news-date">{news.date}</span>
    </div>
  )
}

export default NewsBanner