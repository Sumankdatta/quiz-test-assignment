import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../component/Home/Home";
import Analytic from "../component/Analytic/Analytic";
import Blog from "../component/Blog/Blog";
import About from "../component/About/About";
import QuizQues from "../component/QuizQues/QuizQues";

export const route=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                loader:()=> fetch('https://openapi.programming-hero.com/api/quiz'),
                element:<Home></Home>
            },
            {
                path:'/analytic',
                element:<Analytic></Analytic>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/quiz/:id',
                loader:({params})=>fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
                element:<QuizQues></QuizQues>
            },
        ]
    }
])