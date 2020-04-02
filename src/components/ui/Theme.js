import { createMuiTheme } from '@material-ui/core/styles';

// const arcBlue = '#035d66'
const arcBlue = '#e8f1f2'
const arcOrange = '#2b6573'

export default createMuiTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`
    },
    primary: {
      main: `${arcBlue}`
    },
    secondary: {
      main: `${arcOrange}`
    }
  },

  typography: {
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontWeight: 500,
      fontSize: '1.3rem',
      color: '#165d63'
    },

    estimate: {
      fontFamily: 'Pacifico',
      fontSize: '1rem',
      textTransform: 'none',
      color: 'white'
    }
  }
})