import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container } from "react-bootstrap";
import IdCard from "./pages/IdCard";
import StudentList from "./pages/StudentList";
import BillView from "./pages/BillView";

function App() {
  const [page, setPage] = useState("id");

  return (
    <div>
      <div>
        <div>
          <Button
            onClick={() => {
              setPage("id");
            }}
          >
            ID Card
          </Button>
          <Button
            onClick={() => {
              setPage("el");
            }}
          >
            Student List
          </Button>
          <Button
            onClick={() => {
              setPage("bill");
            }}
          >
            Bill View
          </Button>
        </div>
      </div>
      <hr></hr>
      <Container>
        {(() => {
          switch (page) {
            case "id":
              return <IdCard />;
            case "el":
              return <StudentList />;
            case "bill":
              return <BillView />;
            default:
              return null;
          }
        })()}
      </Container>
    </div>
  );
}

export default App;
