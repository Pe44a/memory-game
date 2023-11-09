function Card({ cardName, imageURL}) {
    
    return (
      <div className="card">
        <img src={imageURL} alt={cardName} />
        <div className="card-name">
          {cardName}
        </div>
      </div>
    );
  }

export default Card;