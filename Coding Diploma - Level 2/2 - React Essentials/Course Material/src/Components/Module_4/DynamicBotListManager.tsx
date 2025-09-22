import React, { useState } from "react";

const DynamicBotManager = () => {
  const [bots, setBots] = useState([
    { id: 1, name: "Email Bot", status: "Active" },
    { id: 2, name: "Data Bot", status: "Inactive" },
  ]);
  const [nextId, setNextId] = useState(bots.length + 1);
  const [newBot, setNewBot] = useState({ id: 0, name: "", status: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Implement input change handler
    setNewBot({
      ...newBot,
      id: nextId,
      name: e.target.value,
      status: "Inactive",
    });
  };

  const addBotToList = () => {
    // Implement add bot functionality
    if (newBot.name.trim() !== "") {
      setBots((prevBots) => [
        ...prevBots,
        {
          ...newBot,
          id: nextId,
          status: "Inactive",
        },
      ]);
      setNextId((prev) => prev + 1);
      setNewBot({ id: 0, name: "", status: "" });
    }
  };

  const deleteBot = (id: number) => {
    // Implement delete bot functionality
    setBots(bots.filter((bot) => id !== bot.id));
  };

  return (
    <div className="dynamic-bot-manager">
      <h1 className="bold underline mb-4">Dynamic Bot Manager </h1>

      {/* Add input fields for new bot */}
      <input
        required
        type="text"
        value={newBot.name}
        onChange={(e) => handleInputChange(e)}
        placeholder="Enter bot Name..."
        className="m-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />

      {/* Add button to add new bot */}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
        onClick={addBotToList}
      >
        Add Bot
      </button>

      {/* Display list of bots */}
      <ul className="flex overflow-auto">
        {/* Map through bots and display each one */}
        {bots.map(({ id, name, status }) => (
          <li
            key={id}
            className="border border-gray-400 rounded m-2 min-w-[250px]"
          >
            <div className="flex flex-col mx-2">
              <span className="m-1">ID: {id}</span>
              <span className="m-1">Name: {name}</span>
              <span className="m-1">Status: {status}</span>

              <button
                className="bg-red-500 hover:bg-red-700 text-white mx- p-1 m-1 rounded mb-4"
                onClick={() => deleteBot(id)}
              >
                Delete Bot
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DynamicBotManager;
