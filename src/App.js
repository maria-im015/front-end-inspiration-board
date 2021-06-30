import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './App.css';
import BoardList from './components/BoardList';
import NewBoardForm from './components/NewBoardForm';
import Card from './components/Card';
import CardList from './components/CardList';

const BACKEND_URL = 'http://localhost:5000';

function App() {


  
 
 
  
  
  
  return (
    <div className="App">
      
        <div>
          <section class='content_container'>
            <section class='boards-content_container'>
              <ol class='boards-list_container'>
                < BoardList />
              </ol>
            </section>
          
            <section class='new-board-form_container'>
              <section class='new-board-form_form'>
                < NewBoardForm />
              </section>
            </section>
            
            <section class='new-card_container'>
              <section class='new-card-form_form'>
                < NewCardForm />
              </section>
            </section>

            <section class='selected-board_container'>
              <section class='selected-board'>
                < Board />
              </section>
                <section class='selected-cards-for-board_container'>
                    < CardList />
                </section>
            </section>
          </section>
        </div>
      
  </div>
  );
}

export default App;
