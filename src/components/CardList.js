import React from 'react';
import PropTypes from 'prop-types';
import {useState, useEffect} from 'react'
import axios from 'axios';

//CardList component is responsible for rendering all cards associated with a board to the screen
const CardList = (props) => {

    console.log(props.cardsData);


return(
    <div>
        {props.cards}
    </div>
)};

export default CardList;