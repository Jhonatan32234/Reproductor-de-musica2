import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {HelmetProvider} from "react-helmet-async"


import App from './App.jsx'
import'./index.css'

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home></Home>,
  },
 
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
    
  </React.StrictMode>,
)
