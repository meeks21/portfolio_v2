import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {typography, Box, Typography} from '@material-ui/core'
import Navbar from './NavBar'
import { mergeClasses } from '@material-ui/styles'


const useStyles = makeStyles({
    mainContainer: {
        background: "#233"
    }
})

const Resume = () => {
    return (
        <div>
            <Navbar />
            <Box component="header" className={mergeClasses.mainContainer}>
                <Typography variant="h4" align="center">
                    Working experience
                </Typography>
                <Box component="div">
                    <Typography variant="h2">
                        2019
                    </Typography>
                </Box>
            </Box>
        </div>
    )
}

export default Resume
