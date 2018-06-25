import React from "react";
import ReactDOM from "react-dom";

console.log("App.js is running now!");

// JSX
const app = {
  title: "My App Title",
  subtitle: "My Subtitle",
  options: []
};

const onFormSubmit = e => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderApp();
  }
};

const onRemoveAll = () => {
  app.options = [];
  renderApp();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <h2>{app.subtitle}</h2>}
      <p>
        {app.options && app.options.length > 0
          ? "Here are your options:"
          : "No options"}
      </p>
      <button onClick={onMakeDecision}>What should I do?</button>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>{app.options.map(option => <li key={option}>{option}</li>)}</ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById("app");
// ReactDOM.render(template, appRoot);
renderApp();
