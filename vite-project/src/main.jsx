import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Home from './pages/Home/index.jsx';
import Qma from './pages/Qma/index.jsx';
import Qmb from './pages/Qmb/index.jsx';
import Qmi from './pages/Qmi/index.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/Qmb",
    element: <Qmb/>,
  },
  {
    path: "/Qmi",
    element: <Qmi/>,
  },
  {
    path: "/Qma",
    element: <Qma/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
