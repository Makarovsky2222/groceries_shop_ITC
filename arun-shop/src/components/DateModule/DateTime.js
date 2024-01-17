// DateTime.js
import React, { useState, useEffect } from "react";

const DateTime = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 10,
        right: 10,
        color: "#5F5F5F",
        fontSize: "18.57px",
        fontFamily: "Inter",
        fontWeight: 400,
        wordWrap: "break-word",
      }}
    >
      {" "}
      {dateTime.toLocaleString()}
    </div>
  );
};

export default DateTime;
