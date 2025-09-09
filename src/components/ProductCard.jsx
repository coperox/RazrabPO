function ServiceCard({ service, onAddToCart }) {
  return (
    <div className="service-card">
      <div className="service-image">
        <img src={service.image} alt={service.title} />
      </div>
      <div className="service-info">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <div 
          className="service-price" 
          onClick={() => onAddToCart(service)}
          style={{cursor: 'pointer'}}
        >
          <h2>{service.price}</h2>
        </div>
      </div>
      <br />
    </div>
  );
}

export default ServiceCard;