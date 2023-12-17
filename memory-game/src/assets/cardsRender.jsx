import { useState } from "react";
// import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import  shuffle  from "./shuffle.jsx";
import Card from "./card.jsx";

function Cards() {
    const cardsArrays = [
        {cardName:'Bart', imageURL:'./card-images/bart.png', clicked:false, id:uuidv4()},
        {cardName:'Homer', imageURL:'./card-images/homer.png', clicked:false, id:uuidv4()},
        {cardName:'Lisa', imageURL:'./card-images/lisa.png', clicked:false, id:uuidv4()},
        {cardName:'Maggie', imageURL:'./card-images/maggie.png', clicked:false, id:uuidv4()},
        {cardName:'Marge', imageURL:'./card-images/marge.png', clicked:false, id:uuidv4()},
        {cardName:'Milhouse', imageURL:'./card-images/milhouse.png', clicked:false, id:uuidv4()},
        {cardName:'Mr.Burns', imageURL:'./card-images/mr._burns.png', clicked:false, id:uuidv4()},
        {cardName:'Ned Flanders', imageURL:'./card-images/ned_flanders.png', clicked:false, id:uuidv4()},
        {cardName:'Skinner', imageURL:'./card-images/skinner.png', clicked:false, id:uuidv4()},
        {cardName:'Smithers', imageURL:'./card-images/smithers.png', clicked:false, id:uuidv4()},
        {cardName:'Willie', imageURL:'./card-images/willie.png', clicked:false, id:uuidv4()}
    ];

    const cardsArraysIndex = cardsArrays.map((card, index) => {
        return index;
    });

    shuffle(cardsArraysIndex); //Shuffles cardsArrayIndex values

    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [array, setArray] = useState(cardsArrays)


    function updatesScore(index) {
        const updatedCardsArray = array;

        if(updatedCardsArray[index].clicked === true) {

            // resets points
            setScore(0)

            // resets cardsArrays clicked values to false
            updatedCardsArray.map((cardArray) => {
                cardArray.clicked = false;
            });
            setArray(updatedCardsArray)
        } else {
            
            // adds point to score
            // copies score to avoid data mutation
            let scoreClone = score;
            scoreClone += 1;

            if(scoreClone >= highScore)  setHighScore(scoreClone);
            setScore(scoreClone)

            updatedCardsArray[index].clicked = true;
            setArray(updatedCardsArray);
        }
    }

    return(
        <>
        <div className="score">
            <div>Sore: {score}</div>
            <div>High score: {highScore}</div>
        </div>
        
        <div className="cards">

            {cardsArraysIndex.map((cardIndex) => (

                <Card key={cardsArrays[cardIndex].id} cardName={cardsArrays[cardIndex].cardName} imageURL={cardsArrays[cardIndex].imageURL}
                onClickFunction={()=> {updatesScore(cardIndex)}}/>
            ))}
        </div>
        </>
    )
}

export default Cards;