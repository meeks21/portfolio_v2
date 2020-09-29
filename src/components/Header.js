import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Typography, Avatar, Grid, Box} from "@material-ui/core"
import avatar from "../logo_circle.png"
import Typed from 'react-typed'

//CSS STYLES
const useStyles = makeStyles(theme=> ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1),
    },
    title: {
        color: "tan",
        marginBottom: "1rem"
    },
    subtitle: {
        color: "tan",
        marginBottom: "2.5rem",
        
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
    },
    paragraph: {
        color: "tan",
        fontSize: "1.3rem",
        margin: "auto"

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
                <Typography className={classes.subtitle} variant="h6">
                    <Typed 
                    strings={["Web Development", "Web Design", "HTML",  "CSS", "JavaScript"]} 
                    typeSpeed={200}
                    backspeed={90}
                    loop
                    />
                </Typography> 
                <Typography className={classes.title} variant="h4">
                    {/* <Typed 
                    strings={["Kemar"]} 
                    typeSpeed={60}
                    /> */}
                    Hi! I'm Kemar Meeks
                </Typography>
                <Typography className={classes.paragraph} variant="p">
                    Front End Web Developer and Designer based in Seattle, WA.
                </Typography>
                          
            </Box>
            
        </div>
    )
}

export default Header
