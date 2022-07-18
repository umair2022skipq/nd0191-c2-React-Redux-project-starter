import { List } from "@mui/material";
import { ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Avatar } from "@mui/material/";
import { useEffect, useState } from "react";
import { _getUsers } from "../data/_DATA";

const LeaderBoard = () => {
  const [users, setUsers] = useState("");
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await _getUsers();
      const data = Object.values(res);
      setUsers([...data]);
    };
    fetchUsers();
  }, []);
  console.log(users);
  return (
    <>
      <h1>Leaderboard</h1>
      {users &&
        users.map((user) => (
          <List key={user.id}>
            <ListItem>
              <ListItemAvatar>
                <Avatar src="https://www.w3schools.com/w3images/avatar2.png" />
              </ListItemAvatar>
              <ListItemText
                primary={`${user.name}`}
                secondary={`Current Score: ${
                  user.questions.length + Object.keys(user.answers).length
                } Asked: ${user.questions.length} Answered: ${
                  Object.keys(user.answers).length
                }`}
              />
            </ListItem>
          </List>
        ))}
    </>
  );
};

export default LeaderBoard;
