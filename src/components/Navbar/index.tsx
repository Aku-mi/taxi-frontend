import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "./Elements";
import { NavItems } from "./interfaces";
import { Post } from "../../services";
import { storage } from "../../services/storage";

class Navbar extends Component<NavItems> {
  render() {
    return (
      <Container>
        <header>
          <h1 className="logo">
            <Link to="/" className="link-logo">
              Taxi Tracker
            </Link>
          </h1>
          <input type="checkbox" className="nav-toggle" id="nav-toggle" />
          <nav>
            <ul>
              {this.props.items.map((item) => {
                if (item.href !== "/log-out") {
                  return (
                    <li key={item.id}>
                      <Link to={item.href} className="link">
                        {item.txt}
                      </Link>
                    </li>
                  );
                } else {
                  return (
                    <li key={item.id}>
                      <Link
                        to="/"
                        className="link"
                        onClick={async () => {
                          await Post("auth/log-out", {});
                          storage.saveToken("");
                        }}
                      >
                        {item.txt}
                      </Link>
                    </li>
                  );
                }
              })}
            </ul>
          </nav>
          <label htmlFor="nav-toggle" className="nav-toggle-label">
            <span></span>
          </label>
        </header>
      </Container>
    );
  }
}

export default Navbar;
