import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";

const styles = {
  boxSx: {
    width: 500,
    maxWidth: "100%",
    margin: "15px auto",
  },
  buttonSx: { mt: 1, mr: 1 },
};

const AddQuestion = () => {
  return (
    <>
      <Typography sx={styles.boxSx} variant="h2" component="div" gutterBottom>
        Add Question
      </Typography>
      <Typography
        sx={styles.boxSx}
        variant="body2"
        component="div"
        gutterBottom
      >
        Would You Rather
      </Typography>
      <Box component="form" noValidate autoComplete="off">
        <Box sx={styles.boxSx}>
          <TextField fullWidth label="Option One" name="optionOneText" />
        </Box>

        <Box sx={styles.boxSx}>
          <TextField fullWidth label="Option Two" name="optionTwoText" />
        </Box>

        <Box sx={styles.boxSx}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default AddQuestion;
