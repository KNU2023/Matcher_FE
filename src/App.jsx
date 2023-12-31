import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./page/Root";
import ReservationPage from "./page/ReservationPage";
import JobPostPage from "./page/JobPostPage";
import AuthPage from "./page/AuthPage";
import MailPage from "./page/mailPage";
import JobPosCreatetPage from "./page/JobPostCreatePage";
import ReservationCreatePage from "./page/ReservationCreatePage";
import MailWritePage from "./page/MailWritePage";
import MyPage from "./page/MyPage";
import MyPageReservation from "./page/MyPageReservation";
import MyPageJobPost from "./page/MyPageJobPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, path: "", element: <ReservationPage /> },
      { path: "create", element: <ReservationCreatePage /> },
      {
        path: "jobpost",
        children: [
          { index: true, path: "", element: <JobPostPage /> },
          { path: "create", element: <JobPosCreatetPage /> }
        ]
      },
      {
        path: "mail",
        children: [
          { index: true, path: "", element: <MailPage /> },
          { path: "write", element: <MailWritePage /> }
        ]
      },
      { path: "auth", element: <AuthPage /> },
      {
        path: "mypage",
        children: [
          { index: true, path: "", element: <MyPage />},
          { path: "reservation", element: <MyPageReservation />},
          { path: "jobpost", element: <MyPageJobPost />}
        ]
      }
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
