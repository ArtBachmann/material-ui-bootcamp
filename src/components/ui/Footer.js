import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CardMedia from '@material-ui/core/CardMedia';

// import footerAdornment from '../../assets/Footer Adornment.svg'

import footerAdornment from '../../assets/myLogos/FooterNew2.png'

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
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
  }
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <footer
      className={classes.footer}>
      <img
        src={footerAdornment}
        alt="black decorative slash"
        className={classes.adornment}
      />
    </footer>
  )
}

export default Footer
