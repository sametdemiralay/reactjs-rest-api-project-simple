import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {createMuiTheme, ThemeProvider} from '@material-ui/core'
import orange from '@material-ui/core/colors/orange';
import blueGrey from '@material-ui/core/colors/blueGrey';
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import Create from "./pages/Create/Create";
import Detail from "./pages/Detail/Detail";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[800],
    },
    secondary: {
      main: blueGrey[800],
    },
  },
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/create" component={Create} />
          <Route path="/detail/:id" component={Detail} />
        </Switch>
      </Layout>
    </Router>
    </ThemeProvider>
  );
};

export default App;
