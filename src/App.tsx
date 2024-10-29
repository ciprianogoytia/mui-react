import { CssBaseline, ThemeProvider } from "@mui/material"
import {theme} from "./theme/theme"
import Pages from "./pages/pages"

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Pages />
    </ThemeProvider>
  )
}

export default App
