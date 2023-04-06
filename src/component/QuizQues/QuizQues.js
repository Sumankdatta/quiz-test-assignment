import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './QuizQues.css'
import Question from '../Question/Question';
import { toast } from 'react-toastify';
import Result from '../Result/Result';
const QuizQues = () => {
    const quizQues = useLoaderData()
    console.log(quizQues)
    const [correct,setCorrect]=useState([])

    
    console.log(correct);
    
    // console.log(quizQues.data.questions)
    return (
        <div className='all-quiz'>
            <h1>total corrected:{correct.length}</h1>
            {
                quizQues.data.questions.map(ques => <Question
                    key={ques.id}
                    ques={ques}
                    correct={correct}
                    setCorrect={setCorrect}
                ></Question>)
            }
            <div>
         
         

            </div>
           
        </div>
    );
};

export default QuizQues;