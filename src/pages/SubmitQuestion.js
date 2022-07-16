import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  RadioGroup,
} from "@mui/material";
import {
  Button,
  Radio,
  Card,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material";
import Typography from "@mui/material/Typography";

const SubmitQuestion = () => {
  return (
    <>
      <Card
        sx={{
          display: "flex",
          width: "100%",
          maxWidth: 500,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 5,
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image="https://www.w3schools.com/w3images/avatar2.png"
            // alt={author.name}
          />
          <p>Poll By: Author name</p>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <form>
              <fieldset style={{ border: 0 }}>
                <FormControl
                  sx={{ m: 3 }}
                  component="fieldset"
                  variant="standard"
                >
                  <FormLabel component="legend">Would you rather...</FormLabel>
                  <RadioGroup aria-label="quiz" name="value">
                    <FormControlLabel
                      value="Anything"
                      control={<Radio />}
                      label="Anything"
                      //disabled={!!existingValue}
                    />
                    <FormControlLabel
                      value="Anything"
                      control={<Radio />}
                      label="Anything"
                      // disabled={!!existingValue}
                    />
                  </RadioGroup>
                  {/* <FormHelperText>
                    {existingValue
                      ? ""
                      : "Stats will appear answer picking an option..."}
                  </FormHelperText> */}
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    // loading={loading}
                    // disabled={!!existingValue}
                  >
                    Submit
                  </Button>
                </FormControl>
              </fieldset>
            </form>
          </CardContent>
        </Box>
      </Card>
    </>
  );
};

export default SubmitQuestion;
