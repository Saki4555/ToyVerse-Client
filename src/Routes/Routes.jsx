import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import AddToys from "../Pages/AddToys/AddToys";
import MyToys from "../Pages/MyToys/MyToys";
import UpdateToys from "../Pages/MyToys/UpdateToys";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <Signup></Signup>
        },
        {
          path: '/addtoy',
          element: <AddToys></AddToys>
        },
        {
          path: '/mytoys',
          element: <MyToys></MyToys>,
        },
        {
          path: '/updatetoys/:id',
          element: <UpdateToys></UpdateToys>,
          loader: ({ params }) => fetch(`http://localhost:5000/toys/${params.id}`)
        }
      ]
    },
  ]);

  export default router;
  