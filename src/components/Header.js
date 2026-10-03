import React, { useState, useContext, useReducer } from "react";
import { Link } from "react-router-dom";
import { ModeToggle } from "./ModeToggle";

export const Header = () => {
  return (
    <header className="App-header">
        <ModeToggle />
            <div className="flex">
            <span>about</span>
            <span>work</span>
            <span>contact</span>
            </div>
        <div className="gentle-divide"></div>
    </header>
    );
}