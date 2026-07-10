import About from "./pages/About"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Error from "./pages/Error"
import Header from "./components/layout/Header"
import { createBrowserRouter ,Outlet,RouterProvider} from "react-router-dom"
import RestaurantMenu from "./pages/RestaurantMenu"
import { lazy,Suspense } from "react"
import UserContext from "./contexts/UserContext"
import { useState } from "react"
import {Provider } from "react-redux"
import appStore from "./store/appStore"
import Cart from "./pages/Cart"

// https://www.swiggy.com/mapi/misc_new/skeleton?lat=28.4349272&lng=77.0392319  scalaton api for shimmar ui 

// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// On Demand Loading


const Grocery=lazy(()=>import("./pages/Grocery"))

function App() {

const [userName,setUserName] =useState("Ishu Maurya");

  return (
     <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
    <div>
     
       <Header />
     
    <Outlet/>
</div>
    </UserContext.Provider>
     
     </Provider>
    
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [

      {
        path:"/",
        element: <Home />
      },
{
    path: "/about",
    element: <About />,
  },
  {path: "/contact",
  element: <Contact  />
  },
{
  path:"/cart",
  element:<Cart />
},



  {
    path:'/grocery',
    element: <Suspense fallback={<main className="page-shell"><div className="state-panel compact">Loading...</div></main>}><Grocery/></Suspense>
  },
  {
    path: "/restaurants/:resId",  
    element: <RestaurantMenu/>
  },
],
    errorElement: <Error/>
  },
  
])

export default function AppWrapper() {
  return <RouterProvider router={appRouter} />
}
