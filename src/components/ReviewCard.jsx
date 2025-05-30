function ReviewCard({ review }) {
  const renderStars = () => {
    return '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating)
  }

  return (
    <div className="review-card">
      <div className="review-header">
        <h4>{review.author}</h4>
        <div className="review-rating">{renderStars()}</div>
      </div>
      <p className="review-text">"{review.text}"</p>
      <span className="review-date">{review.date}</span>
    </div>
  )
}

export default ReviewCard