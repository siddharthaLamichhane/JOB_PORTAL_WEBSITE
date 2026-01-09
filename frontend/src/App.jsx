import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Login } from "./components/auth/Login.jsx";
import { Signup } from "./components/auth/Signup.jsx";
import { Home } from "./components/Home.jsx";
import { Jobs } from "./components/Jobs.jsx";
import { Browse } from "./components/Browse.jsx";
import { Profile } from "./components/profile/Profile.jsx";
import { JobDescription } from "./components/Jobs/JobDescription.jsx";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/jobs",
    element: <Jobs />,
  },

  {
    path: "/description/:id",
    element: <JobDescription />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
