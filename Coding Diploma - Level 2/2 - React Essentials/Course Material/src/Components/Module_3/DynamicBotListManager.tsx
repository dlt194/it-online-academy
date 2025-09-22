import { useState } from "react";

const DynamicBotListManager = () => {
  const [formNameInput, setFormNameInput] = useState("");
  const [formTaskInput, setFormTaskInput] = useState("");
  const [formFilterInput, setFormFilterInput] = useState("");
  const [bots, setBots] = useState([
    {
      id: 1,
      name: "Email Extractor",
      status: "Running",
      task: "Extracting emails",
    },
    {
      id: 2,
      name: "Notification Sender",
      status: "Completed",
      task: "Sending notifications",
    },
    { id: 3, name: "Data Analyzer", status: "Stopped", task: "Analyzing data" },
  ]);

  const triggerJob = (id: number) => {
    setBots((prevBots) =>
      prevBots.map((bot) => {
        if (bot.id !== id) return bot;

        let newStatus = bot.status;
        switch (bot.status) {
          case "Stopped":
          case "Completed":
            newStatus = "Running";
            break;
          case "Running":
            newStatus = "Stopped";
            break;
          default:
            break;
        }

        return { ...bot, status: newStatus };
      })
    );
  };

  const handleNameInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormNameInput(event.target.value);
  };

  const handleTaskInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormTaskInput(event.target.value);
  };

  const handleFilterInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormFilterInput(event.target.value);
  };

  const filteredBots = bots.filter((b) => {
    const q = formFilterInput.trim().toLowerCase();
    if (!q) return true;
    return (
      b.name.toLowerCase().includes(q) ||
      b.status.toLowerCase().includes(q) ||
      b.task.toLowerCase().includes(q)
    );
  });
  return (
    <>
      <h1 className="underline font-bold">Bot List Manager</h1>
      <input
        type="text"
        value={formFilterInput}
        onChange={handleFilterInputChange}
        placeholder="Enter bot Name..."
        className="m-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <ul className="flex overflow-auto">
        {filteredBots.map((bot) => (
          <li
            key={bot.id}
            className="border border-gray-400 rounded m-2 min-w-[250px]"
          >
            <div className="flex flex-col">
              <span className="m-2">Name: {bot.name}</span>
              <span className="m-2">Status: {bot.status}</span>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white p-1 m-1 rounded"
                onClick={() => triggerJob(bot.id)}
              >
                {bot.status != "Running" ? "Start" : "Stop"}
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white p-1 m-1 rounded"
                onClick={() => setBots(bots.filter((b) => b.id !== bot.id))}
              >
                Delete Bot
              </button>
            </div>
          </li>
        ))}
      </ul>
      <br />
      <input
        type="text"
        value={formNameInput}
        onChange={handleNameInputChange}
        placeholder="Enter bot Name..."
        className="m-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <input
        type="text"
        value={formTaskInput}
        onChange={handleTaskInputChange}
        placeholder="Enter bot Task..."
        className="m-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
        onClick={() =>
          setBots((prevBots) => [
            ...prevBots,
            {
              id: prevBots.length + 1, // safer than length++
              name: formNameInput,
              task: formTaskInput,
              status: "Stopped",
            },
          ])
        }
      >
        Add Bot
      </button>
    </>
  );
};

export default DynamicBotListManager;
