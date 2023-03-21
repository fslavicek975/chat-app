import { useState } from "react";
import { Pages } from "./pages/Pages";
import ThemeContext from "./ThemeContext/ThemeContext";

function App() {
  const [theme, setTheme] = useState("White");

  const handleThemeChange = () => {
    if (theme === "LightYellow") {
      setTheme("White");
      document.body.style.backgroundColor = "White";
    } else {
      setTheme("LightYellow");
      document.body.style.backgroundColor = "LightYellow";
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, handleThemeChange }}>
      <Pages />
    </ThemeContext.Provider>
  );
}

export default App;
