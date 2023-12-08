
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import EditBook from "./components/EditBook";
import ShowBooks from "./components/ShowBooks";
import CreateBook from "./components/CreateBook";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL || "http://localhost:3001";

function App() {


  return (
    <div className="BookList">
      <Routes>
        <Route path='/' element={<ShowBooks />} />
        <Route path='/create' element={<CreateBook />} />
        <Route path='/:id' element={<EditBook />} />
      </Routes>
    </div>
  );
}

export default App;
