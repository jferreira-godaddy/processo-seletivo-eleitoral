import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cargo from "./components/Cargo";
import Candidatos from "./components/Candidatos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Cargo />,
  },
  {
    path: "/candidatos",
    element: <Candidatos />,
  }
]);

const MainRouteProvider = () => {
  return <RouterProvider router={router} />;
};

export { router };

export default MainRouteProvider;
