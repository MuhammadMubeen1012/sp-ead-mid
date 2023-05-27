// import { Form } from "formik";

import { useState } from "react";

function PollDisplay({ val, changeUser }) {
  const data = {
    question: "What is your favorite programming language?",

    choices: [
      { id: 1, label: "JavaScript", votes: 0 },

      { id: 2, label: "Python", votes: 0 },

      { id: 3, label: "Java", votes: 0 },

      { id: 4, label: "C#", votes: 0 },
    ],
  };

  const [vote, setVote] = useState(data);

  return (
    <>
      <div>
        <label>Question</label>
        <p>{data.question}</p>
        <label>Answers</label>
        <p>
          {data.choices.map((choice) => {
            return (
              <>
                <p id={choice.id}>
                  {choice.label} --------------{" "}
                  <span> Votes: {choice.votes}</span>{" "}
                </p>
              </>
            );
          })}
        </p>
      </div>
    </>
  );
}

export default PollDisplay;
