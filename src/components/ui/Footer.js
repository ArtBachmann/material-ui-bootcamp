import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'


import footerAdornment from '../../assets/myLogos/FooterNew2.png'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import instagram from '../../assets/instagram.svg'

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.common.lightGreen,
    height: '160px',
    width: '100%',
    zIndex: 1302,
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      height: '75%',
    },
    [theme.breakpoints.down('xs')]: {
      height: '50%',
    },
  },
  adornment: {
    width: '30em',
    height: '100%',
    verticalAlign: 'bottom',
    [theme.breakpoints.down('md')]: {
      width: '24em',
    },
    [theme.breakpoints.down('xs')]: {
      width: '18em',
    },
  },
  mainContainer: {
    position: 'absolute',
    marginLeft: '10vw'
  },
  link: {
    color: '#165d63',
    fontFamily: 'Arial',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    textDecoration: 'none'
  },
  icon: {
    height: '3em',
    width: '3em',
    [theme.breakpoints.down('xs')]: {
      height: '2em',
      width: '2em'
    }

  },
  socialContainer: {
    position: 'absolute',
    marginTop: '-6em',
    marginLeft: '2.2em',
    [theme.breakpoints.down('xs')]: {
      marginTop: '-4.5em',
      marginLeft: '1em'
    }
  },
  gridItem: {
    marginTop: '1.2em',
    marginLeft: '2em',
    zIndex: '1303'
  },
}))

const Footer = (props) => {
  const classes = useStyles()

  return (
    <footer
      className={classes.footer}>
      <Hidden mdDown>
        <Grid
          container
          className={classes.mainContainer}
          justify='center'
        >
          <Grid
            item
            className={classes.gridItem}
          >
            <Grid
              container
              direction='column'
              className={classes.footer_home}
            // spacing={3}
            >
              <Grid
                item
                className={classes.link}
                onClick={() => props.setValue(0)}
                component={Link} to='/'
              >
                Home
            </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            className={classes.gridItem}
          >
            <Grid
              container
              direction='column'
              spacing={2}
            >
              <Grid
                item
                className={classes.link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(0)
                }}
                component={Link} to='/services'
              >
                Services
            </Grid>
              <Grid
                item
                className={classes.link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(1)
                }}
                component={Link} to='/customsoftware'
              >
                Custom Software Development
            </Grid>
              <Grid
                item
                className={classes.link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(2)
                }}
                component={Link} to='/mobileapps'
              >
                Mobile App Development
            </Grid>
              <Grid
                item
                className={classes.link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(3)
                }}
                component={Link} to='/websites'
              >
                Website Development
            </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            className={classes.gridItem}
          >
            <Grid container
              direction='column'
              spacing={2}
            >
              <Grid
                item
                className={classes.link}
                onClick={() => props.setValue(2)}
                component={Link} to='/revolution'
              >
                The Revolution
            </Grid>
              <Grid
                item
                className={classes.link}
                onClick={() => props.setValue(2)}
                component={Link} to='/revolution'
              >
                The Vision
            </Grid>
              <Grid
                item
                className={classes.link}
                onClick={() => props.setValue(2)}
                component={Link} to='/revolution'
              >
                Technology
            </Grid>
              <Grid
                item
                className={classes.link}
                onClick={() => props.setValue(2)}
                component={Link} to='/revolution'
              >
                Process
            </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            className={classes.gridItem}
          >
            <Grid container
              direction='column'
              spacing={2}
            >
              <Grid
                item
                className={classes.link}
                onClick={() => props.setValue(3)}
                component={Link} to='/aboutus'
              >
                About Us
            </Grid>
              <Grid
                item
                className={classes.link}
                onClick={() => props.setValue(3)}
                component={Link} to='/aboutus'
              >
                History
            </Grid>
              <Grid
                item
                className={classes.link}
                onClick={() => props.setValue(3)}
                component={Link} to='/aboutus'
              >
                Team
            </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            className={classes.gridItem}
          >
            <Grid container
              direction='column'
              spacing={2}
            >
              <Grid
                item
                className={classes.link}
                onClick={() => props.setValue(4)}
                component={Link} to='/contuctus'
              >
                Contact Us
            </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        src={footerAdornment}
        alt="netlify decorative slash"
        className={classes.adornment}
      />

      <Grid container
        spacing={4}
        justify='left'
        className={classes.socialContainer}
      >
        <Grid
          item component={'a'}
          href='https://www.facebook.com'
          noopener noreferrer
          target='_blank'>
          <img alt='facebook logo'
            src={facebook}
            className={classes.icon}
          />
        </Grid>
        <Grid
          item component={'a'}
          href='https://www.twitter.com'
          noopener noreferrer
          target='_blank'>
          <img alt='twitter logo'
            src={twitter}
            className={classes.icon}
          />
        </Grid>
        <Grid item component={'a'}
          href='https://www.instagram.com'
          noopener noreferrer
          target='_blank'>
          <img alt='instagram logo'
            src={instagram}
            className={classes.icon}
          />
        </Grid>
      </Grid>

    </footer>
  )
}

export default Footer
