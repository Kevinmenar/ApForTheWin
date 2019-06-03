import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Add from '@material-ui/icons/Add';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import Chart from './Chart/Chart'
import TopMedicamentos from './Chart/TopMedicamentos'
import AdminFarmacia from './AdminFarm'
import EscogerFarmacia from './EscogerFarmacia'
import VisualizarComentarios from './VisualizarComentarios'
import {auth} from './Firebase/firebase'
import FarmController from './FarmaciController'
import RealizarComentarios from './RealizarComentarios'

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(-1);
  const [loginState, setloginState] = React.useState(false);
  const [user, setUser] = React.useState('');
  const [pw, setPw] = React.useState('');

  function handleDrawerOpen() {
    if (auth.currentUser!=null) {
      setOpen(true);
    }
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  function handleListItemClick(event, index) {
    console.log("The current index is: ", index );
    setSelectedIndex(index);
  }

  function handleChangeUser(event) {
    setUser(event.target.value);
  }

  function handleChangePw(event) {
    setPw(event.target.value);
  }

  function getCurrentView () {
    if ( selectedIndex === 1) {
      return (
        <Chart />
      );
    } else if(selectedIndex === 2) {
      return(
        <EscogerFarmacia />
      );
    } else if(selectedIndex === 3) {
      return <TopMedicamentos/>
    } else if (selectedIndex === 0) {
      return (
        <RealizarComentarios/>
      );
    } else if (selectedIndex === 4) {
      return (
        <VisualizarComentarios/>
      );
    }else {
      return(null);
    }
  }

  function displayLogin() {
    if (!loginState) {
      return (
        <div> 
          <Typography variant="h6" noWrap>
            Acmecil
          </Typography>
          <div className={classes.search}>
            <InputBase
              placeholder="User"
              onChange={(e) => {handleChangeUser(e)}}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
            <InputBase
              placeholder="Password"
              type="password"
              onChange={(e) => {handleChangePw(e)}}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
            <Button variant="contained" size="small" color="primary" className={classes.margin} onClick={event => clickLoginEvent(event)}>
              Summit
            </Button>
          </div>
        </div>
        );
    } else {
        return (
          <Typography variant="h6" noWrap>
            Bienvenido a Acmesil
          </Typography>
        );
    }
  }

  function clickLoginEvent (e) {

    auth.signInWithEmailAndPassword(user, pw)
      .then(() => {
        console.log("Login Succes")
        setloginState(true);
        setUser('');
        setPw('');
      })
      .catch(() => {
        console.log('Authentication failed.');
      });
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          { displayLogin() }
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Realizar Comentario', 'Usuarios más activos', 'Ver Farmacias','Medicamentos más consultados', 'Visualizar comentarios'].map((text, index) => (
            <ListItem
              button key={text}
              selected={selectedIndex === index}
              onClick={event => handleListItemClick(event, index)}
            >
              <ListItemIcon>{ <Add />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {getCurrentView()}
      </main>
    </div>
  );
}

export default App;
