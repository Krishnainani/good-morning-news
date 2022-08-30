import React, { useState } from "react";

export default function ShowContents({ children }) {
  const buttonName = children[1].split(" ");
  const [showContents, setShowContents] = useState(false);

  const contentHandler = () => {
    setShowContents((currentstate) => {
      return !currentstate;
    });
  };
  return (
    <div>
      <button onClick={contentHandler}>
        {showContents
          ? `${buttonName[1]} ${buttonName[0]}`
          : `${buttonName[2]} ${buttonName[0]}`}{" "}
      </button>
      {showContents ? children[0] : null}
    </div>
  );
}
