import { useState } from "react";
// import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "./card.jsx";

function Cards() {

    const [score, setScore] = useState(0);
    // const [highestScore, setHighestScore] = useState(0);

    const cardsArray = [
        {cardName:'Bart', imageURL:'./card-images/bart.png', clicked:false,  id:uuidv4()},
        {cardName:'Homer', imageURL:'./card-images/homer.png', clicked:false,  id:uuidv4()},
        {cardName:'Lisa', imageURL:'./card-images/lisa.png', clicked:false,  id:uuidv4()},
        {cardName:'Maggie', imageURL:'./card-images/maggie.png', clicked:false,  id:uuidv4()},
        {cardName:'Marge', imageURL:'./card-images/marge.png', clicked:false,  id:uuidv4()},
        {cardName:'Milhouse', imageURL:'./card-images/milhouse.png', clicked:false,  id:uuidv4()},
        {cardName:'Mr.Burns', imageURL:'./card-images/mr._burns.png', clicked:false,  id:uuidv4()},
        {cardName:'Ned Flanders', imageURL:'./card-images/ned_flanders.png', clicked:false,  id:uuidv4()},
        {cardName:'Skinner', imageURL:'./card-images/skinner.png', clicked:false,  id:uuidv4()},
        {cardName:'Smithers', imageURL:'./card-images/smithers.png', clicked:false,  id:uuidv4()},
        {cardName:'Willie', imageURL:'./card-images/willie.png', clicked:false,  id:uuidv4()}
    ];


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