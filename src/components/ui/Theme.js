import { createMuiTheme } from '@material-ui/core/styles';

const lightGreen = '#e8f1f2'
const darkGreen = '#2b6573'
const mediumGreen = '#7bacb7'

export default createMuiTheme({
  palette: {
    common: {
      lightGreen: `${lightGreen}`,
      darkGreen: `${darkGreen}`
    },
    primary: {
      main: `${lightGreen}`
    },
    secondary: {
      main: `${mediumGreen}`,
      medium: `${lightGreen}`
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
    },
    h2: {
      fontFamily: 'Raleway',
      fontSize: '2.5rem',
      textTransform: 'none',
      fontWeight: 700,
      color: `${darkGreen}`,
      lineHeight: 1.5
    },
    h3: {
      fontFamily: 'Pacifico',
      fontSize: '1rem',
      fontWeight: 700
    },
    h4: {
      fontFamily: 'Raleway',
      fontSize: '1rem',
      fontWeight: 700
    },
    h5: {
      fontFamily: 'Raleway',
      fontSize: '1rem',
      fontWeight: 700
    },
    h6: {
      fontFamily: 'Raleway',
      fontSize: '1rem',
      fontWeight: 700
    }
  }
})