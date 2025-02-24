
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css'
import React from 'react';
import LandingPage from "./pages/Landingpage";
import About from './components/About';
import AboutProduct from './components/AboutProduct';
import Products from './components/Products';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import AuthContainer from './components/AuthContainer';
import AuthPopup from './components/AuthPopup';




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
      path: "/SignUp",
      element: <SignUp />
    },

    {
      path: "/SignIn",
      element: <SignIn/>
    },

    {
      path: "/AuthContainer",
      element: <AuthContainer/>
    },


    {
      path: "/AuthPopUp",
      element: <AuthPopup/>
    },
  ])



  return (
    <RouterProvider router={router}/>
  )
}
export default App