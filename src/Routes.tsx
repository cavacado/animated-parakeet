import React from "react";
import { Route, RouteProps } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";

const ROUTES: RouteProps[] = [
  { path: "/", exact: true, component: Home },
  { path: "/details", component: Details },
];

export default function Routes() {
  return (
    <>
      {ROUTES.map((route, i) => {
        return <Route {...route} key={i} />;
      })}
    </>
  );
}
