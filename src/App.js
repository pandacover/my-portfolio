import { Navbar } from "./components";
import Layout from "./components/Layout/Layout";
import { useState } from "react";

const App = () => {
  const check = window.localStorage.getItem("setTheme")
  const [theme, setTheme] = useState(check ? check : "dark")

  const dispatchTheme = (value) => {
    window.localStorage.setItem("setTheme", value)
    setTheme(value)
  }

  return (
    <main className={`main-body ${theme}`}>
      <Navbar payload={{ theme, dispatchTheme }} />
      <Layout theme={theme} />
    </main>
  );
}

export default App;
