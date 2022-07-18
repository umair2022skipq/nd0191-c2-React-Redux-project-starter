import { ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Avatar } from "@mui/material/";

const Question = ({ question }) => {
  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Avatar src={question.authorObject.avatarURL || ""} />
        </ListItemAvatar>
        <ListItemText
          primary={`Would you rather ${question.optionOne.text} or ${question.optionTwo.text}`}
          secondary={`${question.author} on ${Date(question.timestamp)}`}
        />
      </ListItem>
    </>
  );
};

export default Question;
