import About from "./components/About"
import Body from "./components/Body"
import Contact from "./components/Contact"
import Error from "./components/Error"
import Header from "./components/Header"
import { createBrowserRouter ,Outlet,RouterProvider} from "react-router-dom"
import RestroMenu from "./components/Restuarent/RestroMenu"
// import Grocery from "./components/Grocery"
import { lazy,Suspense } from "react"
import UserContext from "./utils/userContext"
import { useState } from "react"
import {Provider } from "react-redux"
import appStore from "./store/appStore"
import CartDetails from "./components/Restuarent/CardDetails"

// https://www.swiggy.com/mapi/misc_new/skeleton?lat=28.4349272&lng=77.0392319  scalaton api for shimmar ui 

// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// On Demand Loading


const Grocery=lazy(()=>import("./components/Grocery"))

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
  path:"/cart",
  element:<CartDetails />
},



  {
    path:'/grocery',
    element: <Suspense fallback={<main className="page-shell"><div className="state-panel compact">Loading...</div></main>}><Grocery/></Suspense>
  },
  {
    path: "/restaurants/:resId",  
    element: <RestroMenu/>
  },
],
    errorElement: <Error/>
  },
  
])

export default function AppWrapper() {
  return <RouterProvider router={appRouter} />
}
