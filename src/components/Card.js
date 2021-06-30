import React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect} from 'react';
import axios from 'axios';

// Card componet is responsible for maintaing and rendering its own state

const Card = () => {
const [likes, setLikes] = useState(0)
const onLikeSubmitClickHandler = (card_id) => {
      

}


return (
    <section class="like-button-form_container">
        <form class="like-button" value="like" onSubmit={onLikeSubmitClickHandler}>
        <label> Title </label>
        </form>
    </section>

)
};
export default Card; 