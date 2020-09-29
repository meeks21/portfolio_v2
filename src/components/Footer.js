import React from 'react'
import {makeStyles} from "@material-ui/core"
import {BottomNavigation, BottomNavigationAction} from "@material-ui/core"
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles({
    root: {
            "& .MuiBottomNavigationAction-root": {
            minWidth: 0,
            maxWidth: 250,
        },
        "& .MuiSvgIcon-root": {
            fill: "tan",
            "&:hover": {
                fill: "tomato",
                fontSize: "2.0rem"
            },
        },
    },
})

const Footer = () => {

    const classes = useStyles()

    return (
        <BottomNavigation width="auto" style={{background: "#222"}}>
            <BottomNavigationAction
            className={classes.root}
            style={{padding: 0}}
            icon={<GitHubIcon/>}
            href="https://github.com/meeks21"
            target="_blank"
            />

            <BottomNavigationAction
            className={classes.root} 
            style={{padding: 0}}
            icon={<LinkedInIcon/>}
            href="https://www.linkedin.com/in/kemar-meeks/"
            target="_blank"
            
            />
            <BottomNavigationAction
            className={classes.root} 
            style={{padding: 0}}
            icon={<Instagram/>}
            href="https://www.instagram.com/meeksimillion/"
            target="_blank"
            
            />
            {/* <BottomNavigationAction
            className={classes.root} 
            style={{padding: 0}}
            icon={<Facebook/>}
            href="https://www.facebook.com/anthony.meeks1/"
            target="_blank"
            />  */}
        </BottomNavigation>
    )
}

export default Footer
