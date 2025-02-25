
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css'
import React from 'react';
import LandingPage from "./pages/Landingpage";
import About from './components/About';
import AboutProduct from './components/AboutProduct';
import Products from './components/Products';



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />
    },

    {
      path: "/About",
      element: <About />
    },

    {
      path: "/AboutProduct",
      element: <AboutProduct />
    },

    {
      path: "/Products",
      element: <Products />
    },

   

    
  ])



  return (
    <RouterProvider router={router}/>
  )
}
export default App