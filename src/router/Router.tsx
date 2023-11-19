import App from "App";
import PageNotFound from "Screen/PageNotFound";
import { useRoutes } from "react-router-dom";

export default function Router() {
  let element = useRoutes([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);

  return element;
}
