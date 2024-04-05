import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import LogIn from "../pages/LogIn/LogIn";
import Register from "../pages/Register/Register";
import News from "../pages/News/News";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>, 
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader : () => fetch('/news.json')
            },
            {
                path :'/news/:id' ,
                element :<PrivateRoute><News></News></PrivateRoute>
            },
            {
                path : '/login',
                element : <LogIn></LogIn>
            },
            {
                path : '/register' ,
                element : <Register></Register>
            }
        ]
    }    
]);

export default router;