import React, { useState, useEffect } from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.svg'

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,

  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em'
  },
  logo: {
    height: '5em'
  },
  logoContainer: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  tabContainer: {
    marginLeft: 'auto'
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px',
    color: 'white'
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    marginLeft: '50px',
    marginRight: '30px',
    height: '45px'
  }
}))

const Header = () => {
  const classes = useStyles()

  const [value, setValue] = useState(0)

  const handleChange = (e, value) => {
    setValue(value)
  }

  useEffect(() => {
    if (window.location.pathname === '/' && value !== 0) {
      setValue(0)
    } else if (window.location.pathname === '/revolution' && value !== 1) {
      setValue(1)
    } else if (window.location.pathname === '/services' && value !== 2) {
      setValue(2)
    } else if (window.location.pathname === '/aboutus' && value !== 3) {
      setValue(3)
    } else if (window.location.pathname === '/contactus' && value !== 4) {
      setValue(4)
    }
  }, [value])

  return (
    <>
      <ElevationScroll>
        <AppBar position='fixed' color='primary'>
          <Toolbar disableGutters>
            <Button
              component={Link}
              to='/'
              onClick={() => {
                setValue(0)
              }
              }
              className={classes.logoContainer}
              disableRipple
            >
              <img src={logo} alt='Company Logo' className={classes.logo} />
            </Button>
            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabContainer}
              indicatorColor='primary'
            >
              <Tab
                className={classes.tab}
                component={Link}
                to='/'
                label='Home' />
              <Tab
                className={classes.tab}
                component={Link}
                to='/revolution'
                label='Revolution' />
              <Tab
                className={classes.tab}
                component={Link}
                to='/services'
                label='Services' />
              <Tab
                className={classes.tab}
                component={Link}
                to='/aboutus'
                label='About Us' />
              <Tab
                className={classes.tab}
                component={Link}
                to='/contactus'
                label='Contact Us' />

            </Tabs>
            <Button
              variant='contained'
              color='secondary'
              className={classes.button}
            >
              Free Estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  )
}

export default Header
