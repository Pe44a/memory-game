import Card from "./card.jsx";

function Cards() {
    const cardsArray = [{cardName:'bart', imageURL:'./public/card-images/bart.png'}]

    return(
        <>
        
        <div className="cards">
            {cardsArray.map((card, index) => (
            <Card key={index} cardName={card.cardName} imageURL={card.imageURL} />
            ))}
        </div>
        </>
    )
}

export default Cards;