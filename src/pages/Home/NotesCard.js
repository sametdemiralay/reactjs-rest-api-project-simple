import { makeStyles } from "@material-ui/core/styles";
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  avatar:{
    backgroundColor: (item) => {
      if(item.type === 'Science'){
        return '#7158e2'
      }
      if(item.type === 'Philosophy'){
        return '#1B9CFC'
      }
      if(item.type === 'Literature'){
        return '#A3CB38'
      }
      return '#EA2027'
    }
  },
  gridWrap:{
    marginBottom: '10px',
    padding: '10px'
  },
  more:{
    color: theme.palette.primary.main
  }
}));

const NotesCard = ({item}) => {
  const classes = useStyles(item)

  return (
    <Grid item xs={3} className={classes.gridWrap}>
      <Card elevation={1}>
        <CardHeader
        avatar={
          <Avatar className={classes.avatar}>
            {item.type.slice(0,2).toUpperCase()}
          </Avatar>
        }
          title={item.title}
          subheader={item.author}
        />
        <CardContent>
          <Typography variant="body2">
          {item.summary.slice(0,85)}...
            <Link to={`/detail/${item.id}`} className={classes.more}>Read More</Link>
          </Typography>
          
        </CardContent>
      </Card>
      </Grid>
  )
}

export default NotesCard
