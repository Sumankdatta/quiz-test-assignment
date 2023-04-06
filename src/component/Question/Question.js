import React, { useState } from 'react';
import './Question.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const Question = ({ ques, correct, setCorrect }) => {




    const { options, question, correctAnswer } = ques;


    const handleEye = (correctAnswer) => {
        if (correctAnswer) {

            toast.success(correctAnswer)
        }
    }


    const handleAns = (option) => {

        if (option === correctAnswer) {
            const isClicked=correct.find(ans=>ans===option)
            if(!isClicked){
               toast.success('ASN IS CORRECT')
            setCorrect([...correct,option])  
            }
           else{
            toast.warn('you already make is correct')
           }

           
        }
        else{
            toast.error(`your answer ${option} in incorrect`)
        }

    }


    return (
        <div className='card'>
            <div className='eyes'>
                <h4>{question.slice(3, -4)}</h4>
                <FontAwesomeIcon onClick={() => handleEye(correctAnswer)} icon={faEye} />
            </div>


            <div className='option'>
                {
                    options.map(option => <h5 ><input type="radio" name="pod" id="total" value="total" onClick={() => handleAns(option)} />{option}</h5>)
                }
                <ToastContainer />
            </div>

        </div>
    );
};

export default Question;