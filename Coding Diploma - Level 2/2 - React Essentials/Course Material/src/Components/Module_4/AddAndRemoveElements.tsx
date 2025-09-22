import { useState } from "react";

const AddAndRemoveElements = () => {
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
  const [nextId, setNextId] = useState(bots.length + 1);

  const [newBot, setNewBot] = useState({
    id: 0,
    name: "",
    status: "",
    task: "",
  });

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

  const handleDelete = (id: number) => {
    setBots(bots.filter((bot) => id !== bot.id));
  };

  const addToBotsList = () => {
    setBots((prevBots) => [
      ...prevBots,
      {
        ...newBot,
        id: nextId,
        status: "Stopped",
      },
    ]);
    setNextId((prev) => prev + 1);
  };

  return (
    <>
      <h1 className="underline font-bold">Bot List Manager</h1>

      <ul className="flex overflow-auto">
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
                className="bg-blue-500 hover:bg-blue-700 text-white mx- p-1 m-1 rounded"
                onClick={() => triggerJob(id)}
              >
                {status != "Running" ? "Start" : "Stop"}
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white mx- p-1 m-1 rounded mb-4"
                onClick={() => handleDelete(id)}
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
        value={newBot.name}
        onChange={(e) => setNewBot({ ...newBot, name: e.target.value })}
        placeholder="Enter bot Name..."
        className="m-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <input
        type="text"
        value={newBot.task}
        onChange={(e) => setNewBot({ ...newBot, task: e.target.value })}
        placeholder="Enter bot Task..."
        className="m-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
        onClick={addToBotsList}
      >
        Add Bot
      </button>
    </>
  );
};

export default AddAndRemoveElements;
