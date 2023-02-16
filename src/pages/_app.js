import '../styles/globals.css'
import { ThemeProvider } from 'styled-components'

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={{ token: {
      colorPrimary: '#00b96b',
    },}}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App