import React from 'react';
import './BoardList.css';
import PropTypes from 'prop-types';
import {useState, useEffect} from 'react'
import axios from 'axios';

//BoardList component is a container component that wraps up all of our Board components. 

const BoardList = () => {
const [boardsData, setBoardsData] = useState([])

useEffect(() => {
    console.log('I\'m in useEffect!');
    console.log(`${boardsData}`);
    console.log('or whenever pieceOfState is updated');
  }, []);

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