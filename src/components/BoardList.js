import React from 'react';
import './Board.css';
import PropTypes from 'prop-types';
import {useState} from 'react'
import axios from 'axios';



const BoardList = (props) => {
const [boardsData, setBoardsData] = useState([])
const [selectedBoard, setSelectedBoard] = useState({
    title: '' ,
    owner: '' ,
    board_id : null
})

const selectBoard = (board_id) => {
    const board = boardsData.map((board) => {
        if ( board.board_id === board_id)
            setSelectedBoard(board)
    })

}

// send GET request to API to get info on selectedBoard when clicked. I want the title and owner to render on the screen
const handleSelectedBoard = (selectBoard) => {
    axios.get('http://localhost:5000/boards')
    .then((response) => {
        console.log(response)
    });
   
    
}
return (
        <div>
         <button onClick={()=>{handleSelectedBoard()}}>text</button>
        </div>
    
)
};

export default BoardList;