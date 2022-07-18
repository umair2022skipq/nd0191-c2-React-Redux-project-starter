import { List, ListItem, ListItemText } from "@mui/material";
import { Divider } from "@mui/material/";
import { useSelector } from "react-redux";
import { employeePollSelector } from "../features/employeePoll/employeePollSlice";
import { userSelector } from "../features/userSlice/userSlice";
import { _getQuestions, _getUsers } from "../data/_DATA";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Question from "./Question";

export function CircularIndeterminate() {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
}

const sarahedo = {
  id: "sarahedo",
  password: "password123",
  name: "Sarah Edo",
  avatarURL: "https://www.w3schools.com/w3images/avatar2.png",
  answers: {
    "8xf0y6ziyjabvozdd253nd": "optionOne",
    "6ni6ok3ym7mf1p33lnez": "optionOne",
    am8ehyc8byjqgar0jgpub9: "optionTwo",
    loxhs1bqm25b708cmbf3g: "optionTwo",
  },
  questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
};

const NewQuestions = ({ isLoading }) => {
  const poll = useSelector(employeePollSelector);
  const user = useSelector(userSelector);

  const answeredQuestionIds = Object.keys(sarahedo.answers);
  const newQuestionIds = poll.questions.allIds.filter(
    (id) => !answeredQuestionIds.includes(id)
  );

  const newQuestionsWithAuthors = newQuestionIds.map((id) => {
    const question = poll.questions.byId[id];

    return {
      ...question,
      authorObject: user.users.byId[question.author],
    };
  });

  if (isLoading) {
    return <CircularIndeterminate />;
  }

  return (
    <>
      <List>
        {newQuestionsWithAuthors.length ? (
          newQuestionsWithAuthors.map((question) => (
            <div key={question.id}>
              <Question question={question} />
              <Divider />
            </div>
          ))
        ) : (
          <ListItem>
            <ListItemText primary="There are no questions here..." />
          </ListItem>
        )}
      </List>
    </>
  );
};

export default NewQuestions;
