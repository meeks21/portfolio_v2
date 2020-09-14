import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Typography, Grid, Box, Divider, Button} from '@material-ui/core'
import Navbar from './NavBar'
import usf from "../usf128px.png"
import scc from "../scc2.png"
import google from "../google-logo.png"

const useStyles = makeStyles(theme =>({
    mainContainer: {
        margin: "20px auto",
        width: "60%",
        // background: "red"
    },

    textContainer: {
        padding: "20px", 
        color: "tan"    
    },

    imageStyles: {
        marginLeft: "20px", 
        marginRight: "20px",
        display: "block" 
    }

}))

const Education = () => {

const classes = useStyles()

    return (
        <div>
            <Navbar /> 
            <Box className={classes.mainContainer}>                    
                <Grid container spacing={3} direction="column" alignItems="center"> 
                    <Grid item xs={12} >
                        <Typography variant="h2" style={{
                            color: "tan",
                            marginTop: "40px",
                            marginBottom: "60px",
                            fontWeight: "100"    
                            }}
                        >
                        Education
                        </Typography>
                    </Grid>
                    <Divider />                      
                    <Grid item xs={12} container direction="row">
                        <Grid item justify="flex-start">
                            <Button href="https://it.seattlecentral.edu/programs/web-development" target="_blank">
                            <img 
                                src={scc} 
                                alt="scc" 
                                className={classes.imageStyles}
                            />
                            </Button>
                        </Grid>   
                        <Grid item justify="center">
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
                    <Grid item xs={12} container justify="flex-start">
                        <Grid item>
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
                        <Grid item justify="center">
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
                    <Grid item xs={12} container>
                        <Grid item justify="flex-start">
                            <Button href="https://www.usf.edu/" target="_blank">
                            <img 
                                src={usf} 
                                alt="usf" 
                                className={classes.imageStyles}
                            />
                            </Button>
                        </Grid>   
                        <Grid item justify="center">
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
            </Box>                         
        </div>
    )
}

export default Education
