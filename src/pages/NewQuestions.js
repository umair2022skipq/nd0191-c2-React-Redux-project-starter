import { List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Divider, Avatar } from "@mui/material/";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { _getQuestions } from "../data/_DATA";

const NewQuestions = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      const res = await _getQuestions();
      const data = Object.values(res);
      setQuestions([...data]);
    };
    fetchQuestions();
  }, []);

  return (
    <>
      {questions && (
        <List>
          {questions.map((item) => (
            <div key={item.id}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar src="https://www.w3schools.com/w3images/avatar2.png" />
                </ListItemAvatar>
                <ListItemText
                  primary={`Would you rather ${item.optionOne.text} or ${item.optionTwo.text}`}
                  secondary={`${item.author} on ${Date(item.timestamp)}`}
                />
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
      )}
    </>
  );
};

export default NewQuestions;
