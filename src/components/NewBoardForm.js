import {useEffect, useState} from 'react';
import React from 'react';
import './NewBoardForm.css';
import PropTypes from 'prop-types';
import axios from 'axios';

//keeps track of its own state
const BACKEND_PATH = 'http://localhost:5000'

const NewBoardForm = (props) => {
    const [title, setTitle] = useState('')
    const [owner, setOwner] = useState('')
    
    const handleTitleChange = (title) => { 
        setTitle(title.target.value)
     };
    const handleOwnerChange = (owner) => { 
        setOwner(owner.target.value)
     };
    
    
    const onSubmitClickHandler = (event) => {
        event.preventDefault();
        axios.post(`${BACKEND_PATH}/boards`, {title, owner})
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });

        setTitle('');
        setOwner('');
    };
    
    
return (

<div class='new-board-form_container'>
    <h2> Create A New Board </h2>
    <form class='new-board-form'onSubmit={onSubmitClickHandler}>
        <label> Title </label>
        <input type='text' value={title} onChange={handleTitleChange}/>
        <label> Owner's Name </label>
        <input type='text' value={owner} onChange={handleOwnerChange}/>
        <div class='submit-new-board-form'>
            <input type='submit' value='Submit'/>
        </div>
    </form>
</div>
    )
}
export default NewBoardForm;