import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./page/Root";
import ReservationPage from "./page/ReservationPage";
import JobPostPage from "./page/JobPostPage";
import SignInPage from "./page/SignInPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, path:"", element: <ReservationPage /> },
      { path: "signin", element: <SignInPage /> },
      { path: "jobpost", element: <JobPostPage />},

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
