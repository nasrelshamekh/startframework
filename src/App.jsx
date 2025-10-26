import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Portfolio from "./components/Portfolio/Portfolio"
import Contact from "./components/Contact/Contact"
import Layout from "./components/Layout/Layout"



function App() {
  const router = createBrowserRouter([
    {path: "", element: <Layout/> , children: [
      {
      index: true, element: <Home />
    },
    {
      path: "/startframework", element: <Home/>
    },
    {
      path: "/home", element: <Home />
    },
    {
      path: "/about", element: <About />
    },
    {
      path: "/portfolio", element: <Portfolio />
    },
    {
      path: "/contact", element: <Contact />
    }
    ]}
  ]

  )

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
