import Layout from "./components/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewQuestions from "./pages/NewQuestions";
import LeaderBoard from "./pages/LeaderBoard";
import AddQuestions from "./pages/AddQuestions";

const App = () => {
  return (
    <>
      <Layout />
      <Router>
        <Routes>
          <Route path="/" element={<NewQuestions />}></Route>
          <Route path="/leaderboard" element={<LeaderBoard />}></Route>
          <Route path="/add-question" element={<AddQuestions />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
