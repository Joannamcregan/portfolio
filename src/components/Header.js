import React, { useState, useContext, useReducer } from "react";
import { Link } from "react-router-dom";
import { ModeToggle } from "./ModeToggle";

export const Header = () => {
  return (
    <header className="App-header">
        <ModeToggle />
        <nav className="flex">
            <Link to="/about">about</Link>
            <Link to="/">work</Link>
            <Link to="/contact">contact</Link>
        </nav>
        <div className="gentle-divide"></div>
    </header>
    );
}