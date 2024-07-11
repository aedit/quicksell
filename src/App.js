import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import KanbanBoard from "./components/KanbanBoard";
import { statuses, priorities } from "./config/variables";
import groupByKey from "./utilities/groupByKey";

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupBy, setGroupBy] = useState(
    () => localStorage.getItem("groupBy") || "status"
  );
  const [sortBy, setSortBy] = useState(
    () => localStorage.getItem("sortBy") || "priority"
  );

  const [dataToShow, setDataToShow] = useState({});

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.quicksell.co/v1/internal/frontend-assignment"
      );
      const data = await response.json();
      setTickets(data.tickets);
      setUsers(data.users);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const dataToRender = groupByKey(tickets, groupBy, sortBy);
    setDataToShow(dataToRender);
  }, [tickets, groupBy, sortBy]);

  const onGroupingChange = (value) => {
    setGroupBy(value);
    localStorage.setItem("groupBy", value);
  };

  const onOrderingChange = (value) => {
    setSortBy(value);
    localStorage.setItem("sortBy", value);
  };

  const getBoardHeaders = () => {
    if (groupBy === "priority") return priorities;
    if (groupBy === "userId") return users;
    return statuses;
  };

  return (
    <div className="App">
      <Header
        onGroupingChange={onGroupingChange}
        onOrderingChange={onOrderingChange}
        groupBy={groupBy}
        sortBy={sortBy}
      />
      <KanbanBoard
        type={groupBy}
        headers={getBoardHeaders()}
        dataToShow={dataToShow}
        usersData={users}
      />
    </div>
  );
}

export default App;
