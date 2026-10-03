import React, { useState, useContext, useReducer } from "react";
import { Link } from "react-router-dom";
import { ModeToggle } from "./ModeToggle";

export const Header = () => {
  return (
    <header className="App-header">
        <ModeToggle />
        <div className="flex">
            <Link to="/about">about</Link>
            <Link to="/">home</Link>
            <Link to="/contact">contact</Link>
        </div>
        <div className="gentle-divide"></div>
    </header>
    );
}