import React from "react";
import {Container, Navbar} from "react-bootstrap";
import {useThemeContext} from "../hooks/useThemeContext";
import ThemeSwitch from "./ThemeSwitch";

export const Header = () => {
  // @ts-ignore
  const {darkMode} = useThemeContext();
  const theme = darkMode ? 'dark' : 'light';

  return (
    <Navbar bg={theme} variant={theme}>
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt="logo"
            src="/img/lendbor-64.png"
            className="d-inline-block align-top app-logo"
          />{' '}
          Lendbor
        </Navbar.Brand>
        <ThemeSwitch />
      </Container>
    </Navbar>
  );
}
