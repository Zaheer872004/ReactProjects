import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import Contact from './components/ContactUs.jsx'
import About from './components/AboutUs.jsx'
import User from './components/User.jsx'
import GithubUser, { GithubInfoLoader } from './components/GithubUser.jsx'

const routes = createBrowserRouter(
  [
    {
      path : '/',
      element : <App />,
      // error : <Error />,
      // errorElement : < Error />,
      children : [
        {
          path : '',
          element : <Home />,
          errorElement : < Error />,
        },
        {
          path : 'about',
          element : <About />,
          errorElement : < Error />,

        },
        {

          path : 'contact',
          element : <Contact />,
          errorElement : < Error />,
        },

        {

          path : 'user/:userId',
          element : <User />,
          errorElement : < Error />,
        },

        {
          loader : GithubInfoLoader,
          path : 'github',
          element : <GithubUser />,
          errorElement : < Error />,
        }
      ]
    }
  ]
)









createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
