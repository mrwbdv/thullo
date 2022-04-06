import React from "react";
import { paths } from "./paths";
import { HomePage } from "./home";
// import NotFoundPage from "./not-found";
// const HomePage = React.lazy(() => import("./home"));
// const NotFoundPage = React.lazy(() => import("./not-found"));

export const ROUTES = [
    { exact: true, path: paths.home(), component: HomePage },
    // { path: "*", component: NotFoundPage },
];
