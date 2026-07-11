import { render,screen } from "@testing-library/react";
import Header from "../components/layout/Header";
import {BrowserRouter} from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../store/appStore";
import "@testing-library/jest-dom";




it ('should load header brand',()=>{
   
  render (
  <BrowserRouter>
  <Provider store={appStore}>
  <Header/>
  </Provider>
</BrowserRouter>
)

 const brand =screen.getByRole("link", {name:/CraveCraft home/});

 expect(brand).toBeInTheDocument();

})





it ('should load header component  cart 0 items',()=>{
   
  render (
  <BrowserRouter>
  <Provider store={appStore}>
  <Header/>
  </Provider>
</BrowserRouter>
)

 const cartButton =screen.getByText("Cart - (0 items)");

 expect(cartButton).toBeInTheDocument();

})



it ('should load header component  cart',()=>{
   
  render (
  <BrowserRouter>
  <Provider store={appStore}>
  <Header/>
  </Provider>
</BrowserRouter>
)

 const cartButton =screen.getByText(/Cart/);

 expect(cartButton).toBeInTheDocument();

})





it ('should not render login button in header',()=>{
   
  render (
  <BrowserRouter>
  <Provider store={appStore}>
  <Header/>
  </Provider>
</BrowserRouter>
)

 expect(screen.queryByRole("button", {name:"Login"})).not.toBeInTheDocument();

})
