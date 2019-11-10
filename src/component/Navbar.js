import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  }
}));

export default function Navbar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };
  
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <ListItem button>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
        </ListItem>
        <ListItem button onClick={handleClick}>
            <ListItemIcon>
            <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Master" />
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="Ward" />
            </ListItem>
            <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="Room" />
            </ListItem>
            <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="Nurse/Wardboy" />
            </ListItem>
            </List>
        </Collapse>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={toggleDrawer('left', true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Hospital Management System
          </Typography>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        open={state.left}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        {sideList('left')}
      </SwipeableDrawer>
    </div>
  );
}
// let Navbar = (props) => (
//     <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
//          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//          </button>
//          <a className="navbar-brand" to="/" onClick={props.navigateTo.bind(this, '/')}>Hospital Management System</a>
//          <div className="collapse navbar-collapse" id="navbarNavDropdown">
//          <ul className="navbar-nav">
//             <li className="nav-item active">
//                 <a className="nav-link" to="/" onClick={props.navigateTo.bind(this, '/')}>Home</a>
//             </li>
//             <li className="nav-item dropdown">
//                 <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                   Master
//                 </a>
//                 <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
//                   <a className="dropdown-item" to="/master/ward" onClick={props.navigateTo.bind(this, '/master/ward')}>Ward</a>
//                   <a className="dropdown-item" to="/master/room" onClick={props.navigateTo.bind(this, '/master/room')}>Room</a>
//                   <a className="dropdown-item" to="/master/nurse" onClick={props.navigateTo.bind(this, '/master/nurse-wardboy')}>Nurse/Wardboy</a>
//                 </div>
//             </li>
//             <li className="nav-item dropdown">
//                 <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                   Users
//                 </a>
//                 <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
//                   <a className="dropdown-item" to="/users/registration" onClick={props.navigateTo.bind(this, '/users/registration')}>Registration</a>
//                   <a className="dropdown-item" to="/users/chngpass" onClick={props.navigateTo.bind(this, '/users/chngpass')}>Change Password</a>
//                   <a className="dropdown-item" to="/users/logindetails" onClick={props.navigateTo.bind(this, '/users/logindetails')}>Login Details</a>
//                 </div>
//             </li>
//             <li className="nav-item dropdown">
//                 <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                   Doctor
//                 </a>
//                 <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
//                   <a className="dropdown-item" to="/doctor/profile" onClick={props.navigateTo.bind(this, '/doctor/profile')}>Profile Entry</a>
//                 </div>
//             </li>
//             <li className="nav-item dropdown">
//                 <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                   Patient
//                 </a>
//                 <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
//                   <a className="dropdown-item" to="/patient/registration" onClick={props.navigateTo.bind(this, '/patient/registration')}>Registration</a>
//                   <a className="dropdown-item" to="/patient/services" onClick={props.navigateTo.bind(this, '/patient/services')}>Services</a>
//                   <a className="dropdown-item" to="/patient/admit" onClick={props.navigateTo.bind(this, '/patient/admit')}>Admit</a>
//                   <a className="dropdown-item" to="/patient/discharge" onClick={props.navigateTo.bind(this, '/patient/discharge')}>Discharge</a>
//                   <a className="dropdown-item" to="/patient/billing" onClick={props.navigateTo.bind(this, '/patient/billing')}>Billing</a>
//                 </div>
//             </li>
//             <li className="nav-item">
//                 <a className="nav-link" to="/help" onClick={props.navigateTo.bind(this, '/help')}>Help</a>
//             </li>
//           </ul>
//           </div>
//     </nav>
// )

// const state = (state, ownProps = {}) => {
//     return {
//         location: state.location
//     }
// }

// const mapDispatchToProps = (dispatch, ownProps) => ({
//     navigateTo: (location) => {
//         dispatch(push(location));
//     }
// });

// export default connect(state, mapDispatchToProps)(Navbar);