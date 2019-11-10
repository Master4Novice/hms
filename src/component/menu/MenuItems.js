import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import IconList from '../icons/IconList';

const useStyles = makeStyles(theme => ({
    nested: {
      paddingLeft: theme.spacing(4)
    },
    list: {
      width: 250
    }
}));

export default function MenuItems() {
    const classes = useStyles();

    const [openMaster, setOpenMaster] = useState(false);
    const [openUsers, setOpenUsers] = useState(false);
    const [openDoctor, setOpenDoctor] = useState(false);
    const [openPatient, setOpenPatient] = useState(false);

    const handleClickMaster = () => {
        setOpenMaster(!openMaster);
    };

    const handleClickUsers = () => {
        setOpenUsers(!openUsers);
    };
    
    const handleClickDoctor = () => {
        setOpenDoctor(!openDoctor);
    };

    const handleClickPatient = () => {
        setOpenPatient(!openPatient);
    };

    return (
        <div className={classes.list} role="presentation">
            <List>
                <ListItem button>
                    <ListItemIcon>
                      <IconList index={0} />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button onClick={handleClickMaster}>
                    <ListItemIcon>
                      <IconList index={20} />
                    </ListItemIcon>
                    <ListItemText primary="Master" />
                    {openMaster ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openMaster} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <IconList index={4} />
                            </ListItemIcon>
                            <ListItemText primary="Ward" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <IconList index={3} />
                            </ListItemIcon>
                            <ListItemText primary="Room" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <IconList index={5} />
                            </ListItemIcon>
                            <ListItemText primary="Nurse/Wardboy" />
                        </ListItem>
                    </List>
                </Collapse>
                <ListItem button onClick={handleClickUsers}>
                    <ListItemIcon>
                      <IconList index={2} />
                    </ListItemIcon>
                    <ListItemText primary="Users" />
                    {openUsers ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openUsers} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <IconList index={6} />
                            </ListItemIcon>
                            <ListItemText primary="Registration" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <IconList index={7} />
                            </ListItemIcon>
                            <ListItemText primary="Change Password" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                               <IconList index={8} />
                            </ListItemIcon>
                            <ListItemText primary="Login Details" />
                        </ListItem>
                    </List>
                </Collapse>
                <ListItem button onClick={handleClickDoctor}>
                    <ListItemIcon>
                        <IconList index={20} />
                    </ListItemIcon>
                    <ListItemText primary="Doctor" />
                    {openDoctor ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openDoctor} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <IconList index={9} />
                            </ListItemIcon>
                            <ListItemText primary="Profile Entry" />
                        </ListItem>
                    </List>
                </Collapse>
                <ListItem button onClick={handleClickPatient}>
                    <ListItemIcon>
                        <IconList index={10} />
                    </ListItemIcon>
                    <ListItemText primary="Patient" />
                    {openPatient ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openPatient} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <IconList index={6} />
                            </ListItemIcon>
                            <ListItemText primary="Registration" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <IconList index={13} /> 
                            </ListItemIcon>
                            <ListItemText primary="Services" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <IconList index={11} />
                            </ListItemIcon>
                            <ListItemText primary="Admit" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <IconList index={12} /> 
                            </ListItemIcon>
                            <ListItemText primary="Discharge" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <IconList index={14} /> 
                            </ListItemIcon>
                            <ListItemText primary="Billing" />
                        </ListItem>
                    </List>
                </Collapse>
                <ListItem button>
                    <ListItemIcon>
                        <IconList index={15} /> 
                    </ListItemIcon>
                    <ListItemText primary="Help" />
                </ListItem>
            </List>
        </div>
    );
}