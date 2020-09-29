import React from 'react'
import {makeStyles} from "@material-ui/core/styles"
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from "@material-ui/core"
import NavBar from './NavBar'
import project1 from '../images/html-css-javascript-lg.jpg'
import project2 from '../images/javascript-fullstack.jpg'
import project3 from '../images/react-redux.jpg'
import project4 from '../images/mern-stack.jpg'

const useStyles = makeStyles({

    mainContainer: {
        
        height: "100%"
    },

    cardContainer: {
        maxWidth: 345,
        margin: "5rem auto"
    }
});

const Projects = () => {
    const classes = useStyles()
    return (
        <div>
            <Box component="div" className={classes.mainContainer}>
                <NavBar />
                <Grid container justify="center">
                    {/* Project 1 */}
                    <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Project 1"
                                height="140"
                                image={project1}
                                >

                                </CardMedia>
                                <CardContent>
                                    <Typography gutterBottom variant="h5">
                                    Project 1
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="P">
                                    Responsive project built using HTML5, modern CSS3 techniques, and a touch of JavaScript. Tools included VSCode, Git, and Chrome Dev Tools.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button 
                                href="https://github.com/meeks21/Omni-template-site" 
                                target="_blank" 
                                size="small" 
                                color="primary"
                                >
                                    Share
                                </Button>
                                <Button 
                                href="https://meeks21.github.io/Omni-template-site/" 
                                target="_blank" 
                                size="small" 
                                color="primary"
                                >
                                    Live Demo
                                </Button>
                            </CardActions>                                
                        </Card>   
                    </Grid>
                    {/* Project 2 */}
                    <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Project 2"
                                height="140"
                                image={project2}
                                >

                                </CardMedia>
                                <CardContent>
                                    <Typography gutterBottom variant="h5">
                                    Coming Soon!
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="P">
                                    Phasellus feugiat leo eget suscipit efficitur. Morbi vulputate tellus porta, sagittis lacus at, efficitur dui. Morbi vel leo sed quam dapibus volutpat. Proin urna nibh, euismod quis augue id, auctor pellentesque ipsum. Cras ut scelerisque lorem. Aliquam maximus neque est, et dapibus augue ullamcorper sit amet. Donec dapibus velit ut lectus fringilla vehicula.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Live Demo
                                </Button>
                            </CardActions>                                
                        </Card>   
                    </Grid>
                    {/* Project 3 */}
                    <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Project 3"
                                height="140"
                                image={project3}
                                >

                                </CardMedia>
                                <CardContent>
                                    <Typography gutterBottom variant="h5">
                                    Coming Soon!
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="P">
                                    Phasellus feugiat leo eget suscipit efficitur. Morbi vulputate tellus porta, sagittis lacus at, efficitur dui. Morbi vel leo sed quam dapibus volutpat. Proin urna nibh, euismod quis augue id, auctor pellentesque ipsum. Cras ut scelerisque lorem. Aliquam maximus neque est, et dapibus augue ullamcorper sit amet. Donec dapibus velit ut lectus fringilla vehicula.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Live Demo
                                </Button>
                            </CardActions>                                
                        </Card>   
                    </Grid>
                    {/* Project 4 */}
                    <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Project 4"
                                height="140"
                                image={project4}
                                >

                                </CardMedia>
                                <CardContent>
                                    <Typography gutterBottom variant="h5">
                                    Coming Soon!
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="P">
                                    Phasellus feugiat leo eget suscipit efficitur. Morbi vulputate tellus porta, sagittis lacus at, efficitur dui. Morbi vel leo sed quam dapibus volutpat. Proin urna nibh, euismod quis augue id, auctor pellentesque ipsum. Cras ut scelerisque lorem. Aliquam maximus neque est, et dapibus augue ullamcorper sit amet. Donec dapibus velit ut lectus fringilla vehicula.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Live Demo
                                </Button>
                            </CardActions>                                
                        </Card>   
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Projects
