import { useState } from "react";
import TicketInfo from "./TicketInfo";
import TicketDisplay from "./TicketDisplay";

const StatusBoard = () => {
  const [tickets, setTickets] = useState([
    {
      id: 1,
      customerName: "Alice Johnson",
      dateLogged: "2025-08-01T09:15:30.000Z",
      issueLogged: "Unable to login to account",
      resolutionDate: "2025-08-02T14:20:10.000Z",
      resolutionStatus: "Resolved",
    },
    {
      id: 2,
      customerName: "Michael Smith",
      dateLogged: "2025-08-05T11:45:00.000Z",
      issueLogged: "Payment failed during checkout",
      resolutionDate: "2025-08-07T16:00:00.000Z",
      resolutionStatus: "Resolved",
    },
    {
      id: 3,
      customerName: "Sophia Lee",
      dateLogged: "2025-08-18T08:05:45.000Z",
      issueLogged: "Error when uploading documents",
      resolutionDate: null,
      resolutionStatus: "In Progress",
    },
    {
      id: 4,
      customerName: "David Brown",
      dateLogged: "2025-08-12T13:30:00.000Z",
      issueLogged: "Website loads slowly",
      resolutionDate: "2025-08-15T10:10:10.000Z",
      resolutionStatus: "Resolved",
    },
    {
      id: 5,
      customerName: "Emma Wilson",
      dateLogged: "2025-08-18T17:25:00.000Z",
      issueLogged: "Password reset email not received",
      resolutionDate: null,
      resolutionStatus: "Resolved",
    },
    {
      id: 6,
      customerName: "Olivia Martinez",
      dateLogged: "2025-08-15T10:45:00.000Z",
      issueLogged: "Mobile app crashes on launch",
      resolutionDate: null,
      resolutionStatus: "Resolved",
    },
    {
      id: 7,
      customerName: "James Taylor",
      dateLogged: "2025-08-12T14:20:00.000Z",
      issueLogged: "Email notifications not being sent",
      resolutionDate: null,
      resolutionStatus: "In Progress",
    },
    {
      id: 8,
      customerName: "Isabella Chen",
      dateLogged: "2025-08-10T09:10:00.000Z",
      issueLogged: "Report export generating incomplete data",
      resolutionDate: "2025-08-18T11:30:00.000Z",
      resolutionStatus: "Resolved",
    },
    {
      id: 9,
      customerName: "Ethan White",
      dateLogged: "2025-08-16T08:00:00.000Z",
      issueLogged: "User profile picture upload failing",
      resolutionDate: null,
      resolutionStatus: "In Progress",
    },
    {
      id: 10,
      customerName: "Mia Patel",
      dateLogged: "2025-08-03T16:45:00.000Z",
      issueLogged: "System timeout when processing payments",
      resolutionDate: null,
      resolutionStatus: "Resolved",
    },
  ]);
  const [newJob, setNewJob] = useState({
    id: 0,
    customerName: "",
    dateLogged: "",
    issueLogged: "",
    resolutionDate: "",
    resolutionStatus: "",
  });
  const [nextId, setNextID] = useState(tickets.length + 1);

  const [error, setError] = useState("");

  const [searchValue, setSearchValue] = useState("");

  const filteredTickets = tickets.filter((ticket) => {
    const query = searchValue.trim().toLowerCase();

    if (!query) return true;

    return (
      ticket.customerName.toLowerCase().includes(query) ||
      ticket.issueLogged.toLowerCase().includes(query) ||
      ticket.resolutionStatus.toLowerCase().includes(query)
    );
  });

  const markTicketComplete = (id: number) => {
    setTickets((prevTickets) =>
      prevTickets.map((ticket) =>
        ticket.id === id
          ? {
              ...ticket,
              resolutionStatus: "Resolved",
              resolutionDate: new Date().toISOString(),
            }
          : ticket
      )
    );
  };

  return (
    <div className="border border-gray-400 rounded">
      <div className="h-full min-h-screen w-full bg-gray-800 pt-12 p-4">
        <div className="grid gap-14 md:grid-cols-3 md:gap-5">
          <button
            className={
              searchValue === "RESOLVED"
                ? `rounded-2xl border-4 border-blue-500 hover:transform hover:scale-105`
                : `hover:transform hover:scale-105`
            }
            onClick={
              searchValue === "RESOLVED"
                ? () => setSearchValue("")
                : () => setSearchValue("RESOLVED")
            }
          >
            <TicketInfo icon="tick" title="RESOLVED" color="bg-green-500">
              <p className="text-8xl">
                {
                  tickets.filter(
                    (ticket) => ticket.resolutionStatus === "Resolved"
                  ).length
                }
              </p>
            </TicketInfo>
          </button>
          <button
            className={
              searchValue === "IN PROGRESS"
                ? `rounded-2xl border-4 border-blue-500 hover:transform hover:scale-105`
                : `hover:transform hover:scale-105`
            }
            onClick={
              searchValue === "IN PROGRESS"
                ? () => setSearchValue("")
                : () => setSearchValue("IN PROGRESS")
            }
          >
            <TicketInfo icon="flag" title="IN PROGRESS" color="bg-blue-500">
              <p className="text-8xl">
                {
                  tickets.filter(
                    (ticket) => ticket.resolutionStatus === "In Progress"
                  ).length
                }
              </p>
            </TicketInfo>
          </button>
          <button
            className={
              searchValue === "FAILED"
                ? `rounded-2xl border-4 border-blue-500 hover:transform hover:scale-105`
                : `hover:transform hover:scale-105`
            }
            onClick={
              searchValue === "FAILED"
                ? () => setSearchValue("")
                : () => setSearchValue("FAILED")
            }
          >
            <TicketInfo icon="cross" title="FAILED" color="bg-red-500">
              <p className="text-8xl">
                {
                  tickets.filter((ticket) => {
                    if (ticket.resolutionStatus !== "In Progress") return false;

                    const logged = new Date(ticket.dateLogged);
                    const fiveDaysAgo = Date.now() - 5 * 24 * 60 * 60 * 1000;

                    return logged.getTime() < fiveDaysAgo;
                  }).length
                }
              </p>
            </TicketInfo>
          </button>
        </div>
        <div className="flex max-h-12 mt-6">
          <input
            required
            type="text"
            value={newJob.customerName}
            onChange={(e) =>
              setNewJob({ ...newJob, customerName: e.target.value })
            }
            placeholder="Enter Customer Name..."
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2 m-2 min-w-[20%] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
          />
          <input
            required
            type="text"
            value={newJob.issueLogged}
            onChange={(e) =>
              setNewJob({ ...newJob, issueLogged: e.target.value })
            }
            placeholder="Enter Issue..."
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2 m-2 min-w-[50%] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
          />

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white p-1 rounded m-2 text-center min-w-[20%]"
            onClick={() => {
              if (
                newJob.customerName.trim() !== "" &&
                newJob.issueLogged.trim() !== ""
              ) {
                setTickets((prevTickets) => [
                  ...prevTickets,
                  {
                    id: nextId,
                    customerName: newJob.customerName,
                    dateLogged: new Date().toISOString(),
                    issueLogged: newJob.issueLogged,
                    resolutionDate: null,
                    resolutionStatus: "In Progress",
                  },
                ]);
                setNextID((prevId) => prevId + 1);
                setNewJob({
                  id: 0,
                  customerName: "",
                  dateLogged: "",
                  issueLogged: "",
                  resolutionDate: "",
                  resolutionStatus: "",
                });
              }
              if (newJob.customerName.trim() === "") {
                setError("Customer Name is required");
              } else if (newJob.issueLogged.trim() === "") {
                setError("Issue is required");
              } else {
                setError("");
              }
            }}
          >
            Add Ticket
          </button>
        </div>
        <div className="mb-4">
          <p className="text-red-500 text-center">{error}</p>
        </div>
        <div>
          {filteredTickets.map((ticket) => (
            <TicketDisplay
              key={ticket.id}
              id={ticket.id}
              customerName={ticket.customerName}
              issueLogged={ticket.issueLogged}
              dateLogged={new Date(ticket.dateLogged).toLocaleDateString()}
              resolutionStatus={ticket.resolutionStatus}
            >
              {ticket.resolutionStatus.toUpperCase() !== "RESOLVED" ? (
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
                  onClick={() => markTicketComplete(ticket.id)}
                >
                  Mark Resolved
                </button>
              ) : null}
            </TicketDisplay>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatusBoard;
