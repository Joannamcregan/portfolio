import React, { useState, useContext, useReducer } from "react";
import { Link } from "react-router-dom";
import { ModeToggle } from "./ModeToggle";

export const Header = () => {
  return (
    <header className="App-header">
        <ModeToggle />
        <nav className="flex">
            <Link to="/about" className={({ isActive }) => isActive ? 'active-link' : ''}>about</Link>
            <Link to="/" className={({ isActive }) => isActive ? 'active-link' : ''}>work</Link>
            <Link to="/contact" className={({ isActive }) => isActive ? 'active-link' : ''}>contact</Link>
        </nav>
        <div className="gentle-divide"></div>
    </header>
    );
}