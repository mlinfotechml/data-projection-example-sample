import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container } from "react-bootstrap";
import IdCard from "./pages/IdCard";
import StudentList from "./pages/StudentList";

function App() {
  const [page, setPage] = useState("el");

  return (
    <div>
      <div>
        <div>
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
        </div>
      </div>
      <hr></hr>
      <Container>
        {(() => {
          switch (page) {
            case "el":
              return <IdCard />;
            case "db":
              return <StudentList />;
            default:
              return null;
          }
        })()}
      </Container>
    </div>
  );
}

export default App;
