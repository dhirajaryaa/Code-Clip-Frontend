import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/layout.jsx'
import { LandingPage, Login, Register ,Dashboard} from './pages/index.js'

function App() {

  // create routes 
  const appRouter = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <LandingPage />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/register",
          element: < Register/>
        },
        {
          path: "/dashboard",
          element: <Dashboard />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={appRouter} />

  )
}

export default App