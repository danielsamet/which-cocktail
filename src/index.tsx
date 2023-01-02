import { ColorModeScript } from "@chakra-ui/react";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { App } from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TitleBlock } from "./TitleBlock";
import { IngredientPage } from "./Pages/IngredientPage";
import { ErrorPage } from "./Pages/ErrorPage";

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(container);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <TitleBlock />,
      },
      {
        path: "ingredients/:type/:name",
        element: <IngredientPage />,
      },
      {
        path: "source_one/:name",
        element: <IngredientPage />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <ColorModeScript />
    <RouterProvider router={router} />
  </React.StrictMode>
);
