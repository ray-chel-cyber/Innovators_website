
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css'
import React from 'react';
import LandingPage from "./pages/Landingpage";




function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}
export default App