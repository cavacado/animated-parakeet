import React from "react";
import { Route, RouteProps } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
import Toggle from "react-toggle";

const ROUTES: RouteProps[] = [
  { path: "/", exact: true, component: Home },
  { path: "/details", component: Details },
];
interface RoutesProps {
  isLight: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Routes(props: RoutesProps) {
  const { isLight, setTheme } = props;
  return (
    <>
      <div>mast head</div>
      <Toggle
        name="theme-toggle"
        defaultChecked={!isLight}
        onChange={() => setTheme(!isLight)}
        icons={false}
        aria-label={"toggle"}
      />
      {ROUTES.map((route, i) => {
        return <Route {...route} key={i} />;
      })}
    </>
  );
}
