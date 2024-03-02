import Navbar from "./components/Navbar";
import Login from "./pages/login";

function App() {
  const currentUser=true;
  const Layout=()=>{
    return (
      //<QueryClientProvider client={queryClient}>
       <div className="bg-[#86B6F6]">
       {!currentUser?
      <Navbar/>:<NavBarL/>}
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
