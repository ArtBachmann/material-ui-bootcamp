import React from 'react'
import Lottie from 'react-lottie'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import ButtonArrow from '../components/ui/ButtonArrow'
import Typography from '@material-ui/core/Typography'

import animationData from '../animations/landinganimation/data'

const useStyles = makeStyles(theme => ({
  animation: {
    maxWidth: '40em',
    minWidth: '21em',
    marginTop: '2em',
    marginLeft: '10%',
  },
  estimateButton: {
    ...theme.typography.estimate,
    background: theme.palette.common.darkGreen,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    '&:hover': {
      background: theme.palette.secondary.main
    }
  },
  buttonContainer: {
    marginTop: '1em'
  },
  learnButtonHero: {
    borderColor: theme.palette.common.darkGreen,
    color: theme.palette.common.darkGreen,
    borderWidth: 2,
    textTransform: 'none',
    borderRadius: 50,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    width: 145,
    height: 45
  },
}))

const LandingPage = () => {
  const classes = useStyles()

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    renderSettings: {
      preserveSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }
  }

  return (
    <>
      <Grid container direction='column'>
        <Grid item>
          <Grid
            container
            direction='row'
            justify='flex-end'
            alignItems='center'
          >
            <Grid sm item >
              <Typography
                variant='h2'
                align='center'
              >
                Bringing the West Coast Technology<br />to the Midwest
              </Typography>
              <Grid
                container
                justify='center'
                className={classes.buttonContainer}
              >
                <Grid item>
                  <Button
                    variant='contained'
                    className={classes.estimateButton}
                  >Free Estimate</Button>
                </Grid>
                <Grid item>
                  <Button
                    variant='outlined'
                    className={classes.learnButtonHero}
                  >
                    Learn More
                    <ButtonArrow
                      width={25}
                      height={25}
                      fill='red' />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              sm
              item
              className={classes.animation}
            >
              <Lottie
                options={defaultOptions}
                height={'100%'}
                width={'100%'}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default LandingPage
