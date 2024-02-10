import React, { lazy } from "react";
import { Navigate } from "react-router-dom";

import Menus from "../views/Menus.jsx";
import Admin from "../views/Admin.jsx";
import Login from "../views/Login.jsx";

const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

const Starter = lazy(() => import("../views/Starter.js"));
const Users = lazy(() => import("../views/Users.jsx"));
const Alerts = lazy(() => import("../views/ui/Alerts.js"));
const Badges = lazy(() => import("../views/ui/Badges.js"));
const Buttons = lazy(() => import("../views/ui/Buttons.js"));
const Cards = lazy(() => import("../views/ui/Cards.js"));
const Grid = lazy(() => import("../views/ui/Grid.js"));
const Forms = lazy(() => import("../views/ui/Forms.js"));

// const isAuthenticated = !!localStorage.getItem("jwt");

const isAuthenticated = true;

const ProtectedRoute = ({ element, ...rest }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
};

const ThemeRoutes = [
    {
        path: "/",
        element: <FullLayout />,
        children: [
            { path: "/", element: <Navigate to="/starter" /> },
            { path: "/starter", exact: true, element: <ProtectedRoute element={<Starter />} /> },
            { path: "/users", exact: true, element: <ProtectedRoute element={<Users />} /> },
            { path: "/menus", exact: true, element: <ProtectedRoute element={<Menus />} /> },
            { path: "/admin", exact: true, element: <ProtectedRoute element={<Admin />} /> },
            
            { path: "/alerts", exact: true, element: <ProtectedRoute element={<Alerts />} /> },
            { path: "/badges", exact: true, element: <ProtectedRoute element={<Badges />} /> },
            { path: "/buttons", exact: true, element: <ProtectedRoute element={<Buttons />} /> },
            { path: "/cards", exact: true, element: <ProtectedRoute element={<Cards />} /> },
            { path: "/grid", exact: true, element: <ProtectedRoute element={<Grid />} /> },
            { path: "/forms", exact: true, element: <ProtectedRoute element={<Forms />} /> },
        ],
    },
    // Login route without FullLayout
    { path: "/login", exact: true, element: <Login /> },
];

export default ThemeRoutes;
