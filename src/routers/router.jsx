import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import { DashboardLayout } from "../Dashboard/DashboardLayout";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Login from "../pages/Login";
import SignleBook from "../pages/shared/SignleBook";
import UploadBook from "../Dashboard/UploadBook";
import Dashboard from "../Dashboard/Dashboard";
import ManageBooks from "../Dashboard/ManageBooks";
import EditBooks from "../Dashboard/EditBooks";
import Signup from "../pages/Signup";
import Logout from "../pages/Logout";
import ErrorPage from "../pages/shared/ErrorPage";
import About from "../pages/about/About";
import Blog from "../pages/blog/Blog";
import Specific from "../pages/Home/Specific/Specific";
import Moredetails from "../pages/Home/Specific/Moredetails";
import BorrowBook from "../pages/Home/Specific/BorrowBook";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader:()=>fetch('http://localhost:5000/all-books'),
      },
      {
        path: "/all-book",
        element: <Shop />,
        loader:()=>fetch('http://localhost:5000/all-books'),
      },
      {
        path: "/book/:id",
        element: <SignleBook />,
        loader: ({ params }) => fetch(`http://localhost:5000/book/${params.id}`)
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/blog",
        element: <Blog/>
      },
      {
        path:"/borrow",
        element:<BorrowBook></BorrowBook>
      },
      {
        path: "/add-book",
        element: <UploadBook></UploadBook>
      }
    ]
  },
  {
    path: "/admin/dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "/admin/dashboard", element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>},
      { path: "/admin/dashboard/upload", element: <UploadBook /> },
      { path: "/admin/dashboard/manage", element: <ManageBooks /> },
      { path: "/admin/dashboard/edit-books/:id", element: <EditBooks />,
      loader: ({ params }) => fetch(`http://localhost:5000/book/${params.id}`)
    },
    
    ],
  },
  {
    path: "/specific/:id",
    element:<PrivateRoute><Specific></Specific></PrivateRoute>,
    loader:()=>fetch('http://localhost:5000/all-books'),
  },

  {
    path: "/moredetail/:id",
    element:<PrivateRoute><Moredetails></Moredetails></PrivateRoute>,
    loader:({params})=> fetch(`http://localhost:5000/moredetail/${params.id}`)  
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "/create-user",
    element: <Signup/>
  },
  {
    path:"/logout",
    element: <Logout/>
  }
]);

export default router;