import { useState } from "react";

const PracticalExerciseUsingUseState = () => {
  const bots = ["Bot 1", "Bot 2", "Bot 3"];
  const [stateBots, setStateBotValues] = useState([
    { id: 1, name: "Extract Emails", status: "Running" },
    { id: 2, name: "Send Emails", status: "Completed" },
    { id: 3, name: "Read Emails", status: "Stopped" },
  ]);

  return (
    <>
      <ul>
        {bots.map((bot) => (
          <li key={bot}>
            {bot}{" "}
            <button className="bg-blue-500 hover:bg-blue-700 text-white p-1 m-1 rounded">
              Edit
            </button>
          </li>
        ))}
      </ul>
      <br />
      <ul>
        {stateBots.map(({ id, name, status }) => (
          <li key={id}>
            Name: {name} - Status: {status} -{" "}
            <button className="bg-blue-500 hover:bg-blue-700 text-white p-1 m-1 rounded">
              {status != "Running" ? "Start" : "Stop"}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PracticalExerciseUsingUseState;
