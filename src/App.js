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
        <div style={{
          margin:"15px"
        }}>
          <Button
            onClick={() => {
              setPage("sl");
            }}
          >
            Student List
          </Button>
          <Button
            style={{
              marginLeft:"15px"
            }}
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
