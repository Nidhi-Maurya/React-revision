import { lazy, Suspense, useState } from "react";
import { Provider } from "react-redux";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/layout/Header";
import UserContext from "./contexts/UserContext";
import appStore from "./store/appStore";

const About = lazy(() => import("./pages/About"));
const Cart = lazy(() => import("./pages/Cart"));
const Contact = lazy(() => import("./pages/Contact"));
const Error = lazy(() => import("./pages/Error"));
const Grocery = lazy(() => import("./pages/Grocery"));
const Home = lazy(() => import("./pages/Home"));
const RestaurantMenu = lazy(() => import("./pages/RestaurantMenu"));

function PageLoader() {
  return (
    <main className="page-shell">
      <div className="state-panel compact">Loading...</div>
    </main>
  );
}

function RouteView({ children }) {
  return <Suspense fallback={<PageLoader />}>{children}</Suspense>;
}

function App() {
  const [userName, setUserName] = useState("Ishu Maurya");

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <Header />
        <Outlet />
      </UserContext.Provider>
    </Provider>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <RouteView>
        <Error />
      </RouteView>
    ),
    children: [
      {
        path: "/",
        element: (
          <RouteView>
            <Home />
          </RouteView>
        ),
      },
      {
        path: "/about",
        element: (
          <RouteView>
            <About />
          </RouteView>
        ),
      },
      {
        path: "/contact",
        element: (
          <RouteView>
            <Contact />
          </RouteView>
        ),
      },
      {
        path: "/cart",
        element: (
          <RouteView>
            <Cart />
          </RouteView>
        ),
      },
      {
        path: "/grocery",
        element: (
          <RouteView>
            <Grocery />
          </RouteView>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: (
          <RouteView>
            <RestaurantMenu />
          </RouteView>
        ),
      },
    ],
  },
]);

export default function AppWrapper() {
  return <RouterProvider router={appRouter} />;
}
