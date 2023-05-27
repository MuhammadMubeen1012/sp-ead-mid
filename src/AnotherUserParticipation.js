import React from "react";
import PollDisplay from "./PollDisplay";

export default function AnotherUserParticipation() {
  const handleClick = () => {
    <PollDisplay changeUser={true} />;
  };

  return (
    <div>
      <button onClick={handleClick}>Another User</button>
    </div>
  );
}
