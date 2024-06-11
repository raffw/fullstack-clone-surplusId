import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Profile from "./Pages/Profile"
import Products from "./Pages/Products"
import Login from './Pages/Login'
import Register from './Pages/Register'

const App = () => {
  const router = createBrowserRouter([

    {
        path: "/Dashboard",
        element: <Dashboard/>,
    },
    {
      path: "/products",
      element: <Products/>,
    },
    {
      path: "/Profile",
      element: <Profile/>
    },
    {
      path: "/Login",
      element: <Login/>
    },
    {
      path : "/Register",
      element: <Register/>
    }
  ]);


  return (
    <RouterProvider router={router}/>
  )
}

export default App;