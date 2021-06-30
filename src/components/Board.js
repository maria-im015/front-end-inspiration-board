import React from 'react';
import PropTypes from 'prop-types';
import {useState, useEffect} from 'react';
import axios from 'axios';

// Board is a container and presentational component. Its responsible for rendering the selected Board info and cards associated with the selected board

const [selectedBoard, setSelectedBoard] = useState({
    title: '' ,
    owner: '' ,
    board_id : null
})

const Board = () => {
    const selectBoard = (board_id) => {
        const board = boardsData.map((board) => {
            if ( board.board_id === board_id)
                setSelectedBoard(board)
        })
    
    }

}