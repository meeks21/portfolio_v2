import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Typography, Avatar, Grid, Box} from "@material-ui/core"
import avatar from "../KM-logo.png"
import Typed from 'react-typed'

//CSS STYLES
const useStyles = makeStyles(theme=> ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1),
    },
    title: {
        color: "tomato"
    },
    subtitle: {
        color: "tan",
        marginBottom: "3rem"
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
    }

}))

const Header = () => {
    const classes = useStyles();
    return (
        <div>
            <Box className={classes.typedContainer} >
                <Grid container justify="center">
                    <Avatar className={classes.avatar} src={avatar} alt="Kemar Meeks"/>
                </Grid>
                
                <Typography className={classes.title} variant="h4">
                    <Typed 
                    strings={["Kemar"]} 
                    typeSpeed={40}
                    />
                </Typography>
                <br/>
                <Typography className={classes.subtitle} variant="h5">
                    <Typed 
                    strings={["Web Development", "Web Design", "MERN Stack"]} 
                    typeSpeed={40}
                    backspeed={60}
                    loop
                    />
                </Typography>                
            </Box>
            
        </div>
    )
}

export default Header
