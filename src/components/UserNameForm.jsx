import React from "react";
import ThemeContext from "../ThemeContext/ThemeContext";
import { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import "../styles/buttonStyle.scss";

export function UserNameForm(props) {
  const { theme, handleThemeChange } = React.useContext(ThemeContext);

  const [username, setUserName] = useState("");

  function handleChange(event) {
    setUserName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    setUserName(event.target.value);
    console.log(username);
    props.onSubmit(username);
  }

  return (
    <div>
      <div className="toggleThemeStyle">
        <h2>Background: {theme}</h2>
        <button onClick={handleThemeChange} className="buttonStyle">
          Change background
        </button>
      </div>
      <h1>Choose display name</h1>
      <form onSubmit={handleSubmit}>
        <Input onChange={handleChange} />
        <Button buttonName="Join"></Button>
      </form>
    </div>
  );
}
