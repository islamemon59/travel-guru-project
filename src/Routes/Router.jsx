import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Component/Home";
import Login from "../Component/Login";
import Register from "../Component/Register";

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
            }
        ]
    }
])