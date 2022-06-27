import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Button, Container } from "react-bootstrap";
// import IdCard from "./pages/IdCard";
// import BillView from "./pages/BillView";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import StudentList from "./pages/StudentList";

function App() {
  const [page, setPage] = useState("el");

  return (
    <div>
      <div>
        <div className="btns">
          <Button
            onClick={() => {
              setPage("el");
            }}
          >
            Student List
          </Button>
          <Button
            onClick={() => {
              setPage("db");
            }}
          >
            Dashboard
          </Button>
          {/* <Button
            onClick={() => {
              setPage("id");
            }}
          >
            ID Card
          </Button> */}
          {/* <Button
            onClick={() => {
              setPage("bill");
            }}
          >
            Bill View
          </Button> */}
        </div>
      </div>
      <hr></hr>
      <Container>
        {(() => {
          switch (page) {
            case "el":
              return <StudentList />;
            case "db":
              return <Dashboard />;
            default:
              return null;
            // case "id":
            //   return <IdCard />;
            // case "bill":
            //   return <BillView />;
          }
        })()}
      </Container>
    </div>
  );
}

export default App;
