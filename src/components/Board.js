import React from 'react';
import PropTypes from 'prop-types';
import {useState, useEffect} from 'react';
import axios from 'axios';

// Board is a container and presentational component. Its responsible for rendering the selected Board info and cards associated with the selected board


const Board = (props) => {


return (
        <section>
             {props.board.title}
        </section>
)
}

export default Board;