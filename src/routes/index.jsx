import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import LoginPage from "../pages/LoginPage";
import MainLayout from "../components/layout/MainLayout";
import DashboardPage from "../pages/DashboardPage";
import SignUpPage from "../pages/SignUpPage";
import Employees from "../pages/Employees";
import Tasks from "../pages/Tasks";
import UserInfo from "../pages/UserInfo";
import UserKPI from "../pages/UserKPI";
import LogOut from "../components/commonEmployees/LogOut";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <LoginPage />
      },
      {
        path: "signup",
        element: <SignUpPage />
      },
      {
        path: "dashboard/",
        element: <MainLayout />,
        children: [
          {
            path:"home",
            element: < DashboardPage />
          },
          {
            path: "employees",
            element: < Employees/>
          },
          {
            path: "tasks",
            element: < Tasks />
          },
          {
            path: "userinfo",
            element: < UserInfo />
          },
          {
            path: "userkpi",
            element: < UserKPI />
          },
          {
            path: "logout",
            element: < LogOut />
          },
        ]
      }
    ]
  }
]);