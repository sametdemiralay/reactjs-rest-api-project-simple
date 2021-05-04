import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import NotesCard from "./NotesCard";

const useStyles = makeStyles(() => ({
  searchArea: {
    marginBottom: "20px",
  }
}));

const Home = () => {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const classes = useStyles();

  // fetch data
  const renderPosts = async (term) => {
    let uri = "http://localhost:3400/books";
    if(term){
      uri += `?q=${term}`
    }

    const res = await fetch(uri);
    const posts = await res.json();
    setData(posts);
  };
 
  useEffect(() => {
    renderPosts(searchText);
  }, [searchText]);

  return (
    <Grid container>
      <Grid item xs={12} className={classes.searchArea}>
        <TextField
        color="primary"
          id="outlined-basic"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          label="Search"
          variant="outlined"
          fullWidth
        />
      </Grid>
      {data.length > 0 ? (
        data.map((item, index) => (
          <NotesCard item={item} key={index} />
        ))
      ):(
        <p>data yok</p>
      )}
    </Grid>
  );
};

export default Home;
