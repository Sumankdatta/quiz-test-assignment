import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Home.css'
import Lottie from "lottie-react";
import reader from '../assets/reader.json'

const Home = () => {
    const quizes=useLoaderData()
    console.log(quizes.data)
    return (
        <div >
         <div className='home'>
         {
            quizes.data.map(quiz=><Quiz 
            key={quiz.id}
            quiz={quiz}
            ></Quiz>)
           }
         </div>


           <div>
            <Lottie animationData={reader} loop={true} />;
           </div>
        </div>
    );
};

export default Home;