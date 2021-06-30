import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './App.css';
import BoardList from './components/BoardList';
import NewBoardForm from './components/NewBoardForm';

const BACKEND_URL = 'http://localhost:5000';

function App() {
  const [boardsData, setBoardsData] = useState([])
  const [selectedBoard, setSelectedBoard] = useState({
    title: '' ,
    owner: '' ,
    board_id : null
  })
  
 
 
  
  
  
  return (
    <div className="App">
      <header className="App-header">
        <div>
        < NewBoardForm />
        </div>
      </header>
    </div>
  );
}

export default App;
