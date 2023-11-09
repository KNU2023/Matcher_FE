import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./page/Root";
import ReservationPage from "./page/ReservationPage";
import JobPostPage from "./page/JobPostPage";
import AuthPage from "./page/AuthPage";
import MailPage from "./page/mailPage";
import JobPosCreatetPage from "./page/JobPostCreatePage";
import ReservationCreatePage from "./page/ReservationCreatePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, path: "", element: <ReservationPage /> },
      { path: "create", element: <ReservationCreatePage />},
      {
        path: "jobpost",
        children: [
          { index: true, path: "", element: <JobPostPage /> },
          { path: "create", element: <JobPosCreatetPage /> }
        ]
      },
      { path: "mail", element: <MailPage /> },
      { path: "auth", element: <AuthPage />},
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
