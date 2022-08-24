import { useState } from "react";

export default function ShowContents({children}) {
  const [showContents, setShowContents] = useState(false);

  const contentHandler = (() => {
    setShowContents((currentstate) => {
        return !currentstate
    })
  })
console.log(children);
  return (
    <div>
      <button onClick={contentHandler}>{showContents  ?  `Hide${children[1]}`: `Show${children[1]}`} </button>
      {showContents ? children[0] : null}
    </div>
  );
}
