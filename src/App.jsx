
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css'
import React from 'react';
import LandingPage from "./pages/Landingpage";
import About from './components/About';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Innovator from './components/Innovator';
import EmoticonSection from './components/EmoticonSection';



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
      path: "/EmoticonSection",
      element: <EmoticonSection />
    },

    {
      path: "/Innovator",
      element: <Innovator />
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