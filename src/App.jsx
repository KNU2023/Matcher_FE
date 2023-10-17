import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./page/Root";
import ReservationPage from "./page/ReservationPage";
import JobPostPage from "./page/JobPostPage";
import SignInPage from "./page/SignInPage";
import MailPage from "./page/mailPage";
import JobPosCreatetPage from "./page/JobPostCreatePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, path: "", element: <ReservationPage /> },
      { path: "signin", element: <SignInPage /> },
      {
        path: "jobpost",
        children: [
          { index: true, path: "", element: <JobPostPage /> },
          { path: "create", element: <JobPosCreatetPage /> }
        ]
      },
      { path: "mail", element: <MailPage /> },
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
