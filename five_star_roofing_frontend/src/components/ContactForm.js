import React from 'react';
import axios from 'axios'
import PropTypes from 'prop-types'
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';




const styles = theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  }
})

const API_PATH = `${process.env.PUBLIC_URL}/api/mailer.php`

class ContactForm extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
      fullName: '',
      email: '',
      phone: '',
      message: '',
      mailSent: false,
      error: null
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: this.state
    })
      .then(result => {
        this.setState({
          mailSent: result.data.sent
        })
      })
      .catch(error => this.setState({ error: error.message }));
  }

  render() {
    const { classes } = this.props
    return (
      <Container component="main" >
        <CssBaseline />
        <div className={classes.paper}>
          <form className={classes.form} noValidate>
            {this.state.mailSent && 
              <div>Thank you for contacting us, we will respond to you promptly</div>
            }
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="fullName"
                  name="fullName"
                  variant="filled"
                  required
                  fullWidth
                  id="fullName"
                  label="Full Name"
                  value={this.state.fullName}
                  onChange={e => this.setState({fullName: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="filled"
                  required
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={this.state.email}
                  onChange={e => this.setState({email: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  variant="filled"
                  fullWidth
                  id="phone"
                  label="Phone Number"
                  name="phone"
                  autoComplete="phone"
                  value={this.state.phone}
                  onChange={e => this.setState({phone: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="filled"
                  required
                  fullWidth
                  id="message"
                  label="Your message"
                  multiline
                  rows={8}
                  value={this.state.message}
                  onChange={e => this.setState({message: e.target.value })}
                />
              </Grid>
            </Grid>
            <button 
              type="submit"
              className="pz-contact-us__form-button"
              onClick={e => this.handleSubmit(e)}
              value="Submit"
            >
              Send
            </button>

          </form>
        </div>
      </Container>
    )
  }
}

ContactForm.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ContactForm)
