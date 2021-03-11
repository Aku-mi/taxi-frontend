import styled from "styled-components";

export const Container = styled.div`
  header {
    padding: 0;
    background: rgba(0, 0, 0, 0.85);
    text-align: center;
    position: relative;
    z-index: 999;
    width: 100%;
    height: 3rem;
  }

  .logo {
    color: white;
    font-size: 2rem;
    cursor: pointer;
  }

  .nav-toggle {
    display: none;
  }

  .nav-toggle-label {
    position: absolute;
    top: 0;
    left: 0;
    margin-left: 1em;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .nav-toggle-label span,
  .nav-toggle-label span::before,
  .nav-toggle-label span::after {
    display: block;
    background: white;
    height: 2px;
    width: 2em;
    border-radius: 2px;
    position: relative;
  }

  .nav-toggle-label span::before,
  .nav-toggle-label span::after {
    content: "";
    position: absolute;
  }

  .nav-toggle-label span::before {
    bottom: 8px;
  }

  .nav-toggle-label span::after {
    top: 8px;
  }

  nav {
    position: absolute;
    text-align: left;
    top: 100%;
    left: 0;
    background: rgba(0, 0, 0, 0.85);
    width: 100%;
    transform: scale(1, 0);
    transform-origin: top;
    transition: transform 400 ms ease-in-out;
  }
  nav ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  nav li {
    margin-bottom: 1em;
    margin-left: 1em;
  }

  nav .link {
    color: white;
    text-decoration: none;
    font-size: 1rem;
    opacity: 0;
    transition: opacity 150ms ease-in-out 250ms;
  }

  nav .link:hover {
    color: rgba(202, 202, 202, 0.897);
  }

  .nav-toggle:checked ~ nav {
    transform: scale(1, 1);
  }

  .nav-toggle:checked ~ nav .link {
    opacity: 1;
    transition: opacity 150ms ease-in-out;
  }

  @media screen and (min-width: 800px) {
    .nav-toggle-label {
      display: none;
    }
    header {
      display: grid;
      grid-template-columns: 1fr auto minmax(600px, 3fr) 1fr;
      padding: 0;
    }

    .logo {
      grid-column: 2 / 3;
      margin: 5px;
      cursor: pointer;
    }

    nav {
      all: unset;
      grid-column: 3/4;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    nav ul {
      display: flex;
      justify-content: flex-end;
    }

    nav li {
      margin-left: 3em;
      margin-bottom: 0;
    }

    nav .link {
      opacity: 1;
      position: relative;
    }

    nav .link::after {
      content: "";
      display: block;
      height: 2px;
      background: rgb(255, 255, 255);
      position: absolute;
      top: 1.2em;
      left: 0;
      right: 0;
      transform: scale(0, 1);
      transform-origin: center;
      transition: transform ease-in-out 250ms;
    }

    nav .link:hover::after {
      transform: scale(1, 1);
    }
  }
`;
