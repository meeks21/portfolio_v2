import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import MobileRightMenuSlider from "@material-ui/core/Drawer";
import Footer from "./Footer"
import {
    AppBar,
    Toolbar,
    ListItem,
    ListItemIcon,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box
} from '@material-ui/core';

import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail,
    School,
    Menu
} from '@material-ui/icons';

import avatar from "../logo_circle.png";

//CSS STYLES 
const useStyles = makeStyles(theme =>({
    menuSliderContainer: {
        width: 250,
        background: "#00181F",
        height: "100%"
    },

    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem: {
        color: "tan",
    }
}));

const menuItems = [

    {
        listIcon: <Home/>,
        listText: "Home",
        listPath: "/"
    },
    // {
    //     listIcon: <AssignmentInd/>,
    //     listText: "Resume",
    //     listPath: "/resume"
    // },
    {
        listIcon: <School/>,
        listText: "About",
        listPath: "/about"
    },
    {
        listIcon: <Apps/>,
        listText: "Projects",
        listPath: "/projects"
    },
    {
        listIcon: <ContactMail/>,
        listText: "Contact",
        listPath: "/contact"
    }
    
]


const NavBar = () => {

    const [state, setState] = useState({
        left: false
    });

    const toggleSlider = (slider, open) => () => {
        setState({...state, [slider]: open });
    };

    const classes = useStyles()

    const sideList = slider => (
        <Box 
        className={classes.menuSliderContainer} 
        component='div'
        onClick={toggleSlider(slider.false)}
        >
            <Avatar className={classes.avatar} src={avatar} alt="kemar"/>
            <Divider />
            <List>
                {menuItems.map((lsItem, key)=> (                    
                    <ListItem button key={key} component={Link} to={lsItem.listPath}>
                        <ListItemIcon className={classes.listItem}>{lsItem.listIcon}</ListItemIcon>
                        <ListItemText className={classes.listItem} primary={lsItem.listText}/>
                    </ListItem>
                ))}
            </List>
        </Box>
    )

    return (
        
        <div>       
            <Box component="nav">
                <AppBar position="static" style={{background: '#222'}}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider("left", true)}>
                            <Menu style={{color: "#277CA0"}}/>
                        </IconButton>
                        <Typography variant="h5" style={{color: "tan"}}>
                            Portfolio
                        </Typography>
                        <MobileRightMenuSlider 
                        anchor="left" 
                        open={state.left}
                        onClose={toggleSlider("left", false)}
                        >
                            {sideList("right")}
                            <Footer />
                        </MobileRightMenuSlider>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>    
    )
}

export default NavBar
