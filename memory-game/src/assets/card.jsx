function Card({ cardName, imageURL, onClickFunction}) {
    
    return (
      <div className="card" onClick={onClickFunction}>
        <img src={imageURL} alt={cardName} />
        <div className="card-name">
          {cardName}
        </div>
      </div>
    );
  }

export default Card;