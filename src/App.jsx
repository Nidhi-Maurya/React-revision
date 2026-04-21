import About from "./components/About"
import Body from "./components/Body"
import Contact from "./components/Contact"
import Header from "./components/Header"

// https://www.swiggy.com/mapi/misc_new/skeleton?lat=28.4349272&lng=77.0392319  scalaton api for shimmar ui 

import { createBrowserRouter ,RouterProvider} from "react-router-dom"
function App() {
  return (
    <div className="space-y-3">
      <Header />
      <Body />
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {path: "/contact",
  element: <Contact  />
  }
])

export default function AppWrapper() {
  return <RouterProvider router={appRouter} />
}