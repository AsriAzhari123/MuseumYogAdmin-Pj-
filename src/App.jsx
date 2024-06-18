import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, createBrowserRouter, RouterProvider } from "react-router-dom";
import { EnterCode, ForgotPassword, Login, NewPassword, SignUp, CmsPage, Dashboard, EditInformationScreen, AddInformationScreen, EventOverview, MuseumCollection, SettingEvent, ReviewScreen, TicketScreen, EditEventScreen, AddEventScreen, ReportEvent, AddReport, EditReport, ProfileScreen, EditProfileScreen} from "./pages";

// Define routes with the correct redirection for the root path
const router = createBrowserRouter([
  { path: "/", element: <Login />},
  { path: "login", element: <Login /> },
  { path: "signup", element: <SignUp /> },
  { path: "forgot_password", element: <ForgotPassword /> },
  { path: "code_verification", element: <EnterCode /> },
  { path: "new_password", element: <NewPassword /> },
  { path: "dashboard", element: <Dashboard />},
  { path: "cms", element: <CmsPage />},
  { path: "edit_information", element: <EditInformationScreen />},
  { path: "add_information", element: <AddInformationScreen />},
  { path: "events", element: <EventOverview />},
  { path: "ticket", element: <TicketScreen />},
  { path: "museum_collection", element: <MuseumCollection /> },
  { path: "setting_event", element: <SettingEvent /> },
  { path: "*", element: <Navigate to="/" /> },
  { path: "review", element: <ReviewScreen />},
  { path: "/edit_event/:id", element: <EditEventScreen />},
  { path: "add_event", element: <AddEventScreen />},
  { path: "report_event", element: <ReportEvent />},
  { path: "add_report", element: <AddReport />},
  { path: "edit_report/:id", element: <EditReport />},
  { path: "profile", element: <ProfileScreen />},
  { path: "edit_profile", element: <EditProfileScreen />}
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
