import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Navbar,
  VideoDetail,
  ChannelDetail,
  Feed,
  SearchFeed,
} from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Feed />,
  },
  {
    path: "/video/:id",
    element: <VideoDetail />,
  },
  {
    path: "/channel/:id",
    element: <ChannelDetail />,
  },
  {
    path: "/search/:searchTerm",
    element: <SearchFeed />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>,
);
