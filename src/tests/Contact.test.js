
import { render,screen } from "@testing-library/react";
import Contact from "../pages/Contact";
import "@testing-library/jest-dom";


describe("Contact Us Page Test case",()=>{

test ("should load contact us component" ,()=>{

  render (<Contact/>)

  const heading =screen.getByRole("heading");
// Assertion
  expect(heading).toBeInTheDocument();

})



test ("should laod submit button in contact us componeny",()=>{
  render(<Contact/>)

const button= screen.getByText("Submit")


expect (button).toBeInTheDocument();


})



test ("shouil load input component in contact Us component",()=>{
  render (<Contact/>)

  const input= screen.getByPlaceholderText("Enter your name")

expect(input).toBeInTheDocument();
})


test ("should load text area into contact us component",()=>{
  render (<Contact/>)

  const textarea =screen.queryByPlaceholderText("Type Your Message")
  expect(textarea).toBeInTheDocument();

})






})



