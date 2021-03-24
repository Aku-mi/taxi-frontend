import React from "react";
import Navbar from "../Navbar/";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { RouteProps } from "./interfaces";
import "./styles.css";
import { Main } from "../../pages/Main";

export const Routes: React.FC<RouteProps> = (props) => {
  return (
    <BrowserRouter>
      <div>
        <Navbar
          items={props.data.filter((p) => {
            if (p.visible) {
              return {
                href: p.href,
                txt: p.txt,
                id: p.id,
              };
            } else {
              return undefined;
            }
          })}
        />

        <div className="cont">
          <Switch>
            <Route key={100} exact path="/" component={Main} />
            {props.data.map((p) => (
              <Route
                key={p.id}
                exact
                path={p.href}
                component={p.component}
              ></Route>
            ))}
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};
