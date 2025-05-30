function ServiceCard({ service }) {
  return (
    <div className="service-card">
      <div className="service-info">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <div className="service-price">{service.price}</div>
      </div>
      <div className="service-image">
        <img src={service.image} alt={service.title} />
      </div>
    </div>
  )
}

export default ServiceCard