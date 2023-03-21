import React from "react";
import ThemeContext from "../ThemeContext/ThemeContext";
import { useState, useEffect, useMemo } from "react";
import { Input } from "./Input";
import { Button } from "./Button";
import "../styles/messageStyle.scss";
import "../styles/toggleThemeStyle.scss";
import "../styles/buttonStyle.scss";

const drone = new window.Scaledrone("6v1mpGgUVu49rOqa");
const room = drone.subscribe("my-room");

export function MessageForm(props) {
  const { theme, handleThemeChange } = React.useContext(ThemeContext);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const usercolor = useMemo(() => generateUserColor(), []);

  useEffect(() => {
    drone.on("error", (error) => {
      console.error("Error with connection:", error);
    });
    drone.on("close", (event) => {
      console.log("Connection closed:", event);
    });

    room.on("message", (message) => {
      console.log("Received data:", message.data);

      setMessages((prevMessages) => [...prevMessages, message.data]);
    });
  }, []);

  function handleChange(event) {
    setMessage(event.target.value);
  }

  function generateUserColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const userdata = {
      message: message,
      username: props.username,
      color: usercolor,
    };
    drone.publish({
      room: "my-room",
      message: userdata,
    });
    setMessage("");
  }

  return (
    <div>
      <div className="toggleThemeStyle">
        <h2>Background: {theme}</h2>
        <button onClick={handleThemeChange} className="buttonStyle">
          Change background
        </button>
      </div>
      <h1>Welcome to chat {props.username}!</h1>
      {messages.map((message, index) => (
        <div key={index}>
          <strong>{message.username}: </strong>
          <div className="messages" style={{ backgroundColor: message.color }}>
            {message.message}
          </div>
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <Input onChange={handleChange} value={message} />
        <Button buttonName="Send Message">Message</Button>
      </form>
    </div>
  );
}

