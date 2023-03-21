import { useState } from "react";
import { UserNameForm } from "../components/UserNameForm";
import { MessageForm } from "../components/MessageForm";

export function Pages() {
  const [isUserNameFormSubmitted, setIsUserNameFormSubmitted] = useState(false);
  const [username, setUserName] = useState("");
  function handleUserNameFormSubmit(data) {
    setIsUserNameFormSubmitted(true);
    setUserName(data);
  }

  return (
    <div>
      {isUserNameFormSubmitted ? (
        <MessageForm username={username} />
      ) : (
        <UserNameForm onSubmit={handleUserNameFormSubmit} />
      )}
    </div>
  );
}
