import React, { useState, useEffect } from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

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
    marginBottom: '3em',
    [theme.breakpoints.down('md')]: {
      height: '2em'
    },
    [theme.breakpoints.down('xs')]: {
      height: '1.2em'
    }
  },
  logo: {
    height: '7em',
    [theme.breakpoints.down('md')]: {
      height: '6.5em'
    },
    [theme.breakpoints.down('xs')]: {
      height: '5.5em'
    }
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
    color: 'white',
    opacity: 0.6,
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    marginLeft: '50px',
    marginRight: '30px',
    height: '45px'
  },
  menu: {
    background: theme.palette.common.blue,
    color: 'white',
    borderRadius: 0
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.4,
    '&:hover': {
      opacity: 1
    }
  },
  drawerIconContainer: {
    marginLeft: 'auto',
    marginRight: '40px',
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  drawerIcon: {
    height: '50px',
    width: '50px'
  },
  drawer: {
    backgroundColor: theme.palette.common.blue
  },
  drawerItem: {
    ...theme.typography.tab,
    color: 'white',
    opacity: 0.4
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange
  },
  drawerItemSelected: {
    opacity: 1
  }


  // MuiPaper: {
  //   background: url(src / assets / check.svg)
  // }

}))

const Header = () => {
  const classes = useStyles()
  const theme = useTheme()
  const iOS = process.browser && /iPad|iPhone|iPod/
    .test(navigator.userAgent)
  // returns medium and below to true..
  const matches = useMediaQuery(theme.breakpoints.down('md'))

  const [openDrawer, setOpenDrawer] = useState(false)
  // value indicates the active tab...
  const [value, setValue] = useState(0)
  const [anchorEl, setAnchorEl] = useState(null)
  const [openMenu, setOpenMenu] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const handleChange = (e, newValue) => {
    setValue(newValue)
  }

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
    setOpenMenu(true)
  }

  const handleMenuItemClick = (event, i) => {
    setAnchorEl(null)
    setOpenMenu(false)
    setSelectedIndex(i)
  }

  const handleClose = (e) => {
    setAnchorEl(null)
    setOpenMenu(false)
  }

  const menuOptions =
    [
      { name: "Services", link: '/services' },
      { name: "Custom Software Development", link: "/customsoftware" },
      { name: "Mobile App Development", link: '/mobileapps' },
      { name: "Website Development", link: "/websites" }
    ]

  useEffect(() => {

    switch (window.location.pathname) {
      case "/":
        if (value !== 0) {
          setValue(0)
        }
        break
      case "/services":
        if (value !== 1) {
          setValue(1)
          setSelectedIndex(0)
        }
        break
      case "/customsoftware":
        if (value !== 1) {
          setValue(1)
          setSelectedIndex(1)
        }
        break
      case "/mobileapps":
        if (value !== 1) {
          setValue(1)
          setSelectedIndex(2)
        }
        break
      case "/websites":
        if (value !== 1) {
          setValue(1)
          setSelectedIndex(3)
        }
        break

      case "/revolution":
        if (value !== 2) {
          setValue(2)
        }
        break
      case "/aboutus":
        if (value !== 3) {
          setValue(3)
        }
        break
      case "/contactus":
        if (value !== 4) {
          setValue(4)
        }
        break
      case "/estimate":
        if (value !== 5) {
          setValue(5)
        }
        break

      default:
        break
    }

  }, [value])

  const tabs = (
    <>
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
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup={anchorEl ? 'true' : undefined}
          className={classes.tab}
          component={Link}
          onMouseOver={event => handleClick(event)}
          to='/services'
          label='Services' />
        <Tab
          className={classes.tab}
          component={Link}
          to='/revolution'
          label='Revolution' />
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
        to='/estimate'
      >
        Free Estimate
            </Button>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        classes={{ paper: classes.menu }}
        MenuListProps={{ onMouseLeave: handleClose }}
        elevation={0}
      >
        {menuOptions.map((option, i) => (
          <MenuItem
            key={option}
            component={Link}
            to={option.link}
            classes={{ root: classes.menuItem }}
            onClick={(event) => {
              handleMenuItemClick(event, i);
              setValue(1);
              handleClose()
            }}
            selected={i === selectedIndex && value === 1}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  )

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <List
          disablePadding
        >
          <ListItem
            onClick={() => { setOpenDrawer(false); setValue(0) }}
            divider
            button
            component={Link}
            to='/'
            selected={value === 0} // value indicates the active tab...
          >
            <ListItemText
              className={value === 0 ?
                [classes.drawerItem, classes.drawerItemSelected] :
                classes.drawerItem}
              disableTypography
            >
              Home
            </ListItemText>
          </ListItem>

          <ListItem
            onClick={() => { setOpenDrawer(false); setValue(1) }}
            divider
            button
            component={Link}
            to='/services'
            selected={value === 1}
          >
            <ListItemText
              className={value === 1 ?
                [classes.drawerItem, classes.drawerItemSelected] :
                classes.drawerItem}
              disableTypography
            >
              Services
            </ListItemText>
          </ListItem>

          <ListItem
            onClick={() => { setOpenDrawer(false); setValue(2) }}
            divider
            button
            component={Link}
            to='/revolution'
            selected={value === 2}
          >
            <ListItemText
              className={value === 2 ?
                [classes.drawerItem, classes.drawerItemSelected] :
                classes.drawerItem}
              disableTypography
            >
              Revolution
            </ListItemText>
          </ListItem>

          <ListItem
            onClick={() => { setOpenDrawer(false); setValue(3) }}
            divider
            button
            component={Link}
            to='/aboutus'
            selected={value === 3}
          >
            <ListItemText
              className={value === 3 ?
                [classes.drawerItem, classes.drawerItemSelected] :
                classes.drawerItem}
              disableTypography
            >
              About Us
            </ListItemText>
          </ListItem>

          <ListItem
            onClick={() => { setOpenDrawer(false); setValue(4) }}
            divider
            button
            component={Link}
            to='/contactus'
            selected={value === 4}
          >
            <ListItemText
              className={value === 4 ?
                [classes.drawerItem, classes.drawerItemSelected] :
                classes.drawerItem}
              disableTypography
            >
              Contact Us
            </ListItemText>
          </ListItem>

          <ListItem
            onClick={() => { setOpenDrawer(false); setValue(5) }}
            divider
            button
            component={Link}
            to='/estimate'
            selected={value === 5}
            className={classes.drawerItemEstimate}
          >
            <ListItemText
              className={value === 5 ?
                [classes.drawerItem, classes.drawerItemSelected] :
                classes.drawerItem}
              disableTypography
            >
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>

      <IconButton
        // set togglable to true false
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon
          className={classes.drawerIcon}
        />
      </IconButton>
    </>
  )

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
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  )
}

export default Header
