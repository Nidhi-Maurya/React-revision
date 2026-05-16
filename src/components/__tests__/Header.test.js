import { fireEvent,render,screen } from "@testing-library/react";
import Header from "../Header";
import {BrowserRouter} from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../store/appStore";
import "@testing-library/jest-dom";




it ('should load header component with login button',()=>{
   
  render (
  <BrowserRouter>
  <Provider store={appStore}>
  <Header/>
  </Provider>
</BrowserRouter>
)

 const loginButton =screen.getByRole("button");

 expect(loginButton).toBeInTheDocument();

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





it ('should login change to logout in header component  cart',()=>{
   
  render (
  <BrowserRouter>
  <Provider store={appStore}>
  <Header/>
  </Provider>
</BrowserRouter>
)

 const   loginButton =screen.getByRole("button", {name:"Login"});

 fireEvent.click(loginButton);

 const logOutButton=screen.getByRole("button",{name:"LogOut"})

 expect(logOutButton).toBeInTheDocument();

})