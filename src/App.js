import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container } from "react-bootstrap";
import StudentList from "./pages/StudentList";
import Dashboard from "./pages/Dashboard";

function App() {
  const [page, setPage] = useState("sl");

  return (
    <div>
      <div>
        <div>
          <Button
            onClick={() => {
              setPage("sl");
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
        </div>
      </div>
      <hr></hr>
      <Container>
        {(() => {
          switch (page) {
            case "sl":
              return <StudentList />;
            case "db":
              return <Dashboard />;
            default:
              return null;
          }
        })()}
      </Container>
    </div>
  );
}

export default App;
