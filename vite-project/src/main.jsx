import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Qma from './pages/Qma/index.jsx';
import Qmb from './pages/Qmb/index.jsx';
import Qmi from './pages/Qmi/index.jsx';
import App from './App.jsx';
import Qhb from './pages/Qhb/index.jsx';
import Qhi from './pages/Qhi/index.jsx';
import Qha from './pages/Qha/index.jsx';
import Qga from './pages/Qga/index.jsx';
import Qgi from './pages/Qgi/index.jsx';
import Qgb from './pages/Qgb/index.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
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
  {
    path: "/Qhb",
    element: <Qhb/>,
  },
  {
    path: "/Qhi",
    element: <Qhi/>,
  },
  {
    path: "/Qha",
    element: <Qha/>,
  },
  {
    path: "/Qgb",
    element: <Qgb/>,
  },
  {
    path: "/Qgi",
    element: <Qgi/>,
  },
  {
    path: "/Qga",
    element: <Qga/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
