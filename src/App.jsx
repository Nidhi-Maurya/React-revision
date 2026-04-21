import About from "./components/About"
import Body from "./components/Body"
import Cart from "./components/Cart"
import Contact from "./components/Contact"
import Error from "./components/Error"
import Header from "./components/Header"


// https://www.swiggy.com/mapi/misc_new/skeleton?lat=28.4349272&lng=77.0392319  scalaton api for shimmar ui 

import { createBrowserRouter ,Outlet,RouterProvider} from "react-router-dom"
function App() {
  return (
    <div className="space-y-3">
     
       <Header />
    
    <Outlet/>
     
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [

      {
        path:"/",
        element: <Body />
      },
{
    path: "/about",
    element: <About />,
  },
  {path: "/contact",
  element: <Contact  />
  },
  {
    path:'/cart',
    element: <Cart/>
  }
],
    errorElement: <Error/>
  },
  
])

export default function AppWrapper() {
  return <RouterProvider router={appRouter} />
}