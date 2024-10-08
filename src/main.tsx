import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './style.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Formation from './pages/Formation';
import Project from './pages/ProjectList';



//Creation of router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/skills",
    element: <Skills />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/formation",
    element: <Formation />
  },
  {
    path: "/projects",
    element: <Project/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* stricMode is the one which gives us all the errors in the navigator .  */}
     
    <RouterProvider router={router} />
   
  </React.StrictMode>,
)
