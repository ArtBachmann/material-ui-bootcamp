import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = '#035d66'
const arcOrange = '#024249'

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
      fontSize: '1.3rem'
    },

    estimate: {
      fontFamily: 'Pacifico',
      fontSize: '1rem',
      textTransform: 'none',
      color: 'white'
    }
  }
})