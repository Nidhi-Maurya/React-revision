# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.




<!-- API Fetching Rules  -->


## There is Two way to fetch api data from server 
     1- Load---->API---->RENDER
     2- Load----->Render--->API---->RENDER    , 
         2nd is the best approach to fetch the api data ,
         1st one take near about 500ms time then show the data suddenly on ui so the 1st one is better ,



## useEffect  ---
      ## Syntax :    useEffect((callback function)=>{},[dependency])
After Component Render use Effect Hooks will call...
in useEffect we will fetch the data inside the useEffect 

## Fetch API Syntax 

 * const fetchData= aync()=>{
  const data= await fetch("your api");
  const json= await data.json();

  console.log(json) *   
   //! this to check the data in console , that data is come in from api 
 }

 ## CORS ERROR
     -- Browser Blocked to call Data from one origin to another origin is called CORS ERROR.

     To Resolve cors ERROR  use cors chrome extension then it easliy pass data and remove cors error.

  ## After fetching data from api if taking time we can show  , loading,
  But loading is not a good way practice,

  So We use ,##Simhar UI 

  ## Simhar UI is fake load data to show user ,till actual data will not comes from api......

** When ever state variable update,react triggers a reconciliation cycle (re-render the components)