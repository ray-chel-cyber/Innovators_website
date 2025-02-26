
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css'
import React from 'react';
import LandingPage from "./pages/Landingpage";
import About from './components/About';
import AboutProduct from './components/AboutProduct';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';



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

    {
      path: "/Contact",
      element: <Contact />
    },

    {
      path: "/Testimonals",
      element: <Testimonials />
    },

    
  ])



  return (
    <RouterProvider router={router}/>
  )
}
export default App