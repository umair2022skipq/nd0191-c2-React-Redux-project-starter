import Layout from "./components/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewQuestions from "./pages/NewQuestions";
import Leaderboard from "./pages/Leaderboard";
import AnswersPage from "./pages/AnswersPage";

const App = () => {
  return (
    <>
      <Layout />
      <Router>
        <Routes>
          <Route path="/new-questions" element={<NewQuestions />}></Route>
          <Route path="/leaderboard" element={<Leaderboard />}></Route>
          <Route path="/answered" element={<AnswersPage />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
