import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import {useState, useEffect} from 'react'
import axios from 'axios';


const cardElements = props.cardsData.map((card) => {
    return (<Card
        card={card}
        plusOneCardItem={plusOneCardItem}
        deleteCardItem={deleteCardItem}></Card>)


    return (<section className='cards__container'>
        <section>
            <h2>Cards for {props.board.title}</h2>
            <div className='card-items__container'>
            {cardElements}
            </div>
        </section>
        <NewCardForm postNewCard={postNewCard}></NewCardForm>
        </section>)
};



//CardList component is responsible for rendering all cards associated with a board to the screen
// const generateCards = (cardsData, onClickCallback) => {
//     console.log(cardsData);
//     const singleArrayCards = [].concat(...cardsData);
//     return singleArrayCards.map((card) => {
//         return <div
//             onClickCallback={onClickCallback}/>
//     });
// }

// const CardList = (props) => {

//     console.log(props.cardsData);
//     const cardList = props.cardsData.map((card) => {
//     // return <div>
//     // {cardList}
//     // </div>
//     // })
//     });

//     return (
//     <div>
//         {cardList}
//     </div>
//     )
// }


export default CardList;