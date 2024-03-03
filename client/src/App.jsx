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
import Listproperty from "./pages/Listproperty";
import ReportFraud from "./pages/Report";
import AddTenant from "./components/AddTenant";
import AboutSection from "./pages/about";
import ChatBot from "./pages/chatbot";
function App() {
  const currentUser=false;
  const Layout=()=>{
    return (
      //<QueryClientProvider client={queryClient}>
       <div className="bg-[#86B6F6]">
       {!currentUser?
      <Navbar/>:<NavbarL/>}
        <Outlet/>
        </div>
       // </QueryClientProvider>
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
          element:<View/>
        },
        {
          path:'/reportfraud',
          element:<ReportFraud/>
        },
        {
          path:'/addtenant',
          element:<AddTenant/>
        },
        {
          path:'/about',
          element:<AboutSection/>
        },{
          path:'/ChatBot',
          element:<ChatBot/>
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
    {
      path: "/listproperty",
      element: <Listproperty/>,
    },
   
  ]);
 
    return <div >
       <RouterProvider router={router} />
    </div>;
  } 

export default App