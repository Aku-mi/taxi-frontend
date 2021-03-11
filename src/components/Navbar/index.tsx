import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Header } from "./Elements";
import { NavItems } from "./interfaces";

class Navbar extends Component<NavItems> {
  render() {
    return (
      <Container>
        <Header>
          <h1 className="logo">Taxi Tracker</h1>
          <input type="checkbox" className="nav-toggle" id="nav-toggle" />
          <nav>
            <ul>
              {this.props.items.map((item) => (
                <li key={item.id}>
                  <Link to={item.href} className="link">
                    {item.txt}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <label htmlFor="nav-toggle" className="nav-toggle-label">
            <span></span>
          </label>
        </Header>
      </Container>
    );
  }
}

export default Navbar;
