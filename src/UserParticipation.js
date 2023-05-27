import React from "react";
import PollDisplay from "./PollDisplay";

export default function UserParticipation() {
  const handleClick = (val) => {
    <PollDisplay val={val} />;
  };

  return (
    <div>
      <PollDisplay />
      <button onClick={() => handleClick(1)}>Vote for 1</button>
      <button onClick={() => handleClick(2)}>Vote for 2</button>
      <button onClick={() => handleClick(3)}>Vote for 3</button>
      <button onClick={() => handleClick(4)}>Vote for 4</button>
    </div>
  );
}
