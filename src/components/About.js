import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Typography, Grid, Box, Divider, Button} from '@material-ui/core'
import Navbar from './NavBar'
import usf from "../usf128px.png"
import scc from "../scc2.png"
import google from "../google-logo.png"
import javascript from "../javascript-logo2.png"
import html from "../HTML5_2.png"
import css3 from "../css3.png"
import linux from "../linux.png"
import git from "../git.png"
import mysql from "../mysql2.png"
import nodejs from "../node-js.png"
import npm from "../npmlogo.png"

const useStyles = makeStyles(theme =>({
    mainContainer: {
        margin: "4rem auto",
        width: "70%",
        // background: "red"
    },

    textContainer: {
        padding: "20px", 
        color: "tan"    
    },

    imageStyles: {
        marginLeft: "20px", 
        marginRight: "20px",
        display: "block",
        
    },
    skillsContainer: {
        width: "100%",
        marginLeft: "20px",
    },

    boxes: {
        // background: "red",
        // height: "3rem",
        marginTop: "3rem",       
    },
    boxCaption: {
        color: "tan",
        fontSize: "1rem",
        marginTop: "1.5rem"
    }

}))

const About = () => {

const classes = useStyles()

    return (
        <div>
            <Navbar /> 
            <Box className={classes.mainContainer}>                    
                <Grid container spacing={3} direction="column"> 
                    <Grid item xs={12} >
                        <Typography 
                        variant="h3"
                        
                        style={{
                            color: "tan",
                            marginTop: "3rem",
                            marginBottom: "6rem",
                            textAlign: "center",
                            fontWeightLight: "100"  
                            }}
                        >
                        Education
                        </Typography>
                    </Grid>
                                         
                    <Grid item  container direction="row">
                        <Grid item xs={12} sm={3} justify="flex-start">
                            <Button href="https://it.seattlecentral.edu/programs/web-development" target="_blank">
                            <img 
                                src={scc} 
                                alt="scc" 
                                className={classes.imageStyles}
                            />
                            </Button>
                        </Grid>   
                        <Grid item xs={12} sm={9} justify="center">
                            <Box component="div" className={classes.textContainer}>
                                <Typography variant="h5">
                                Seattle Central College
                                </Typography>
                                <Typography variant="h6" >
                                Associate's Degree, Web Development and Mobile App Development
                                </Typography>
                                <Typography >
                                January 2020 - PRESENT
                                </Typography>
                            </Box>
                        </Grid>                                     
                    </Grid>
                    <Grid item  container direction="row" >
                        <Grid item item xs={12} sm={3} justify="flex-start">
                            <Button 
                            href="https://grow.google/programs/it-support/" 
                            target="_blank"
                            >
                            <img 
                                src={google} 
                                alt="google" 
                                className={classes.imageStyles}
                            />
                            </Button>
                        </Grid>   
                        <Grid item xs={12} sm={9} justify="center">
                            <Box component="div" className={classes.textContainer}>
                                <Typography variant="h5">
                                Google IT Support Professional Certificate
                                </Typography>
                                <Typography variant="h6">
                                Online Certificate
                                </Typography>
                                <Typography >
                                Completion February 2019
                                </Typography>
                            </Box>
                        </Grid>                                     
                    </Grid>
                    <Grid item container>
                        <Grid item xs={12} sm={3} justify="flex-start">
                            <Button href="https://www.usf.edu/" target="_blank">
                            <img 
                                src={usf} 
                                alt="usf" 
                                className={classes.imageStyles}
                            />
                            </Button>
                        </Grid>   
                        <Grid item xs={12} sm={9} justify="center">
                            <Box component="div" className={classes.textContainer}>
                                <Typography variant="h5">
                                University of South Florida
                                </Typography>
                                <Typography variant="h6">
                                Bachelor's Degree, Political Science and Government
                                </Typography>
                                <Typography >
                                Graduation: 2014
                                </Typography>
                            </Box>
                        </Grid>                                     
                    </Grid>
                </Grid>
                <Divider variant="middle" /> 

                <Grid container item spacing={3} className={classes.skillsContainer} direction="column" alignItems="center">
                    <Grid item xs={12} direction="row">
                        <Typography variant="h3" style={{
                            color: "tan",
                            marginTop: "8rem",
                            marginBottom: "6rem",
                            fontWeight: "100",
                            textAlign: "center"    
                            }}
                        >
                        Experience with:
                        </Typography>
                    </Grid>
                    {/* First Row */}
                    <Grid item container spacing={3} direction="row" justify="space-evenly" >
                        <Grid 
                        item xs={12} sm={6} md={6} lg={3}
                        className={classes.boxes}
                        >
                            <img src={html} alt="html_logo"/>
                            <Typography className={classes.boxCaption}>HTML5</Typography>
                        </Grid>
                        <Grid 
                        item xs={12} sm={6} md={6} lg={3} 
                        className={classes.boxes}
                        >
                            <img src={css3} alt="css3_logo"/>
                            <Typography className={classes.boxCaption}>CSS3</Typography>
                        </Grid>
                        <Grid 
                        item xs={12} sm={6} md={6} lg={3} 
                        className={classes.boxes}
                        >
                            <img src={javascript} alt="js_logo"/>
                            <Typography className={classes.boxCaption}>JavaScript</Typography>
                        </Grid>
                        <Grid 
                        item xs={12} sm={6} md={6} lg={3} 
                        className={classes.boxes}
                        >
                            <img src={linux} alt="linux_logo"/>
                            <Typography className={classes.boxCaption}>Linux</Typography>
                        </Grid>
                    </Grid>  
                    {/* First Two */}

                    <Grid item container spacing={3} direction="row" justify="space-evenly">
                        <Grid 
                        item xs={12} sm={6} md={6} lg={3} 
                        className={classes.boxes}
                        >
                            <img src={git} alt="git_logo"/>
                            <Typography className={classes.boxCaption}>Git</Typography>
                        </Grid>
                        <Grid 
                        item xs={12} sm={6} md={6} lg={3} 
                        className={classes.boxes}
                        >
                            <img src={mysql} alt="mysql_logo"/>
                            <Typography className={classes.boxCaption}>MySQL</Typography>
                        </Grid>
                        <Grid 
                        item xs={12} sm={6} md={6} lg={3} 
                        className={classes.boxes}
                        >
                            <img src={nodejs} alt="nodejs_logo"/>
                            <Typography className={classes.boxCaption}>Node.js</Typography>
                        </Grid>
                        <Grid 
                        item xs={12} sm={6} md={6} lg={3} 
                        className={classes.boxes}
                        >
                            <img src={npm} alt="npm_logo"/>
                            <Typography className={classes.boxCaption}>Npm</Typography>
                        </Grid>
                    </Grid>   
                </Grid> 
            </Box>                         
        </div>
    )
}

export default About
