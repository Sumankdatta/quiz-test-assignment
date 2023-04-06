import React from 'react';
import './Quiz.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faQuoteRightAlt } from '@fortawesome/free-solid-svg-icons';

const Quiz = ({quiz}) => {
    // console.log(quiz)
    const {name,logo,total,id}=quiz;
    return (
        <div className='quiz'>
            <img src={logo} alt="" />
           <div className='start-btn'>
           <h4 className='name'>{name}</h4>
           

                <Link className='start-btn' to={`/quiz/${id}`}><button>Start quiz <FontAwesomeIcon icon={faArrowRight} /></button></Link>
          
           </div>

    </div>
    );
};

export default Quiz;