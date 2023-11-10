import { useState } from "react";
// import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "./card.jsx";

function Cards() {

    const [score, setScore] = useState(0);
    // const [highestScore, setHighestScore] = useState(0);

    const cardsArray = [{cardName:'bart', imageURL:'./public/card-images/bart.png', clicked:false,  id:uuidv4()}];


    function updatesScore(info) {
        if(info.clicked === true) {

            let scoreDuplicate = {score};
            scoreDuplicate += 1;
            setScore(scoreDuplicate)
        } else {

            info.clicked = true;
        }
    }

    return(
        <>
        <div className="cards">
            {cardsArray.map((card) => (
                <Card key={card.id} cardName={card.cardName} imageURL={card.imageURL}
                onClickFunction={()=> {updatesScore(card)}}/>
            ))}
        </div>
        </>
    )
}

export default Cards;