import React from 'react'
import {makeStyles, withStyles} from '@material-ui/core/styles'
import { useForm } from 'react-hook-form'
import {TextField, Typography, Button, Grid, Box} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'
import NavBar from './NavBar'

const useStyles = makeStyles((theme)=>({
    form: {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute",
        padding: "2rem",
        borderRadius: "25px"
    },
    button:{
        marginTop: "1rem",
        color: "tomato",
        borderColor: "tomato",
    },

}));

const InputField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "tomato"
        },
        "& label": {
            color: "tan"
        },
       
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "tan"
            },
            "&:hover fieldset": {
                borderColor: "tan"
            },
            "&.Mui-focused fieldset": {
                borderColor: "tan"
            }
        }
    }
})(TextField);

const Contact = () => {

const {register, handleSubmit, errors} = useForm()

const classes = useStyles()

const onSubmit = (data) => {
    console.log(data)
}
    return (
        <div>
            <Box components="div" >
                <NavBar />
                <Grid 
                container 
                justify="center"
                >
                    <form
                    className={classes.form} 
                    style={{background: "#233"}}
                    onSubmit={handleSubmit(onSubmit)}
                    >
                        {/* Title */}
                        <Typography 
                        variant="h5" 
                        style={{
                            color: "tan", 
                            textAlign: "center",
                            textTransform: "uppercase"
                            }}
                        >
                        Let's Talk
                        </Typography>

                        {/* Name input field */}
                        <InputField 
                        fullWidth={true}
                        label="Name"
                        type="text"
                        name="name"
                        variant="outlined"
                        inputProps={{style:{color:"white"}}}
                        margin="dense"
                        size="small"
                        inputRef={register({required: true, minLength: 2})}
                        />

                        {/* error messages using react hook form */}
                        {errors.name && errors.name.type ==="required" && ( 
                        <p>Name is required</p>
                        )}
                        {errors.name && errors.name.type ==="minLength" && ( 
                        <p>Name length is too short</p>
                        )}
                        <br />

                        {/* Email input field */}
                        <InputField 
                        fullWidth={true}
                        label="Email"
                        type="email"
                        name="email"
                        variant="outlined"
                        inputProps={{style:{color:"white"}}}
                        margin="dense"
                        size="medium"
                        inputRef={register({required: true, minLength: 9})}
                        />
                        {/* error messages using react hook form */}
                        {errors.email && errors.email.type ==="required" && ( 
                        <p>Name is required</p>
                        )}
                        <br />

                        {/* Company input field */}
                        <InputField 
                        fullWidth={true}
                        label="Company"
                        type="text"
                        name="company"
                        variant="outlined"
                        inputProps={{style:{color:"white"}}}
                        margin="dense"
                        size="medium"
                        inputRef={register}
                        />
                        <br />
                        {/* Questions input field */}
                        <InputField 
                        fullWidth={true}
                        label="How can I help you?"
                        type="text"
                        name="questions"
                        variant="outlined"
                        inputProps={{style:{color:"white"}}}
                        margin="dense"
                        size="medium"
                        multiline
                        rowsMax={4}
                        rows={4}
                        inputRef={register({required: true, minLength: 16})}
                       
                        />
                        {/* error messages using react hook form */}
                        {errors.questions && errors.questions.type ==="required" && ( 
                        <p>Please provide a question or a comment.</p>
                        )}
                        {errors.questions && errors.questions.type ==="minLength" && ( 
                        <p>Message length is too short.</p>
                        )}
                        <br />
                        <Button 
                        variant="outlined" 
                        fullWidth={true} 
                        endIcon={<SendIcon />}
                        className={classes.button}
                        type="submit"
                        >
                        Contact Me
                        </Button>
                    </form>
                </Grid>
            </Box>
        </div>
    )
}

export default Contact
