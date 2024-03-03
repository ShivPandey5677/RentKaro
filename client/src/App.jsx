import Navbar from "./components/Navbar";
import NavbarL from "./components/NavbarL";
import Login from "./pages/login";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import Register from "./pages/register";
import Home from "./pages/Home";
import Property from "./pages/Property";
import View from "./pages/View";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";
import Listproperty from "./pages/Listproperty";
import ReportFraud from "./components/ReportFraud";
import AddTenant from "./components/AddMoreTenant";
import ChatBot from "./pages/ChatBot";
import AboutSection from "./pages/about";

function App() {
  const {currentUser}=useContext(AuthContext);
  const queryClient=new QueryClient();
  const Layout=()=>{
    return (
      <QueryClientProvider client={queryClient}>
       <div className="bg-[#86B6F6]">
       {!currentUser?
      <Navbar/>:<NavbarL/>}
        <Outlet/>
        </div>
       </QueryClientProvider>
    );

  };

  const router = createBrowserRouter([
    {
      path:"/",
      element:
      <Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:'/property',
          element:<Property/>
        },
        {
          path:'/viewproperty',
          element:<View/>,
          props:true
        },
        {
          path: "/listproperty",
          element: <Listproperty/>,
        },
        {
          path:'/ChatBot',
          element:<ChatBot/>
        },
        {
          path: "/reportfraud",
          element: <ReportFraud/>,
        },
        {
          path:'/addtenant',
          element:<AddTenant/>
        },
        {
          path:'/about',
          element:<AboutSection/>
        },
      ]
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
   
  ]);
 
    return <div >
       <RouterProvider router={router} />
    </div>;
  } 

export default App