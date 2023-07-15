// SETUP AND MANAGE ALL APP ROUTES
import { createBrowserRouter } from "react-router-dom";

// Pages
import Root from "./routes/root";
import ErrorPage from "./pages/ErrorPage.js";
import Contact from "./routes/contact";
import About from "./routes/about";

// router
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],
  },

  {
    path: "about",
    element: <About />,
  },
]);
