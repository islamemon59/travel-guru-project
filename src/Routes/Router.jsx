import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Component/Home";
import Login from "../Component/Login";
import Register from "../Component/Register";
import PrivetRouter from "../Context/PrivetRouter";
import Blog from "../Pages/Blog";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
              index: true,
              Component: Home,
            },
            {
                path:"/login",
                Component: Login
            },
            {
                path:"/register",
                Component: Register
            },
            {
                path: "/blog",
                element: <PrivetRouter>
                    <Blog></Blog>
                </PrivetRouter>
            }
        ]
    }
])