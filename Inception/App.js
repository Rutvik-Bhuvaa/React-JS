import React from "react";
import ReactDOM from "react-dom/client";

console.log("✅ App.js is running!");

const heading = React.createElement("h1", {}, "✅ NEW UI LOADED!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

// JSX
const jsxHeading = <h1 id="heading">Namaste react using JSX</h1>;
