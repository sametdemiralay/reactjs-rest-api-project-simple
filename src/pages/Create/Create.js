import { useState } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { makeStyles, FormControlLabel } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

const Create = () => {
  const history = useHistory();
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [summary, setSummary] = useState("");
  const [summaryError, setSummaryError] = useState(false);
  const [author, setAuthor] = useState("");
  const [authorError, setAuthorError] = useState(false);
  const [type, setType] = useState("Comic Book");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setSummaryError(false);
    setAuthorError(false);

    if (title === "") {
      setTitleError(true);
    }
    if (summary === "") {
      setSummaryError(true);
    }
    if (author === "") {
      setAuthorError(true);
    }

    if (title && summary && author) {
      fetch("http://localhost:3400/books", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ author, title, summary, type }),
      }).then(() => history.push("/"));
    }
  };

  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        color="textSecondary"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          className={classes.field}
          label="Book Title"
          variant="outlined"
          color="secondary"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          error={titleError}
          fullWidth
          required
        />
        <TextField
          className={classes.field}
          label="Author"
          variant="outlined"
          color="secondary"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          error={authorError}
          fullWidth
          required
        />
        <TextField
          className={classes.field}
          label="Summary"
          variant="outlined"
          color="secondary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          error={summaryError}
          multiline
          rows={4}
          fullWidth
          required
        />

        <FormControl className={classes.field}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup value={type} onChange={(e) => setType(e.target.value)}>
            <FormControlLabel
              value="Literature"
              control={<Radio />}
              label="Literature"
            />
            <FormControlLabel
              value="Comic Book"
              control={<Radio />}
              label="Comic Book"
            />
            <FormControlLabel
              value="Philosophy"
              control={<Radio />}
              label="Philosophy"
            />
            <FormControlLabel
              value="Science"
              control={<Radio />}
              label="Science"
            />
          </RadioGroup>
        </FormControl>

        <Button
          type="submit"
          color="primary"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Create;
