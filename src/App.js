import React, { useState, useEffect } from "react";
import "./App.css";
const colors = [
  "white",
  "black",
  "blue",
  "green",
  "pink",
  "red",
  "purple",
  "yellow",
  "gray",
  "lilac",
];
const App = () => {
  const [value, setValue] = React.useState(0);
  const [time, setTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      const date = new Date().toLocaleTimeString();
      setTime(date);
    }, 1000);
  }, []);
  useEffect(() => {
    setInterval(() => {
      setValue((v) => (v === 9 ? 0 : v + 1));
    }, 1000);
  }, []);

  return (
    <div className="timmer" style={{ backgroundColor: colors[value] }}>
      {time}
    </div>
  );
};

export default App;
