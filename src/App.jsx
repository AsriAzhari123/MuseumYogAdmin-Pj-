import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, createBrowserRouter, RouterProvider } from "react-router-dom";
import { EnterCode, ForgotPassword, Login, NewPassword, SignUp } from "./pages";

// Define routes with the correct redirection for the root path
const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/login" replace /> },
  { path: "login", element: <Login /> },
  { path: "signup", element: <SignUp /> },
  { path: "forgot_password", element: <ForgotPassword /> },
  { path: "code_verification", element: <EnterCode /> },
  { path: "new_password", element: <NewPassword /> },
  { path: "home", element: <div></div> } 
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
