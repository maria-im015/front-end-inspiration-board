import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './App.css';
import Board from './components/Board';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

Board.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        owner: PropTypes.string.isRequired
      })
    )
  ),
  onClickCallback: PropTypes.func.isRequired,
};

// Board.propTypes = {
//   card: PropTypes.arrayOf(
//     PropTypes.arrayOf(
//       PropTypes.shape({
//         title: PropTypes.string.isRequired
//         : PropTypes.string.isRequired
//       })
//     )
//   ),
//   onClickCallback: PropTypes.func.isRequired,
// };

// export default App;
