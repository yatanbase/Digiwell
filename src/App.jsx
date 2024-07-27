import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/Landing Page/LandingPage";
import PageNotFound from "./pages/Page not Found/PageNotFound";
import AuthPage from "./pages/Auth Page/AuthPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Profile/Profile";
import Communinties from "./pages/Communitites/Communinties";
import Anallytics from "./pages/Anallytics/Anallytics";
import Social from "./pages/Social/Social";
import PlansAndTools from "./pages/Plans and tools/PlansAndTools";
import Plans from "./pages/Plan/Plans";
import Tools from "./pages/Tools/Tools";
import Settings from "./pages/Settings/Settings";
import Notifications from "./pages/Notifications/Notifications";
import MainPage from "./pages/Main page/MainPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
      errorElement: <PageNotFound />,
    },
    {
      path: "/Auth",
      element: <AuthPage />,
    },
    {
      element: <MainPage />,
      children: [
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/communities",
          element: <Communinties />,
        },
        {
          path: "/anallytics",
          element: <Anallytics />,
        },
        {
          path: "/social",
          element: <Social />,
        },
        {
          path: "/settings",
          element: <Settings />,
        },
        {
          path: "/notifications",
          element: <Notifications />,
        },
        {
          element: <PlansAndTools />,
          children: [
            {
              path: "/plans",
              element: <Plans />,
            },
            {
              path: "/tools",
              element: <Tools />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
