import React, { useState, useContext, useReducer } from "react";

export function Footer(props) {
  return (
    <footer>
        <div className="gentle-divide"></div>
        <p>copyright {new Date().getFullYear()}</p>
    </footer>
  );
}